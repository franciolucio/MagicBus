package domain.builders;

import domain.Driver;

public class DriverBuilder {
	
	private String name;
	private String surname;
	private int document;
	
	public DriverBuilder(){
		this.name = "";
		this.surname = "";
		this.document = 0;
	}
	
	
	public static DriverBuilder aDriver(){
        return new DriverBuilder();
    }
	
	public Driver build(){
		return new Driver (name, surname, document);
	}
	
	 public DriverBuilder withNombre(String name){
		 this.name = name;
	     return this;
	 }
	 
	 public DriverBuilder withApellido(String surname){
		 this.surname = surname;
	     return this;
	 }
	 
	 public DriverBuilder withDocumento(int document){
		 this.document = document;
	     return this;
	 }
}