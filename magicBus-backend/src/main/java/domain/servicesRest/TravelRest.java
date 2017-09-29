package domain.servicesRest;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.eclipse.jetty.http.HttpStatus;
import org.joda.time.LocalDate;
import org.joda.time.LocalTime;

import domain.Child;
import domain.Driver;
import domain.Travel;
import domain.builders.TravelBuilder;
import domain.services.ChildService;
import domain.services.DriverService;
import domain.services.TravelService;

@Path("/travel")
public class TravelRest {

	TravelService travelService;
	DriverService driverService;
	ChildService childService;
	
	public TravelRest() {}
	public TravelRest(TravelService travelService,DriverService driverService,ChildService childService) {
		this.travelService = travelService;
		this.driverService = driverService;
		this.childService = childService;
	}
	
	@GET
	@Path("/allTravels") 
	@Produces("application/json")
	public List<Travel> allTravels() {
		return travelService.getTravelRepository().findAll();
	}
	
	@GET
	@Path("/allPendingTravels") 
	@Produces("application/json")
	public List<Travel> allPendingTravels() {
		return travelService.findPendingTravels();
	}
	
	
	@GET
	@Path("/allHistoricTravels") 
	@Produces("application/json")
	public List<Travel> allHistoricTravels() {
		return travelService.findHistoricTravels();
	}
	
	@POST
	@Path("/add/{destination}/{day}/{month}/{year}/{hour}/{minutes}/{id}")
	@Produces("application/json")
	public Response creatNewTravel(@PathParam("surname") String destination,@PathParam("day") Integer day,@PathParam("month") Integer month,@PathParam("year") Integer year,@PathParam("hour") final Integer hour,@PathParam("minutes") final Integer minutes,@PathParam("id") final int id) {
		LocalDate date = LocalDate.now().withDayOfMonth(day).withMonthOfYear(month).withYear(year);
		LocalTime scheduler = LocalTime.now().withHourOfDay(hour).withMinuteOfHour(minutes);
		Driver driver = driverService.getDriverRepository().findById(id);
		Travel travel = new TravelBuilder()
	    	.withDestination(destination)
	    	.withDate(date)
	    	.withScheduler(scheduler)
	    	.withDriver(driver)
	    	.build();
	    this.travelService.save(travel);
	    return Response.ok().status(HttpStatus.OK_200).build();
	 }
	
	@GET
	@Path("/allPendingTravelsForAChild/{id}") 
	@Produces("application/json")
	public List<Travel> allPendingTravelsForAChild(@PathParam("surname") int id) {
		Child child = childService.getChildRepository().findById(id);
		return travelService.allPendingTravelsForAChild(child);
	}
}