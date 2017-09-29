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
	
	public Travel(){}
	public Travel(String destination, LocalDate date, Driver driver, LocalTime scheduler){
		this.destination= destination;
		this.date = date;
		this.driver = driver;
		this.scheduler = scheduler;
		this.childs = new ArrayList<>();
	}
	
	public void addChild(Child child){
		this.childs.add(child);
	}

}
