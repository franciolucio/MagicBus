package domain;

import java.util.ArrayList;
import java.util.List;

import org.joda.time.LocalDate;
import org.joda.time.LocalTime;

public class Travel extends Entity{
	
	private static final long serialVersionUID = -5885020073479528677L;
	
	public String destination;
	public String address;
	public LocalDate date;
	public Driver driver;
	public LocalTime scheduler;
	public boolean active;
	public List<Integer> childsGo;
	public double latitude;
	public double longitude;
	public List<Integer> childsGoEffectively;
	public List<Message> messages;
	public boolean initTravel;
	public boolean finishTravel;

	public Travel(){}
	public Travel(String destination, String address, LocalDate date, Driver driver, LocalTime scheduler,double latitude,double longitude){
		this.destination= destination;
		this.address = address;
		this.date = date;
		this.driver = driver;
		this.scheduler = scheduler;
		this.active = true;
		this.childsGo = new ArrayList<Integer>();
		this.latitude = latitude;
		this.longitude = longitude;
		this.childsGoEffectively = new ArrayList<Integer>();
		this.messages = new ArrayList<Message>();
		this.initTravel = false;
		this.finishTravel = false;
	}

	public List<Integer> getChildsGoEffectively() {
		return childsGoEffectively;
	}
	
	public void setChildsGoEffectively(List<Integer> childsGoEffectively) {
		this.childsGoEffectively = childsGoEffectively;
	}
	
	public void addChild(Integer childID){
		this.childsGo.add(childID);
	}
	
	public void deleteChild(Integer childID){
		this.childsGo.remove(childID);
	}
	
	public Boolean childInTravel(Integer childID){
		Boolean bool = false;
		for(Integer cid : this.childsGo){
			if(cid == childID){
				bool = true;
			}
		}
		return bool;
	}
	
	public void setDestination(String destination) {
		this.destination = destination;
	}
	
	public void setAddress(String address) {
		this.address = address;
	}
	
	public void setDate(LocalDate date) {
		this.date = date;
	}
	
	public void setDriver(Driver driver) {
		this.driver = driver;
	}
	
	public void setScheduler(LocalTime scheduler) {
		this.scheduler = scheduler;
	}
	
	public List<Integer> getChildsGo() {
		return childsGo;
	}
	
	public void setChildsGo(List<Integer> childsGo) {
		this.childsGo = childsGo;
	}
	
	public double getLatitude() {
		return latitude;
	}
	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}
	public double getLongitude() {
		return longitude;
	}
	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	public Driver getDriver() {
		return driver;
	}

	public List<Message> getMessages() {
		return messages;
	}
	public void setMessages(List<Message> messages) {
		this.messages = messages;
	}
	public void addMessage(Message message) {
		this.messages.add(message);
	}
	public boolean isInitTravel() {
		return initTravel;
	}
	public void setInitTravel(boolean initTravel) {
		this.initTravel = initTravel;
	}
	public boolean isFinishTravel() {
		return finishTravel;
	}
	public void setFinishTravel(boolean finishTravel) {
		this.finishTravel = finishTravel;
	}
	public void setActive(boolean active) {
		this.active = active;
	}	
}