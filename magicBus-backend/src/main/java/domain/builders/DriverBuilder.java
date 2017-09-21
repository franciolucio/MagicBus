package domain.builders;

import domain.Driver;

public class DriverBuilder {
	
	private String name;
	private String surname;
	private int age;
	private int document;
	private String address;
	private String email;
	private int telephone;
	private int celphone;
	private int license;
	
	public DriverBuilder(){
		String name = "";
		String surname = "";
		int age = 0;
		int document = 0;
		String address = "";
		String email = "";
		int telephone = 0;
		int celphone = 0;
		int license = 0;
	}
	
	
	public static DriverBuilder aDriver(){
        return new DriverBuilder();
    }
	
	public Driver build(){
		return new Driver (name,surname,age,document,address,email,telephone,celphone,license);
	}
	
	 public DriverBuilder withName(String name){
		 this.name = name;
	     return this;
	 }
	 
	 public DriverBuilder withSurname(String surname){
		 this.surname = surname;
	     return this;
	 }
	 
	 public DriverBuilder withAge(int age){
		 this.age = age;
	     return this;
	 }
	 
	 public DriverBuilder withDocument(int document){
		 this.document = document;
	     return this;
	 }
	 
	 public DriverBuilder withAddress(String address){
		 this.address = address;
	     return this;
	 }
	 
	 public DriverBuilder withEmail(String email){
		 this.email = email;
	     return this;
	 }
	 
	 public DriverBuilder withTelephone(int telephone){
		 this.telephone = telephone;
	     return this;
	 }
	 
	 public DriverBuilder withCelphone(int celphone){
		 this.celphone = celphone;
	     return this;
	 }
	 
	  public DriverBuilder withLicense(int license){
		 this.license = license;
	     return this;
	 }
}