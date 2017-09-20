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
}