const evaluate = require("./evaluate")
const ruleSet = require("./rule_sets")
const ruleSetVersions = require("./rule_set_versions")

const result = evaluate(JSON.stringify(ruleSet), JSON.stringify(ruleSetVersions), "delivery_charges", "{\"test\": 10}", "latest", null, null, null)
console.log(result)