"use strict";
var set = {
    "created_at": "2020-11-11T10:45:55Z",
    "id": 10,
    "name": "delivery_charges",
    "rule_set_metadata": [
        {
            "created_at": "2021-03-13T09:10:04Z",
            "datatype": "integer",
            "id": 37,
            "name": "another",
            "property_category": "condition",
            "updated_at": "2021-03-13T09:10:04Z",
            "validations": {
                "max": 1000,
                "min": 0
            }
        },
        {
            "created_at": "2020-11-11T10:48:29Z",
            "datatype": "text",
            "id": 32,
            "name": "data",
            "property_category": "result",
            "updated_at": "2020-11-11T10:48:29Z",
            "validations": {}
        },
        {
            "created_at": "2020-11-11T10:48:11Z",
            "datatype": "text",
            "id": 31,
            "name": "test",
            "property_category": "condition",
            "updated_at": "2020-11-11T10:48:11Z",
            "validations": {}
        }
    ],
    "test_cases": [],
    "updated_at": "2020-11-11T10:45:55Z"
}
var ruleSetVersion = [
    {
        "id": 935,
        "last_updated_by": 1,
        "created_by": 1,
        "default_rule_id": 978,
        "is_live": true,
        "is_archived": false,
        "start_time": "2021-04-07T13:40:00Z",
        "rule_set_id": 10,
        "rules": [
            {
                "id": 978,
                "priority": 10000001,
                "conditions": [],
                "results": [
                    {
                        "id": 75,
                        "operator": null,
                        "value": "default_value",
                        "rule_id": 978,
                        "rule_set_metadatum": {
                            "created_at": "2020-11-11T10:48:29Z",
                            "datatype": "text",
                            "id": 32,
                            "name": "data",
                            "property_category": "result",
                            "updated_at": "2020-11-11T10:48:29Z",
                            "validations": {}
                        },
                        "created_at": "2021-03-14T16:40:05Z",
                        "updated_at": "2021-03-14T16:40:05Z"
                    }
                ],
                "created_at": "2021-03-14T16:40:05Z",
                "updated_at": "2021-03-14T16:40:05Z"
            },
            {
                "id": 979,
                "priority": 1,
                "conditions": [
                    {
                        "id": 62,
                        "comparator": "equal_to",
                        "value": "10",
                        "rule_id": 979,
                        "rule_set_metadatum": {
                            "created_at": "2020-11-11T10:48:11Z",
                            "datatype": "text",
                            "id": 31,
                            "name": "test",
                            "property_category": "condition",
                            "updated_at": "2020-11-11T10:48:11Z",
                            "validations": {}
                        },
                        "created_at": "2021-03-14T16:40:06Z",
                        "updated_at": "2021-03-14T16:40:06Z"
                    }
                ],
                "results": [
                    {
                        "id": 76,
                        "operator": null,
                        "value": "10",
                        "rule_id": 979,
                        "rule_set_metadatum": {
                            "created_at": "2020-11-11T10:48:29Z",
                            "datatype": "text",
                            "id": 32,
                            "name": "data",
                            "property_category": "result",
                            "updated_at": "2020-11-11T10:48:29Z",
                            "validations": {}
                        },
                        "created_at": "2021-03-14T16:40:06Z",
                        "updated_at": "2021-03-14T16:40:06Z"
                    }
                ],
                "created_at": "2021-03-14T16:40:06Z",
                "updated_at": "2021-03-14T16:40:06Z"
            }
        ],
        "created_at": "2021-03-14T16:40:05Z",
        "updated_at": "2021-04-06T12:02:54Z"
    },
    {
        "id": 938,
        "last_updated_by": 1,
        "created_by": 1,
        "default_rule_id": 997,
        "is_live": true,
        "is_archived": false,
        "start_time": "2021-04-06T11:45:00Z",
        "rule_set_id": 10,
        "rules": [
            {
                "id": 997,
                "priority": 10000001,
                "conditions": [],
                "results": [
                    {
                        "id": 86,
                        "operator": null,
                        "value": "default_value",
                        "rule_id": 997,
                        "rule_set_metadatum": {
                            "created_at": "2020-11-11T10:48:29Z",
                            "datatype": "text",
                            "id": 32,
                            "name": "data",
                            "property_category": "result",
                            "updated_at": "2020-11-11T10:48:29Z",
                            "validations": {}
                        },
                        "created_at": "2021-03-23T14:44:58Z",
                        "updated_at": "2021-03-23T14:44:58Z"
                    }
                ],
                "created_at": "2021-03-23T14:44:58Z",
                "updated_at": "2021-03-23T14:44:58Z"
            },
            {
                "id": 998,
                "priority": 1,
                "conditions": [
                    {
                        "id": 69,
                        "comparator": "equal_to",
                        "value": "10",
                        "rule_id": 998,
                        "rule_set_metadatum": {
                            "created_at": "2020-11-11T10:48:11Z",
                            "datatype": "text",
                            "id": 31,
                            "name": "test",
                            "property_category": "condition",
                            "updated_at": "2020-11-11T10:48:11Z",
                            "validations": {}
                        },
                        "created_at": "2021-03-23T14:44:58Z",
                        "updated_at": "2021-03-23T14:44:58Z"
                    }
                ],
                "results": [
                    {
                        "id": 87,
                        "operator": null,
                        "value": "10",
                        "rule_id": 998,
                        "rule_set_metadatum": {
                            "created_at": "2020-11-11T10:48:29Z",
                            "datatype": "text",
                            "id": 32,
                            "name": "data",
                            "property_category": "result",
                            "updated_at": "2020-11-11T10:48:29Z",
                            "validations": {}
                        },
                        "created_at": "2021-03-23T14:44:58Z",
                        "updated_at": "2021-03-23T14:44:58Z"
                    }
                ],
                "created_at": "2021-03-23T14:44:58Z",
                "updated_at": "2021-03-23T14:44:58Z"
            }
        ],
        "created_at": "2021-03-23T14:44:58Z",
        "updated_at": "2021-04-06T11:40:24Z"
    },
    {
        "id": 927,
        "last_updated_by": 1,
        "created_by": 1,
        "default_rule_id": 958,
        "is_live": true,
        "is_archived": false,
        "start_time": "2020-11-17T12:40:00Z",
        "rule_set_id": 10,
        "rules": [
            {
                "id": 958,
                "priority": 10000001,
                "conditions": [],
                "results": [
                    {
                        "id": 54,
                        "operator": null,
                        "value": "default_value",
                        "rule_id": 958,
                        "rule_set_metadatum": {
                            "created_at": "2020-11-11T10:48:29Z",
                            "datatype": "text",
                            "id": 32,
                            "name": "data",
                            "property_category": "result",
                            "updated_at": "2020-11-11T10:48:29Z",
                            "validations": {}
                        },
                        "created_at": "2020-11-11T10:49:08Z",
                        "updated_at": "2020-11-11T10:49:08Z"
                    }
                ],
                "created_at": "2020-11-11T10:48:35Z",
                "updated_at": "2020-11-11T10:48:35Z"
            },
            {
                "id": 959,
                "priority": 1,
                "conditions": [
                    {
                        "id": 53,
                        "comparator": "equal_to",
                        "value": "10",
                        "rule_id": 959,
                        "rule_set_metadatum": {
                            "created_at": "2020-11-11T10:48:11Z",
                            "datatype": "text",
                            "id": 31,
                            "name": "test",
                            "property_category": "condition",
                            "updated_at": "2020-11-11T10:48:11Z",
                            "validations": {}
                        },
                        "created_at": "2020-11-11T10:58:59Z",
                        "updated_at": "2020-11-11T10:58:59Z"
                    }
                ],
                "results": [
                    {
                        "id": 55,
                        "operator": null,
                        "value": "10",
                        "rule_id": 959,
                        "rule_set_metadatum": {
                            "created_at": "2020-11-11T10:48:29Z",
                            "datatype": "text",
                            "id": 32,
                            "name": "data",
                            "property_category": "result",
                            "updated_at": "2020-11-11T10:48:29Z",
                            "validations": {}
                        },
                        "created_at": "2020-11-11T10:59:05Z",
                        "updated_at": "2020-11-11T10:59:05Z"
                    }
                ],
                "created_at": "2020-11-11T10:58:50Z",
                "updated_at": "2020-11-11T10:58:50Z"
            }
        ],
        "created_at": "2020-11-11T10:48:35Z",
        "updated_at": "2020-11-17T12:38:57Z"
    },
    {
        "id": 928,
        "last_updated_by": 1,
        "created_by": 1,
        "default_rule_id": 960,
        "is_live": false,
        "is_archived": false,
        "start_time": "2020-11-17T12:40:00Z",
        "rule_set_id": 10,
        "rules": [
            {
                "id": 960,
                "priority": 10000001,
                "conditions": [],
                "results": [
                    {
                        "id": 56,
                        "operator": null,
                        "value": "default_value_928",
                        "rule_id": 960,
                        "rule_set_metadatum": {
                            "created_at": "2020-11-11T10:48:29Z",
                            "datatype": "text",
                            "id": 32,
                            "name": "data",
                            "property_category": "result",
                            "updated_at": "2020-11-11T10:48:29Z",
                            "validations": {}
                        },
                        "created_at": "2020-11-11T11:01:35Z",
                        "updated_at": "2020-11-11T11:01:35Z"
                    }
                ],
                "created_at": "2020-11-11T11:01:13Z",
                "updated_at": "2020-11-11T11:01:13Z"
            },
            {
                "id": 961,
                "priority": 1,
                "conditions": [
                    {
                        "id": 54,
                        "comparator": "greater_than",
                        "value": "10",
                        "rule_id": 961,
                        "rule_set_metadatum": {
                            "created_at": "2020-11-11T10:48:11Z",
                            "datatype": "text",
                            "id": 31,
                            "name": "test",
                            "property_category": "condition",
                            "updated_at": "2020-11-11T10:48:11Z",
                            "validations": {}
                        },
                        "created_at": "2020-11-12T06:33:14Z",
                        "updated_at": "2020-11-12T06:33:14Z"
                    }
                ],
                "results": [
                    {
                        "id": 57,
                        "operator": null,
                        "value": "greater_than_10",
                        "rule_id": 961,
                        "rule_set_metadatum": {
                            "created_at": "2020-11-11T10:48:29Z",
                            "datatype": "text",
                            "id": 32,
                            "name": "data",
                            "property_category": "result",
                            "updated_at": "2020-11-11T10:48:29Z",
                            "validations": {}
                        },
                        "created_at": "2020-11-12T06:33:26Z",
                        "updated_at": "2020-11-12T06:33:26Z"
                    }
                ],
                "created_at": "2020-11-12T06:33:04Z",
                "updated_at": "2020-11-12T06:33:04Z"
            }
        ],
        "created_at": "2020-11-11T11:01:13Z",
        "updated_at": "2020-11-17T12:38:33Z"
    }
]

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

function evaluate(ruleSet, ruleSetVersions, rule_set_name, facts, version, audit_log_save_method, skip_experiment, show_test_results) {
    var initalData = {
        rule_set_name: rule_set_name,
        facts: JSON.parse(facts),
        version: version || "latest",
        audit_log_save_method: audit_log_save_method || "sync",
        skip_experiment: skip_experiment || false,
        show_test_results: show_test_results || false
    };
    // console.log(JSON.stringify(ruleSet, undefined, 2))

    ruleSet = { "rule_set": set }
    ruleSetVersions = { "rule_set_versions": ruleSetVersion }
    if (!facts) {
        throw Error("Missing Facts");
    }

    if (typeof ruleSet === "string") {
        ruleSet = JSON.parse(ruleSet);
    }

    if (typeof ruleSetVersions === "string") {
        ruleSetVersions = JSON.parse(ruleSetVersions);
    }
    // console.log("***", JSON.stringify(ruleSet, undefined, 2))
    var version_check = check_version(initalData, version);

    if (!version_check) {
        throw Error("Invalid reference Audit Log ID");
    }
    try {
        var findRuleSet = find_rule_set(ruleSet["rule_set"], version_check);
        var findRunningExperiment = find_running_experiment(findRuleSet);
        var versionFromExperiment = fetch_version_from_running_experiment(findRunningExperiment);
        var setVersionId = set_version_id(ruleSetVersions["rule_set_versions"], versionFromExperiment, versionFromExperiment["version"]);
        var fetchVersion = fetch_version(ruleSetVersions["rule_set_versions"], setVersionId);
        var filterMatchedRules = filter_matched_rules(fetchVersion, fetchVersion["rule_set_version"]);
        var reducedResults = reduce_results(filterMatchedRules, filterMatchedRules["matched_rules"]);
        var finalResponse = form_response(reducedResults);

        return JSON.stringify(finalResponse, undefined, 2);
    } catch (error) {
        console.log(error);
        return JSON.stringify({ message: error.message });
    }
}

function check_version(options, version) {
    if (!version) return false;
    return options;
}

function find_rule_set(ruleSet, options) {
    options['rule_set'] = ruleSet;
    // console.log(JSON.stringify(options, undefined, 2))
    // console.log(ruleSet)
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
        return rsv.id == options["version_id"];
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
            // console.log(value)
            return value && compare(value, condition["comparator"], condition.value, metadatum["datatype"]);
        });
    });
    // console.log(JSON.stringify(options["matched_rules"], undefined, 2))
    return options;
}

function compare(value1, comparator, value2, datatype) {
    value1 = type_cast(value1, datatype);
    value2 = type_cast(value2, datatype);
    // console.log(value1, value2, comparator, datatype)

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
        return a.priority < b.priority;
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
        audit_log_id: args.audit_log_id || null,
        experiment_split_log_id: args.experiment_split_log_id || null,
        experiment_id: args.experiment_id || null,
        version_id: args.version_id,
        split_identifier_value: args.split_identifier_value || null,
        audit_log_async_id: args.audit_log_async_id || null,
        result: args.reduce_matched_rules.result
    };
}
