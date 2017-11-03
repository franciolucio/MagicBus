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
	private String prepaidMedicine;
	private double latitude;
	private double longitude;
	public boolean enabled;
	public boolean travelGo;
	private int role;
	
	public ChildBuilder(){
		this.name = "";
		this.surname = "";
		this.age = 0;
		this.document = 0;
		this.address = "";
		this.email = "";
		this.telephone = 0;
		this.celphone = 0;
		this.prepaidMedicine = "";
		this.latitude = 0;
		this.longitude = 0;
		this.enabled = true;
		this.travelGo = false;
		this.role = 3;
	}
	
	public static ChildBuilder aChild(){
        return new ChildBuilder();
    }
	
	public Child build(){
		Child child = new Child (name,surname,age,document,address,email,telephone,celphone,prepaidMedicine,latitude,longitude);
		child.setEnabled(this.enabled);
		child.setConfirm(this.travelGo);
		child.setRole(role);
		return child;
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
	 
	 public ChildBuilder withPrepaidMedicine(String prepaidMedicine){
		 this.prepaidMedicine = prepaidMedicine;
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
	 
	 public ChildBuilder withEnabled(Boolean enabled){
		 this.enabled = enabled;
	     return this;
	 }
	 
	 public ChildBuilder withChildGo(Boolean travelGo){
		 this.travelGo = travelGo;
	     return this;
	 }
	 
	 public ChildBuilder withRole(int role){
		 this.role = role;
	     return this;
	 }
}