package runnerConfig;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
  features = "C:\\Users\\Abha Kumari\\eclipse-workspace\\BDDdemoWithExamplesKeywordAndScenarioOutline\\src\\main\\java\\features\\DataDriven.feature",
  glue={"stepDefinitions"},
  plugin = {"pretty", "html:test-output","json:json-output/Cucumber.json","junit:junit-xml/Cucumber.xml"}, //We can have pretty output in the form of html, json and xml. In other words, this plugin is for report generation.
  monochrome = true, //display the console output in a proper readable format. Normally we see "90m" something like that in the output. We can compare by making it <<false>>
  //dryRun = true // Checks the mappings b/w feature file and stepDefs file
  strict = true // Mapping b/w the methods of the feature file and stepDefs are strictly checked and it will trigger the suite when it will see all mappings exist
 )

public class TestRunner {

	/* If we execute as Java Application, it will execute and the output will be shown as a java program. That is why incorporated the
	 <<main()>> method in one of the file of stepDefinitions. */
/*	public static void main(String[] args) {
		
		TriggerViaMain tvm = new TriggerViaMain();
		tvm.hello();
		tvm.hi();
		tvm.goodbye();

	}*/
}
