package domain;

import org.joda.time.LocalDate;
import org.joda.time.LocalTime;

public class TravelDiary extends Travel{

	private static final long serialVersionUID = -5906442839194574683L;

	public TravelDiary(){}
	public TravelDiary(String destination, String address, LocalDate date, Driver driver, LocalTime scheduler){
		super(destination, address, date, driver, scheduler);
	}
}