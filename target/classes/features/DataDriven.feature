Feature: Achieving Data Driven Testing in BDD-cucumber with Examples keyword and Scenario Outline
Scenario Outline: Multiple DataSets

Given hello
When user enters "<username>" and "<password>"
Then hi
#Similar kind of words should be avoided else cucumber gets confused. That is why the word <<again>> is written to avoid <<cucumber.runtime.AmbiguousStepDefinitionsException: matches more than one step definition>>
Then user again enters "<designation>" and "<dob>"

Examples:
| username | password | designation | dob |
| Abha | Kumari | SSE | 01-02-2001|
| Piyush | Kumar | SE | 02-03-2002|
| Anika | Singh | ASE | 03-03-2003|