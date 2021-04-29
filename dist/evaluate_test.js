"use strict";

var evaluate = require("./evaluate");
var ruleSet = require("./rule_sets");
var ruleSetVersions = require("./rule_set_versions");

var result = evaluate(JSON.stringify(ruleSet), JSON.stringify(ruleSetVersions), "delivery_charges", "{\"test\": 10}", "latest", null, null, null);
console.log(result);