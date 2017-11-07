package domain.builders;

import java.util.ArrayList;
import java.util.List;

import domain.Child;
import domain.Inbox;
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
	private List<Child> childs;
	private int role;
	public boolean activate;
	private Inbox inbox;
	private double latitude;
	private double longitude;
	
	public ParentBuilder(){
		this.name = "";
		this.surname = "";
		this.age = 0;
		this.document = 0;
		this.address = "";
		this.email = "";
		this.telephone = 0;
		this.celphone = 0;
		this.childs = new ArrayList<Child>();
		this.role = 2;
		this.activate = false;
		this.inbox = new Inbox();
		this.latitude = 0;
		this.longitude = 0;
	}
	
	
	public static ParentBuilder aParent(){
        return new ParentBuilder();
    }
	
	public Parent build(){
		Parent parent = new Parent (name,surname,age,document,address,email,telephone,celphone,childs,latitude,longitude);
		parent.setRole(role);
		parent.setActivate(activate);
		parent.setInbox(inbox);
		return parent;
	}
	
	 public ParentBuilder withName(String name){
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
	 
	 public ParentBuilder withActivate(Boolean activate){
		 this.activate = activate;
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
	 
	 public ParentBuilder withChilds(List<Child> childs){
		 this.childs = childs;
	     return this;
	 }
	 
	 public ParentBuilder withRole(int role){
		 this.role = role;
	     return this;
	 }
	 
	 public ParentBuilder withInbox(Inbox inbox){
		 this.inbox = inbox;
	     return this;
	 }
	 
	 public ParentBuilder withLatitude(double latitude){
		 this.latitude = latitude;
		 return this;
	 }
		 
	 public ParentBuilder withLongitude(double longitude){
		 this.longitude = longitude;
		 return this;
	 }
}


