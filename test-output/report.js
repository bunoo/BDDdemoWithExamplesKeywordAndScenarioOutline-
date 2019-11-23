$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Abha Kumari/eclipse-workspace/BDDdemoWithExamplesKeywordAndScenarioOutline/src/main/java/features/DataDriven.feature");
formatter.feature({
  "line": 1,
  "name": "Achieving Data Driven Testing in BDD-cucumber with Examples keyword and Scenario Outline",
  "description": "",
  "id": "achieving-data-driven-testing-in-bdd-cucumber-with-examples-keyword-and-scenario-outline",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Multiple DataSets",
  "description": "",
  "id": "achieving-data-driven-testing-in-bdd-cucumber-with-examples-keyword-and-scenario-outline;multiple-datasets",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "hello",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "hi",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Similar kind of words should be avoided else cucumber gets confused. That is why the word \u003c\u003cagain\u003e\u003e is written to avoid \u003c\u003ccucumber.runtime.AmbiguousStepDefinitionsException: matches more than one step definition\u003e\u003e"
    }
  ],
  "line": 8,
  "name": "user again enters \"\u003cdesignation\u003e\" and \"\u003cdob\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "achieving-data-driven-testing-in-bdd-cucumber-with-examples-keyword-and-scenario-outline;multiple-datasets;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "designation",
        "dob"
      ],
      "line": 11,
      "id": "achieving-data-driven-testing-in-bdd-cucumber-with-examples-keyword-and-scenario-outline;multiple-datasets;;1"
    },
    {
      "cells": [
        "Abha",
        "Kumari",
        "SSE",
        "01-02-2001"
      ],
      "line": 12,
      "id": "achieving-data-driven-testing-in-bdd-cucumber-with-examples-keyword-and-scenario-outline;multiple-datasets;;2"
    },
    {
      "cells": [
        "Piyush",
        "Kumar",
        "SE",
        "02-03-2002"
      ],
      "line": 13,
      "id": "achieving-data-driven-testing-in-bdd-cucumber-with-examples-keyword-and-scenario-outline;multiple-datasets;;3"
    },
    {
      "cells": [
        "Anika",
        "Singh",
        "ASE",
        "03-03-2003"
      ],
      "line": 14,
      "id": "achieving-data-driven-testing-in-bdd-cucumber-with-examples-keyword-and-scenario-outline;multiple-datasets;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Multiple DataSets",
  "description": "",
  "id": "achieving-data-driven-testing-in-bdd-cucumber-with-examples-keyword-and-scenario-outline;multiple-datasets;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "hello",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"Abha\" and \"Kumari\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "hi",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Similar kind of words should be avoided else cucumber gets confused. That is why the word \u003c\u003cagain\u003e\u003e is written to avoid \u003c\u003ccucumber.runtime.AmbiguousStepDefinitionsException: matches more than one step definition\u003e\u003e"
    }
  ],
  "line": 8,
  "name": "user again enters \"SSE\" and \"01-02-2001\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DataDriven.hello()"
});
formatter.result({
  "duration": 594797700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abha",
      "offset": 13
    },
    {
      "val": "Kumari",
      "offset": 24
    }
  ],
  "location": "DataDriven.user_enters_and(String,String)"
});
formatter.result({
  "duration": 5567900,
  "status": "passed"
});
formatter.match({
  "location": "DataDriven.hi()"
});
formatter.result({
  "duration": 294100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SSE",
      "offset": 19
    },
    {
      "val": "01-02-2001",
      "offset": 29
    }
  ],
  "location": "DataDriven.user_again_enters_and(String,String)"
});
formatter.result({
  "duration": 305100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Multiple DataSets",
  "description": "",
  "id": "achieving-data-driven-testing-in-bdd-cucumber-with-examples-keyword-and-scenario-outline;multiple-datasets;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "hello",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"Piyush\" and \"Kumar\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "hi",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Similar kind of words should be avoided else cucumber gets confused. That is why the word \u003c\u003cagain\u003e\u003e is written to avoid \u003c\u003ccucumber.runtime.AmbiguousStepDefinitionsException: matches more than one step definition\u003e\u003e"
    }
  ],
  "line": 8,
  "name": "user again enters \"SE\" and \"02-03-2002\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DataDriven.hello()"
});
formatter.result({
  "duration": 301700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Piyush",
      "offset": 13
    },
    {
      "val": "Kumar",
      "offset": 26
    }
  ],
  "location": "DataDriven.user_enters_and(String,String)"
});
formatter.result({
  "duration": 504600,
  "status": "passed"
});
formatter.match({
  "location": "DataDriven.hi()"
});
formatter.result({
  "duration": 126600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SE",
      "offset": 19
    },
    {
      "val": "02-03-2002",
      "offset": 28
    }
  ],
  "location": "DataDriven.user_again_enters_and(String,String)"
});
formatter.result({
  "duration": 235600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Multiple DataSets",
  "description": "",
  "id": "achieving-data-driven-testing-in-bdd-cucumber-with-examples-keyword-and-scenario-outline;multiple-datasets;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "hello",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"Anika\" and \"Singh\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "hi",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Similar kind of words should be avoided else cucumber gets confused. That is why the word \u003c\u003cagain\u003e\u003e is written to avoid \u003c\u003ccucumber.runtime.AmbiguousStepDefinitionsException: matches more than one step definition\u003e\u003e"
    }
  ],
  "line": 8,
  "name": "user again enters \"ASE\" and \"03-03-2003\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DataDriven.hello()"
});
formatter.result({
  "duration": 298400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anika",
      "offset": 13
    },
    {
      "val": "Singh",
      "offset": 25
    }
  ],
  "location": "DataDriven.user_enters_and(String,String)"
});
formatter.result({
  "duration": 273000,
  "status": "passed"
});
formatter.match({
  "location": "DataDriven.hi()"
});
formatter.result({
  "duration": 278600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ASE",
      "offset": 19
    },
    {
      "val": "03-03-2003",
      "offset": 29
    }
  ],
  "location": "DataDriven.user_again_enters_and(String,String)"
});
formatter.result({
  "duration": 304300,
  "status": "passed"
});
});