package domain;

public class Driver extends Entity{

	public static final long serialVersionUID = 1251078116872517611L;
	public String name;
	public String surname;
	public int document;
	
	public Driver() {}
	public Driver(String name,String surname,int document){
		this.name = name;
		this.surname = surname;
		this.document = document;
	}
}