package domain.builders;

import java.util.ArrayList;
import java.util.List;

import org.joda.time.LocalDate;
import org.joda.time.LocalTime;

import domain.Driver;
import domain.Message;
import domain.Travel;

public class TravelBuilder {
	
	private String destination;
	private String address;
	private LocalDate date;
	private Driver driver;
	private LocalTime scheduler;
	public boolean active;
	private List<Integer> childsGo;
	private double latitude;
	private double longitude;
	private List<Integer> childsGoEffectively;
	private List<Message> messages;
	private boolean initTravel;
	private boolean finishTravel;
	private String childName;
	private String dateFormat;
	private String timeFormat;
	
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
		this.messages = new ArrayList<Message>();
		this.initTravel = false;
		this.finishTravel = false;
		this.active = true;
		this.childName = "";
		this.dateFormat = "";
		this.timeFormat = "";
	}
	
	public static TravelBuilder aTravel(){
        return new TravelBuilder();
    }
	
	public Travel build(){
		Travel travel = new Travel (destination, address, date, driver, scheduler, latitude, longitude);
		travel.setChildsGo(this.childsGo);
		travel.setChildsGoEffectively(this.childsGoEffectively);
		travel.setMessages(messages);
		travel.setInitTravel(initTravel);
		travel.setFinishTravel(finishTravel);
		travel.setActive(active);
		travel.setChildName(childName);
		travel.setDateFormat(dateFormat);
		travel.setTimeFormat(timeFormat);
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
	 
	 public TravelBuilder withMessages(List<Message> messages){
		 this.messages = messages;
	     return this;
	 }
	 
	 public TravelBuilder withActive(boolean active){
		 this.active = active;
	     return this;
	 }
	 
	 public TravelBuilder withInitTravel(boolean initTravel){
		 this.initTravel = initTravel;
	     return this;
	 }
	 
	 public TravelBuilder withFinishTravel(boolean finishTravel){
		 this.finishTravel = finishTravel;
	     return this;
	 }
	 
	 public TravelBuilder withChildName(String childName){
		 this.childName = childName;
	     return this;
	 }
	 
	 public TravelBuilder withDateFormat(String dateFormat){
		 this.dateFormat = dateFormat;
	     return this;
	 }
	 
	 public TravelBuilder withTimeFormat(String timeFormat){
		 this.timeFormat = timeFormat;
	     return this;
	 }
}