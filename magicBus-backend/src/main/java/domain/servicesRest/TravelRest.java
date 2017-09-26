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

import domain.Driver;
import domain.Travel;
import domain.builders.TravelBuilder;
import domain.services.TravelService;

@Path("/travel")
public class TravelRest {

	TravelService travelService;
	
	public TravelRest() {}
	public TravelRest(TravelService travelService) {
		this.travelService = travelService;
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
	@Path("/add/{destination}/{date}/{scheduler}/{driver}")
	@Produces("application/json")
	public Response creatNewTravel(@PathParam("surname") final String destination,@PathParam("date") final LocalDate date,@PathParam("scheduler") final int scheduler,@PathParam("driver") final Driver driver) {
	    Travel travel = new TravelBuilder()
	    	.withDestination(destination)
	    	.withDate(date)
	    	.withScheduler(scheduler)
	    	.withDriver(driver)
	    	.build();
	    this.travelService.save(travel);
	    return Response.ok().status(HttpStatus.OK_200).build();
	 }
	
}