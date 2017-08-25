package domain;

public class User extends Entity{
	
	public static final long serialVersionUID = 1251078116872517611L;
	public String nombre;
	public String apellido;
	public int edad;
	public String domicilio;
	
	public User() {}
	public User(String nombre,String apellido,int edad,String domicilio){
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
		this.domicilio = domicilio;
	}
}