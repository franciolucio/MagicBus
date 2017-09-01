package domain;

public class User extends Entity{
	
	public static final long serialVersionUID = 1251078116872517611L;
	public String name;
	public String surname;
	public int age;
	public String address;
	public double latitude;
	public double longitude;
	
	public User() {}
	public User(String name,String surname,int age,String address, double latitude, double longitude){
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.address = address;
		this.latitude = latitude;
		this.longitude = longitude;
	}
}