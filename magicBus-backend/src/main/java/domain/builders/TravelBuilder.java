package domain.builders;

import java.util.ArrayList;
import java.util.List;

import org.joda.time.LocalDate;
import org.joda.time.LocalTime;

import domain.Driver;
import domain.Travel;

public class TravelBuilder {
	
	private String destination;
	private String address;
	private LocalDate date;
	private Driver driver;
	private LocalTime scheduler;
	private List<Integer> childsGo;
	private double latitude;
	private double longitude;
	private List<Integer> childsGoEffectively;
	
	public TravelBuilder(){
		this.destination ="";
		this.address = "";
		this.date = new LocalDate();
		this.driver = null;
		this.scheduler = new LocalTime();
		this.childsGo = new ArrayList<>();
		this.latitude = 0;
		this.longitude = 0;
		this.childsGoEffectively = new ArrayList<>();
	}
	
	public static TravelBuilder aTravel(){
        return new TravelBuilder();
    }
	
	public Travel build(){
		Travel travel = new Travel (destination, address, date, driver, scheduler, latitude, longitude);
		travel.setChildsGo(this.childsGo);
		travel.setChildsGoEffectively(this.childsGoEffectively);
		return travel;
	}
	
	 public TravelBuilder withDestination(String destination){
		 this.destination = destination;
	     return this;
	 }
	 
	 public TravelBuilder withAddress(String address){
		 this.address = address;
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
	 
	 public TravelBuilder withChildsGo(List<Integer> childs){
		 this.childsGo = childs;
	     return this;
	 }
	 
	 public TravelBuilder withChildsGoEffecttively(List<Integer> childs){
		 this.childsGoEffectively = childs;
	     return this;
	 }
	 
	 public TravelBuilder withLatitude(double latitude){
		 this.latitude = latitude;
	     return this;
	 }
	 
	 public TravelBuilder withLongitude(double longitude){
		 this.longitude = longitude;
	     return this;
	 }
}