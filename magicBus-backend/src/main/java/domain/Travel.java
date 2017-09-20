package domain;

import java.util.Date;

public class Travel extends Entity{
	
	private static final long serialVersionUID = -5885020073479528677L;
	
	public String destination;
	public Date date;
	public Driver driver;
	public int scheduler;
	
	public Travel(){}
	public Travel(String destination, Date date, Driver driver, int scheduler){
		this.destination= destination;
		this.date = date;
		this.driver = driver;
		this.scheduler = scheduler;
	}

}
