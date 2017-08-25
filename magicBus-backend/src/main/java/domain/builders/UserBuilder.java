package domain.builders;

import domain.User;


public class UserBuilder {
	
	private String nombre;
	private String apellido;
	private int edad;
	private String domicilio;
	
	public UserBuilder(){
		this.nombre = "";
		this.apellido = "";
		this.edad= 0;
		this.domicilio = "";
	}
	
	
	public static UserBuilder aUser(){
        return new UserBuilder();
    }
	
	public User build(){
		User user =  new User(nombre,apellido,edad,domicilio);
		 return user;
	}
	
	 public UserBuilder withNombre(String nombre){
		 this.nombre = nombre;
	     return this;
	 }
	 
	 public UserBuilder withApellido(String apellido){
		 this.apellido = apellido;
	     return this;
	 }
	 
	 public UserBuilder withEdad(int edad){
		 this.edad = edad;
	     return this;
	 }
	 
	 public UserBuilder withDomicilio(String domicilio){
		 this.domicilio = domicilio;
	     return this;
	 }
}