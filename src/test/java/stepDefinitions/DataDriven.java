package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DataDriven {

	@Given("^hello$")
	public void hello(){
	    System.out.println("Hello");
	}

/*	@When("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password) {
		System.out.println(username);
		System.out.println(password);
	}*/
	
	@When("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_and(String arg1, String arg2) {
		System.out.println(arg1);
		System.out.println(arg2);
	}


	@Then("^hi$")
	public void hi() {
	    System.out.println("Hi");
	}
	
	@Then("^user again enters \"(.*)\" and \"(.*)\"$")
	public void user_again_enters_and(String designation, String dob) {
    System.out.println(designation);
    System.out.println(dob);
	}
	
	public static void main(String[] args) {
		
		DataDriven dd = new DataDriven();
		dd.hello();
		dd.user_enters_and("arg1", "arg2");
		dd.hi();
		dd.user_again_enters_and("designation", "dob");
	}
	
}
