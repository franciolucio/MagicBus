package domain;




public abstract class User extends Entity{
	
	protected static final long serialVersionUID = 1251078116872517611L;
	protected String name;
	protected String surname;
	protected int age;
	protected int document;
	protected String address;
	protected String email;
	protected int telephone;
	protected int celphone;
	protected int role;	
	
	public User() {}
	public User(String name,String surname,int age,int document,String address,String email,int telephone,int celphone,int role){
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.document = document;
		this.address = address;
		this.email = email;
		this.telephone = telephone;
		this.celphone = celphone;
		this.role = role;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getSurname() {
		return surname;
	}
	
	public void setSurname(String surname) {
		this.surname = surname;
	}
	
	public int getAge() {
		return age;
	}
	
	public void setAge(int age) {
		this.age = age;
	}
	
	public int getDocument() {
		return document;
	}
	
	public void setDocument(int document) {
		this.document = document;
	}
	
	public String getAddress() {
		return address;
	}
	
	public void setAddress(String address) {
		this.address = address;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public int getTelephone() {
		return telephone;
	}
	
	public void setTelephone(int telephone) {
		this.telephone = telephone;
	}
	
	public int getCelphone() {
		return celphone;
	}
	
	public void setCelphone(int celphone) {
		this.celphone = celphone;
	}
	
	public int getRole() {
		return role;
	}
	
	public void setRole(int role) {
		this.role = role;
	}
}