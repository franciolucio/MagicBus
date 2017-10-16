package domain;

import org.joda.time.LocalDate;
import org.joda.time.LocalTime;

public class TravelOccasional extends Travel{

	private static final long serialVersionUID = -5906442839194574683L;

	public TravelOccasional(){}
	public TravelOccasional(String destination, String address, LocalDate date, Driver driver, LocalTime scheduler,double latitude,double longitude){
		super(destination, address, date, driver, scheduler, latitude, longitude);
	}
}
