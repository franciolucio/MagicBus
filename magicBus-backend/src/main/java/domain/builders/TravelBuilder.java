package domain.builders;

import java.util.ArrayList;
import java.util.List;

import org.joda.time.LocalDate;
import org.joda.time.LocalTime;

import domain.Child;
import domain.Driver;
import domain.Travel;

public class TravelBuilder {
	
	private String destination;
	private LocalDate date;
	private Driver driver;
	private LocalTime scheduler;
	private List<Child> childs;
	
	public TravelBuilder(){
		this.destination ="";
		this.date = new LocalDate();
		this.driver = null;
		this.scheduler = new LocalTime();
		this.childs = new ArrayList<>();
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
	 
	 public TravelBuilder withDate(LocalDate date){
		 this.date = date;
	     return this;
	 }
	 
	 public TravelBuilder withDriver(Driver driver){
		 this.driver = driver;
	     return this;
	 }
	 
	 public TravelBuilder withScheduler(LocalTime scheduler){
		 this.scheduler = scheduler;
	     return this;
	 }
	 
	 public TravelBuilder withChilds(List<Child> childs){
		 this.childs = childs;
	     return this;
	 }

}
