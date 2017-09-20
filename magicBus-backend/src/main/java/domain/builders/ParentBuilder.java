package domain.builders;

import domain.Parent;

public class ParentBuilder {
	
	private String name;
	private String surname;
	private int age;
	private int document;
	private String address;
	private String email;
	private int telephone;
	private int celphone;
	
	public ParentBuilder(){
		String name = "";
		String surname = "";
		int age = 0;
		int document = 0;
		String address = "";
		String email = "";
		int telephone = 0;
		int celphone = 0;
	}
	
	
	public static ParentBuilder aParent(){
        return new ParentBuilder();
    }
	
	public Parent build(){
		return new Parent (name,surname,age,document,address,email,telephone,celphone);
	}
	
	 public ParentBuilder withNombre(String name){
		 this.name = name;
	     return this;
	 }
	 
	 public ParentBuilder withSurname(String surname){
		 this.surname = surname;
	     return this;
	 }
	 
	 public ParentBuilder withAge(int age){
		 this.age = age;
	     return this;
	 }
	 
	 public ParentBuilder withDocument(int document){
		 this.document = document;
	     return this;
	 }
	 
	 public ParentBuilder withAddress(String address){
		 this.address = address;
	     return this;
	 }
	 
	 public ParentBuilder withEmail(String email){
		 this.email = email;
	     return this;
	 }
	 
	 public ParentBuilder withTelephone(int telephone){
		 this.telephone = telephone;
	     return this;
	 }
	 
	 public ParentBuilder withCelphone(int celphone){
		 this.celphone = celphone;
	     return this;
	 }
}


