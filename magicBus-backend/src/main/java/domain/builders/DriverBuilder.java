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
	private double latitude;
	private double longitude;
	private int role;
	
	public DriverBuilder(){
		this.name = "";
		this.surname = "";
		this.age = 0;
		this.document = 0;
		this.address = "";
		this.email = "";
		this.telephone = 0;
		this.celphone = 0;
		this.license = 0;
		this.latitude = 0;
		this.longitude = 0;
		this.role = 1;
	}
	
	
	public static DriverBuilder aDriver(){
        return new DriverBuilder();
    }
	
	public Driver build(){
		Driver driver = new Driver (name,surname,age,document,address,email,telephone,celphone,license,latitude,longitude);
		driver.setRole(role);
		return driver;
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
	  
	 public DriverBuilder withLatitude(double latitude){
		 this.latitude = latitude;
		 return this;
	 }
		 
	 public DriverBuilder withLongitude(double longitude){
		 this.longitude = longitude;
		 return this;
	 }
	 
	 public DriverBuilder withRole(int role){
		 this.role = role;
	     return this;
	 }
}