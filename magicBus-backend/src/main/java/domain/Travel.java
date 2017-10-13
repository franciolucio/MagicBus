package domain;

import java.util.ArrayList;
import java.util.List;

import org.joda.time.LocalDate;
import org.joda.time.LocalTime;

public abstract class Travel extends Entity{
	
	private static final long serialVersionUID = -5885020073479528677L;
	
	public String destination;
	public String address;
	public LocalDate date;
	public Driver driver;
	public LocalTime scheduler;
	public List<Child> childs;
	public boolean active;
	public List<Integer> childsGo;
	
	public Travel(){}
	public Travel(String destination, String address, LocalDate date, Driver driver, LocalTime scheduler){
		this.destination= destination;
		this.address = address;
		this.date = date;
		this.driver = driver;
		this.scheduler = scheduler;
		this.active = true;
		this.childsGo = new ArrayList<Integer>();
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
}