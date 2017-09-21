package domain.builders;

import domain.Child;

public class ChildBuilder {
	
	private String name;
	private String surname;
	private int age;
	private int document;
	private String address;
	private String email;
	private int telephone;
	private int celphone;
	private int license;
	private String pregnancyMedicine;
	private double latitude;
	private double longitude;
	
	public ChildBuilder(){
		String name = "";
		String surname = "";
		int age = 0;
		int document = 0;
		String address = "";
		String email = "";
		int telephone = 0;
		int celphone = 0;
		String pregnancyMedicine = "";
		double latitude = 0;
		double longitude = 0;
		
	}
	
	
	public static ChildBuilder aChild(){
        return new ChildBuilder();
    }
	
	public Child build(){
		return new Child (name,surname,age,document,address,email,telephone,celphone,pregnancyMedicine,latitude,longitude);
	}
	
	 public ChildBuilder withName(String name){
		 this.name = name;
	     return this;
	 }
	 
	 public ChildBuilder withSurname(String surname){
		 this.surname = surname;
	     return this;
	 }
	 
	 public ChildBuilder withAge(int age){
		 this.age = age;
	     return this;
	 }
	 
	 public ChildBuilder withDocument(int document){
		 this.document = document;
	     return this;
	 }
	 
	 public ChildBuilder withAddress(String address){
		 this.address = address;
	     return this;
	 }
	 
	 public ChildBuilder withEmail(String email){
		 this.email = email;
	     return this;
	 }
	 
	 public ChildBuilder withTelephone(int telephone){
		 this.telephone = telephone;
	     return this;
	 }
	 
	 public ChildBuilder withCelphone(int celphone){
		 this.celphone = celphone;
	     return this;
	 }
	 
	 public ChildBuilder withPregnancyMedicine(String pregnancyMedicine){
		 this.pregnancyMedicine = pregnancyMedicine;
	     return this;
	 }
	 
	 public ChildBuilder withLatitude(double latitude){
		 this.latitude = latitude;
	     return this;
	 }
	 
	 public ChildBuilder withLongitude(double longitude){
		 this.longitude = longitude;
	     return this;
	 }
	 
}


