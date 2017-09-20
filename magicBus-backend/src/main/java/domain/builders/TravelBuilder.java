package domain.builders;

import java.util.Date;

import domain.Driver;
import domain.Travel;

public class TravelBuilder {
	
	private String destination;
	private Date date;
	private Driver driver;
	private int scheduler;
	
	public TravelBuilder(){
		this.destination ="";
		this.date = new Date();
		this.driver = null;
		this.scheduler = 0;
	}
	
	public static TravelBuilder aTravel(){
        return new TravelBuilder();
    }
	
	public Travel build(){
		return new Travel (destination,date,driver,scheduler);
	}
	
	 public TravelBuilder withDestination(String destination){
		 this.destination = destination;
	     return this;
	 }
	 
	 public TravelBuilder withDate(Date date){
		 this.date = date;
	     return this;
	 }
	 
	 public TravelBuilder withDriver(Driver driver){
		 this.driver = driver;
	     return this;
	 }
	 
	 public TravelBuilder withScheduler(int scheduler){
		 this.scheduler = scheduler;
	     return this;
	 }

}
