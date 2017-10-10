package domain;

import java.util.ArrayList;
import java.util.List;

import org.joda.time.LocalDate;
import org.joda.time.LocalTime;

public class Travel extends Entity{
	
	private static final long serialVersionUID = -5885020073479528677L;
	
	public String destination;
	public LocalDate date;
	public Driver driver;
	public LocalTime scheduler;
	public List<Child> childs;
	public boolean active;
	public List<Integer> childsGo;
	
	public Travel(){}
	public Travel(String destination, LocalDate date, Driver driver, LocalTime scheduler){
		this.destination= destination;
		this.date = date;
		this.driver = driver;
		this.scheduler = scheduler;
		this.childs = new ArrayList<Child>();
		this.active = true;
		this.childsGo = new ArrayList<Integer>();
	}
	
	public void addChild(Child child){
		this.childs.add(child);
	}
	
	public void deleteChild(Child child){
		this.childs.remove(child);
	}
	
	public Boolean childInTravel(Child child){
		Boolean bool = false;
		for(Child c : this.childs){
			if(c.getId() == child.getId()){
				bool = true;
			}
		}
		return bool;
	}
	
	public List<Child> getChilds() {
		return childs;
	}
	
	public void setChilds(List<Child> childs) {
		this.childs = childs;
	}
	public void setDestination(String destination) {
		this.destination = destination;
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
