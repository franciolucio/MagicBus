package domain;


public abstract class User extends Entity{
	
	public static final long serialVersionUID = 1251078116872517611L;
	public String name;
	public String surname;
	public int age;
	public int document;
	public String address;
	public String email;
	public int telephone;
	public int celphone;
	
	public User() {}
	public User(String name,String surname,int age,int document,String address,String email,int telephone,int celphone){
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.document = document;
		this.address = address;
		this.email = email;
		this.telephone = telephone;
		this.celphone = celphone;
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
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
}