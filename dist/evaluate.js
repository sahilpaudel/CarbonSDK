"use strict";

/**
 * Owner: Sahil Paudel
 * Original file: /gh/sahilpaudel/CarbonSDK@1.2.0/dist/evaluate.js
 *
 */

try {
  var _console = {
    log: print,
    error: print,
    warn: print
  };
} catch (e) {}

function type_cast(value, datatype) {
  switch (datatype) {
    case "integer":
      {
        var data1 = parseInt(value);
        if (isNaN(data1)) return null;
        return data1;
      }
    case "text":
      return value.toString();
    case "datetime":
      {
        var data2 = Date.parse(value);
        if (isNaN(data2)) return null;
        return data2;
      }
    case "float":
      {
        var data3 = parseFloat(value);
        if (isNaN(data3)) return null;
        return data3;
      }
    case "time":
      {
        var data4 = parseInt(value);
        if (isNaN(data4)) return null;
        return data4;
      }
    case "boolean":
      return value.toString() === "true";
    default:
      return value.toString();
  }
}

function evaluate(ruleSet, ruleSetVersions, rule_set_name, facts, version, show_test_results) {
  var initalData = {
    rule_set_name: rule_set_name,
    facts: JSON.parse(facts),
    version: version || "latest",
    show_test_results: show_test_results || false
  };

  if (!facts) {
    throw Error("Missing Facts");
  }

  if (typeof ruleSet === "string") {
    ruleSet = JSON.parse(ruleSet);
  }

  if (typeof ruleSetVersions === "string") {
    ruleSetVersions = JSON.parse(ruleSetVersions);
  }

  var version_check = check_version(initalData, version);

  if (!version_check) {
    throw Error("Invalid reference Audit Log ID");
  }

  try {
    var findRuleSet = find_rule_set(ruleSet["rule_set"], version_check);
    var setVersionId = set_version_id(ruleSetVersions["rule_set_versions"], findRuleSet, findRuleSet["version"]);
    var fetchVersion = fetch_version(ruleSetVersions["rule_set_versions"], setVersionId);
    var filterMatchedRules = filter_matched_rules(fetchVersion, fetchVersion["rule_set_version"]);
    var reducedResults = reduce_results(filterMatchedRules, filterMatchedRules["matched_rules"]);
    var finalResponse = form_response(reducedResults);

    return JSON.stringify({ data: finalResponse, code: 0, message: "success" });
  } catch (error) {
    console.log(error);
    return JSON.stringify({ message: error.message, code: 1, data: {} });
  }
}

function check_version(options, version) {
  if (!version) return false;
  return options;
}

function find_rule_set(ruleSet, options) {
  options['rule_set'] = ruleSet;
  return options;
}

function set_version_id(ruleSetVersions, options, version_id) {
  if (!version_id) throw Error("No Valid Rule Set Provided");

  if (version_id === "latest") {
    version_id = ruleSetVersions.filter(function (rsv) {
      return rsv["is_live"] === true && Date.parse(rsv["start_time"]) < Date.now() && rsv["rule_set_id"] === options["rule_set"].id;
    })[0].id;
  }
  options["version_id"] = version_id;
  return options;
}

function find_running_experiment(options) {
  options["split_identifier_value"] = null;
  return options;
}

function fetch_version_from_running_experiment(options) {
  return options;
}

function fetch_version(ruleSetVersions, options) {
  options["rule_set_version"] = ruleSetVersions.filter(function (rsv) {
    return rsv.id.toString() == options["version_id"].toString();
  })[0];
  return options;
}

function filter_matched_rules(options, rule_set_version) {
  if (!rule_set_version) throw Error("Invalid Version");

  var rules = options["rule_set_version"].rules || [];
  options["matched_rules"] = rules.filter(function (rule) {
    return rule["conditions"].every(function (condition) {
      var metadatum = condition["rule_set_metadatum"];
      var value = options["facts"][metadatum.name];
      return value && compare(value, condition["comparator"], condition.value, metadatum["datatype"]);
    });
  });
  return options;
}

function compare(value1, comparator, value2, datatype) {
  value1 = type_cast(value1, datatype);
  value2 = type_cast(value2, datatype);

  switch (comparator) {
    case "equal_to":
      {
        return value1 === value2;
      }
    case "not_equal_to":
      {
        return value1 !== value2;
      }
    case "greater_than":
      {
        return value1 > value2;
      }
    case "greater_than_or_equal_to":
      {
        return value1 >= value2;
      }
    case "less_than":
      {
        return value1 < value2;
      }
    case "less_than_or_equal_to":
      {
        return value1 <= value2;
      }
    default:
      return false;
  }
}

function reduce_results(options, matched_rules) {
  if (!matched_rules) throw Error("Matched rules were not set");

  matched_rules = options["matched_rules"];
  var sorted_matached_rules = matched_rules.sort(function (a, b) {
    return b.priority - a.priority;
  });

  options["reduce_matched_rules"] = sorted_matached_rules.reduce(function (reduced_result, currentValue, _currentIndex, _oldArray) {
    return modify_rules_evaluation_response(modify_reduced_results(reduced_result, currentValue), currentValue);
  }, { rules_evaluation_response: [], result: {} });

  return options;
}

function modify_reduced_results(reduced_result, el) {

  var result = reduced_result["result"];

  var reduced = el.results.reduce(function (acc, result, _currentIndex, _oldArray) {
    var value = 0;
    if (result["rule_set_metadatum"]["datatype"] === "json") {
      var temp = result.value;
      value = JSON.parse(temp);
    } else {
      value = type_cast(result.value, result["rule_set_metadatum"]["datatype"]);
    }

    acc[result["rule_set_metadatum"].name] = get_result_value(value, result.operator, reduced_result["result"][result["rule_set_metadatum"].name]);
    return acc;
  }, {});

  reduced_result["result"] = merge_objects(result, reduced);

  return reduced_result;
}

function modify_rules_evaluation_response(reduced_result, el) {
  var reduced_result_data = reduced_result["rules_evaluation_response"];

  var new_reduced_data = { rule_id: el.id, success: true, result: reduced_result["result"] };

  reduced_result_data.push(new_reduced_data);

  reduced_result["rules_evaluation_response"] = reduced_result_data;

  return reduced_result;
}

function get_result_value(value, operator, current_value) {

  if (!operator) return value;

  switch (operator) {
    case "add":
      return (current_value || 0) + value;
    case "subtract":
      return (current_value || 0) - value;
    case "multiply":
      return (current_value || 0) * value;
    case "divide":
      return (current_value || 0) / value;
    default:
      return value;
  }
}

function merge_objects(obj1, obj2) {
  var obj3 = {};
  for (var attrname in obj1) {
    obj3[attrname] = obj1[attrname];
  }
  for (var _attrname in obj2) {
    obj3[_attrname] = obj2[_attrname];
  }
  return obj3;
}

function form_response(args) {
  return {
    rule_set_name: args.rule_set["name"],
    version_id: args.version_id,
    result: args.reduce_matched_rules.result,
    rules_evaluation_response: args.show_test_results ? args.reduce_matched_rules.rules_evaluation_response : null
  };
}