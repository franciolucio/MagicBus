package domain.servicesRest;

import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
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
	@Path("/allPendingTravelsForADate/{day}/{month}/{year}") 
	@Produces("application/json")
	public List<Travel> allPendingTravelsForADate(String destination,@PathParam("day") Integer day,@PathParam("month") Integer month,@PathParam("year") Integer year) {
		LocalDate date = LocalDate.now().withDayOfMonth(day).withMonthOfYear(month).withYear(year);
		return travelService.findPendingTravelForADate(date);
	}
	
	@GET
	@Path("/allHistoricTravels") 
	@Produces("application/json")
	public List<Travel> allHistoricTravels() {
		return travelService.findHistoricTravels();
	}
	
	@GET
	@Path("/byId/{idTravel}") 
	@Produces("application/json")
	public Travel getTravelById(@PathParam("idTravel") final int idTravel) {
		return travelService.getTravelRepository().findById(idTravel);
	}
	
	@POST
	@Path("/add/{destination}/{day}/{month}/{year}/{hour}/{minutes}/{id}")
	@Produces("application/json")
	public Response creatNewTravel(@PathParam("destination") String destination,@PathParam("day") Integer day,@PathParam("month") Integer month,@PathParam("year") Integer year,@PathParam("hour") final Integer hour,@PathParam("minutes") final Integer minutes,@PathParam("id") final int id) {
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
	
	@POST
	@Path("/addChildForATravel/{idTravel}/{idChild}")
	@Produces("application/json")
	public Response addChildForATravel(@PathParam("idTravel") final int idTravel, @PathParam("idChild") final int idChild) {
		Child child = childService.getChildRepository().findById(idChild);
		Travel travel = travelService.getTravelRepository().findById(idTravel);
		travel.addChild(child);
	    this.travelService.update(travel);
	    return Response.ok().status(HttpStatus.OK_200).build();
	}
	
	@GET
	@Path("/allPendingTravelsForAChild/{idChild}") 
	@Produces("application/json")
	public List<Travel> allPendingTravelsForAChild(@PathParam("idChild") int idChild) {
		Child child = childService.getChildRepository().findById(idChild);
		return travelService.allPendingTravelsForAChild(child);
	}
	
	@GET
	@Path("/childOfTravel/{idTravel}") 
	@Produces("application/json")
	public List<Child> childOfTravel(@PathParam("idTravel") int idTravel) {
		Travel travel = travelService.getTravelRepository().findById(idTravel);
		return travel.getChilds();
	}
	
	@DELETE
	@Path("/deleteTravel/{id}")
	@Produces("application/json")
	public Response deleteTravel(@PathParam("id") int id) {
		Travel travel = travelService.getTravelRepository().findById(id);
		if(travel == null) {
			return Response.serverError().status(HttpStatus.NOT_FOUND_404).build();
		}
		travel.active = false;
		travelService.saveTravel(travel);
		return Response.ok().status(HttpStatus.OK_200).build();
	}
	
	@DELETE
	@Path("/deleteChildForTravel/{idChild}/{idTravel}")
	@Produces("application/json")
	public Response deleteChildForTravel(@PathParam("idChild") int idChild,@PathParam("idTravel") int idTravel) {
//		Child child = childService.getChildRepository().findById(idChild);
		Travel travel = travelService.getTravelRepository().findById(idTravel);
		travelService.saveTravel(travel);
		return Response.ok().status(HttpStatus.OK_200).build();
	}
	
	@PUT
	@Path("/saveAssist/{tags}/{IdTravel}")
	@Produces("application/json")
	public Response saveAssist(@PathParam("tags") List<Integer> tags,@PathParam("IdTravel") int IdTravel) {
		Travel travel = travelService.getTravelRepository().findById(IdTravel);
		if(travel == null){
			return Response.serverError().status(HttpStatus.NOT_FOUND_404).build();
		}
		travel.setChildsGo(tags);
		this.travelService.update(travel);
		return Response.ok().status(HttpStatus.OK_200).build();
    }
	
	@PUT
	@Path("/profile/{destination}/{day}/{month}/{year}/{hour}/{minutes}/{id}")
	@Produces("application/json")
	public Response modifyTravel(@PathParam("destination") String destination,@PathParam("day") Integer day,@PathParam("month") Integer month,@PathParam("year") Integer year,@PathParam("hour") final Integer hour,@PathParam("minutes") final Integer minutes,@PathParam("id") final int id) {
		LocalDate date = LocalDate.now().withDayOfMonth(day).withMonthOfYear(month).withYear(year);
		LocalTime scheduler = LocalTime.now().withHourOfDay(hour).withMinuteOfHour(minutes);
		Driver driver = driverService.getDriverRepository().findById(id);
		Travel travel = travelService.getTravelRepository().findById(id);
		if(travel == null){
			return Response.serverError().status(HttpStatus.NOT_FOUND_404).build();
		}
		travel.setDestination(destination);
		travel.setDate(date);
		travel.setScheduler(scheduler);
		travel.setDriver(driver);
		this.travelService.update(travel);
		return Response.ok().status(HttpStatus.OK_200).build();
    }
}