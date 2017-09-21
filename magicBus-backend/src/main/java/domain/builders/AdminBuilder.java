package domain.builders;

import domain.Admin;

public class AdminBuilder {
	
	private String name;
	private String surname;
	private int age;
	private int document;
	private String address;
	private String email;
	private int telephone;
	private int celphone;
	
	public AdminBuilder(){
		String name = "Ruben";
		String surname = "Francioni";
		int age = 52;
		int document = 17562490;
		String address = "114A entre 4 y 5";
		String email = "rubenfrancioni@gmail.com";
		int telephone = 42614169;
		int celphone = 1165789032;
	}
	
	
	public static AdminBuilder anAdmin(){
        return new AdminBuilder();
    }
	
	public Admin build(){
		return new Admin (name,surname,age,document,address,email,telephone,celphone);
	}
	
	 public AdminBuilder withName(String name){
		 this.name = name;
	     return this;
	 }
	 
	 public AdminBuilder withSurname(String surname){
		 this.surname = surname;
	     return this;
	 }
	 
	 public AdminBuilder withAge(int age){
		 this.age = age;
	     return this;
	 }
	 
	 public AdminBuilder withDocument(int document){
		 this.document = document;
	     return this;
	 }
	 
	 public AdminBuilder withAddress(String address){
		 this.address = address;
	     return this;
	 }
	 
	 public AdminBuilder withEmail(String email){
		 this.email = email;
	     return this;
	 }
	 
	 public AdminBuilder withTelephone(int telephone){
		 this.telephone = telephone;
	     return this;
	 }
	 
	 public AdminBuilder withCelphone(int celphone){
		 this.celphone = celphone;
	     return this;
	 }
}

