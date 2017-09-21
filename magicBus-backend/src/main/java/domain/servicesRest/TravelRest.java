package domain.servicesRest;

import java.util.Date;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import domain.Driver;
import domain.Travel;
import domain.builders.TravelBuilder;
import domain.services.TravelService;

@Path("/user")
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
		return travelService.getTravelRepository().findPendingTravels();
	}
	
	
	@GET
	@Path("/allHistoricTravels") 
	@Produces("application/json")
	public List<Travel> allHistoricTravels() {
		return travelService.getTravelRepository().findHistoricTravels();
	}
	
	@GET
	@Path("/add/{destination}/{date}/{scheduler}/{driver}")
	@Produces("application/json")
	public Travel creatNewTravel(@PathParam("surname") final String destination,@PathParam("date") final Date date,@PathParam("scheduler") final int scheduler,@PathParam("driver") final Driver driver) {
	    Travel travel = new TravelBuilder()
	    	.withDestination(destination)
	    	.withDate(date)
	    	.withScheduler(scheduler)
	    	.withDriver(driver)
	    	.build();
	    this.travelService.save(travel);
	    return travel;
	 }
	
}