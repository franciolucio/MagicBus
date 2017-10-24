package domain.builders;

import java.util.ArrayList;
import java.util.List;

import domain.Child;
import domain.Developer;

public class DeveloperBuilder {
	
	private String name;
	private String surname;
	private int age;
	private int document;
	private String address;
	private String email;
	private int telephone;
	private int celphone;
	private int role;
	private List<Child> childs;
	
	public DeveloperBuilder(){
		this.name = "Ruben";
		this.surname = "Francioni";
		this.age = 52;
		this.document = 17562490;
		this.address = "114A entre 4 y 5";
		this.email = "rubenfrancioni@gmail.com";
		this.telephone = 42614169;
		this.celphone = 1165789032;
		this.role = 5;
		this.childs = new ArrayList<Child>();
	}
	
	
	public static DeveloperBuilder anDeveloper(){
        return new DeveloperBuilder();
    }
	
	public Developer build(){
		Developer developer = new Developer(name,surname,age,document,address,email,telephone,celphone,childs);
		developer.setRole(role);
		return developer;
	}
	
	 public DeveloperBuilder withName(String name){
		 this.name = name;
	     return this;
	 }
	 
	 public DeveloperBuilder withSurname(String surname){
		 this.surname = surname;
	     return this;
	 }
	 
	 public DeveloperBuilder withAge(int age){
		 this.age = age;
	     return this;
	 }
	 
	 public DeveloperBuilder withDocument(int document){
		 this.document = document;
	     return this;
	 }
	 
	 public DeveloperBuilder withAddress(String address){
		 this.address = address;
	     return this;
	 }
	 
	 public DeveloperBuilder withEmail(String email){
		 this.email = email;
	     return this;
	 }
	 
	 public DeveloperBuilder withTelephone(int telephone){
		 this.telephone = telephone;
	     return this;
	 }
	 
	 public DeveloperBuilder withCelphone(int celphone){
		 this.celphone = celphone;
	     return this;
	 }
	 
	 public DeveloperBuilder withRole(int role){
		 this.role = role;
	     return this;
	 }
	 
	 public DeveloperBuilder withChilds(List<Child> childs){
		 this.childs = childs;
	     return this;
	 }
}

