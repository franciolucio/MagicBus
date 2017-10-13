package domain.builders;

import java.util.ArrayList;
import java.util.List;

import org.joda.time.LocalDate;
import org.joda.time.LocalTime;

import domain.Driver;
import domain.Travel;
import domain.TravelOccasional;

public class TravelOccasionalBuilder {
	
	private String destination;
	private String address;
	private LocalDate date;
	private Driver driver;
	private LocalTime scheduler;
	private List<Integer> childsGo;
	
	public TravelOccasionalBuilder(){
		this.destination ="";
		this.address = "";
		this.date = new LocalDate();
		this.driver = null;
		this.scheduler = new LocalTime();
		this.childsGo = new ArrayList<>();
	}
	
	public static TravelOccasionalBuilder aTravel(){
        return new TravelOccasionalBuilder();
    }
	
	public TravelOccasional build(){
		return new TravelOccasional (destination, address, date, driver, scheduler);
	}
	
	 public TravelOccasionalBuilder withDestination(String destination){
		 this.destination = destination;
	     return this;
	 }
	 
	 public TravelOccasionalBuilder withAddress(String address){
		 this.address = address;
	     return this;
	 }
	 
	 public TravelOccasionalBuilder withDate(LocalDate date){
		 this.date = date;
	     return this;
	 }
	 
	 public TravelOccasionalBuilder withDriver(Driver driver){
		 this.driver = driver;
	     return this;
	 }
	 
	 public TravelOccasionalBuilder withScheduler(LocalTime scheduler){
		 this.scheduler = scheduler;
	     return this;
	 }
	 
	 public TravelOccasionalBuilder withChilds(List<Integer> childs){
		 this.childsGo = childs;
	     return this;
	 }

}
