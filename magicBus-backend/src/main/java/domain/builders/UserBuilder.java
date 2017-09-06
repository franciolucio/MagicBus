package domain.builders;

import domain.User;


public class UserBuilder {
	
	private String name;
	private String surname;
	private int age;
	private String address;
	private double latitude;
	private double longitude;
	private String image;
	private String email;
	
	public UserBuilder(){
		this.name = "";
		this.surname = "";
		this.age = 0;
		this.address = "";
		this.latitude = 0;
		this.longitude = 0;
		this.image = "";
		this.email = "";
	}
	
	
	public static UserBuilder aUser(){
        return new UserBuilder();
    }
	
	public User build(){
		return new User(name, surname, age, address, latitude, longitude,image,email);
	}
	
	 public UserBuilder withNombre(String name){
		 this.name = name;
	     return this;
	 }
	 
	 public UserBuilder withApellido(String surname){
		 this.surname = surname;
	     return this;
	 }
	 
	 public UserBuilder withEdad(int age){
		 this.age = age;
	     return this;
	 }
	 
	 public UserBuilder withDomicilio(String address){
		 this.address = address;
	     return this;
	 }
	 
	 public UserBuilder withLatitude(double latitude){
		 this.latitude = latitude;
	     return this;
	 }
	 
	 public UserBuilder withLongitude(double longitude){
		 this.longitude = longitude;
	     return this;
	 }
	 
	 public UserBuilder withImage(String image){
		 this.image = image;
	     return this;
	 }
	 
	 public UserBuilder withEmail(String email){
		 this.email = email;
	     return this;
	 }
}