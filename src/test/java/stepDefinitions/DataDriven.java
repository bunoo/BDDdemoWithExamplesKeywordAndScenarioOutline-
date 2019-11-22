package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DataDriven {

	@Given("^hello$")
	public void hello(){
	    System.out.println("Hello");
	}

	@When("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password) {
		System.out.println(username);
		System.out.println(password);
	}

	@Then("^hi$")
	public void hi() {
	    System.out.println("Hi");
	}
	
	@Then("^user again enters \"(.*)\" and \\\"(.*)\\\"$")
	public void user_again_enters_designation_and_dob(String designation, String dob) {
    System.out.println(designation);
    System.out.println(dob);
	}
	
}
