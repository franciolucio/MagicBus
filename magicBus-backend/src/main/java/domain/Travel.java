package domain;

import org.joda.time.LocalDate;

public class Travel extends Entity{
	
	private static final long serialVersionUID = -5885020073479528677L;
	
	public String destination;
	public LocalDate date;
	public Driver driver;
	public int scheduler;
	
	public Travel(){}
	public Travel(String destination, LocalDate date, Driver driver, int scheduler){
		this.destination= destination;
		this.date = date;
		this.driver = driver;
		this.scheduler = scheduler;
	}

}
