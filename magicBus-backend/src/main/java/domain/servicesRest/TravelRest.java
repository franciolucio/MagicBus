package domain.servicesRest;

import java.lang.reflect.Type;
import java.util.ArrayList;
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

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import domain.Child;
import domain.Day;
import domain.Driver;
import domain.TravelOccasional;
import domain.builders.TravelOccasionalBuilder;
import domain.services.ChildService;
import domain.services.DriverService;
import domain.services.TravelOccasionalService;

@Path("/travel")
public class TravelRest {

	TravelOccasionalService travelOccasionalService;
	DriverService driverService;
	ChildService childService;
	
	public TravelRest() {}
	public TravelRest(TravelOccasionalService travelOccasionalService,DriverService driverService,ChildService childService) {
		this.travelOccasionalService = travelOccasionalService;
		this.driverService = driverService;
		this.childService = childService;
	}
	
	@GET
	@Path("/allTravels") 
	@Produces("application/json")
	public List<TravelOccasional> allTravels() {
		return travelOccasionalService.getTravelOccasionalRepository().findAll();
	}
	
	@GET
	@Path("/allPendingTravels") 
	@Produces("application/json")
	public List<TravelOccasional> allPendingTravels() {
		return travelOccasionalService.findPendingTravels();
	}
	
	@GET
	@Path("/allPendingTravelsForADate/{day}/{month}/{year}") 
	@Produces("application/json")
	public List<TravelOccasional> allPendingTravelsForADate(String destination,@PathParam("day") Integer day,@PathParam("month") Integer month,@PathParam("year") Integer year) {
		LocalDate date = LocalDate.now().withDayOfMonth(day).withMonthOfYear(month).withYear(year);
		return travelOccasionalService.findPendingTravelForADate(date);
	}
	
	@GET
	@Path("/allHistoricTravels") 
	@Produces("application/json")
	public List<TravelOccasional> allHistoricTravels() {
		return travelOccasionalService.findHistoricTravels();
	}
	
	@GET
	@Path("/byId/{idTravel}") 
	@Produces("application/json")
	public TravelOccasional getTravelById(@PathParam("idTravel") final int idTravel) {
		return travelOccasionalService.getTravelOccasionalRepository().findById(idTravel);
	}
	
	@POST
	@Path("/addTravelOccasional/{destination}/{address}/{day}/{month}/{year}/{hour}/{minutes}/{id}/{latitude}/{logitude}")
	@Produces("application/json")
	public Response creatNewTravelOccasional(@PathParam("destination") String destination,@PathParam("address") String address,@PathParam("day") Integer day,@PathParam("month") Integer month,@PathParam("year") Integer year,@PathParam("hour") final Integer hour,@PathParam("minutes") final Integer minutes,@PathParam("id") final int id,@PathParam("latitude") double latitude,@PathParam("longitude") double longitude) {
		LocalDate date = LocalDate.now().withDayOfMonth(day).withMonthOfYear(month).withYear(year);
		LocalTime scheduler = LocalTime.now().withHourOfDay(hour).withMinuteOfHour(minutes);
		Driver driver = driverService.getDriverRepository().findById(id);
		TravelOccasional travelOccasional = new TravelOccasionalBuilder()
	    	.withDestination(destination)
	    	.withAddress(address)
	    	.withDate(date)
	    	.withScheduler(scheduler)
	    	.withDriver(driver)
	    	.withLatitude(latitude)
	    	.withLongitude(longitude)
	    	.build();
	    this.travelOccasionalService.save(travelOccasional);
	    return Response.ok().status(HttpStatus.OK_200).build();
	 }
	
	@POST
	@Path("/addTravelDiary/{destination}/{address}/{day}/{month}/{year}/{hour}/{minutes}/{id}/{latitude}/{logitude}/{dayUntil}/{monthUntil}/{yearUntil}/{daysOfWeek}")
	@Produces("application/json")
	public Response creatNewTravelDiary(@PathParam("destination") String destination,@PathParam("address") String address,@PathParam("day") Integer day,@PathParam("month") Integer month,@PathParam("year") Integer year,@PathParam("hour") final Integer hour,@PathParam("minutes") final Integer minutes,@PathParam("id") final int id,@PathParam("latitude") double latitude,@PathParam("longitude") double longitude,@PathParam("dayUntil") Integer dayUntil,@PathParam("monthUntil") Integer monthUntil,@PathParam("yearUntil") Integer yearUntil,@PathParam("daysOfWeek") final String daysOfWeek) {
		LocalDate dateFrom = LocalDate.now().withDayOfMonth(day).withMonthOfYear(month).withYear(year);
		LocalDate dateUntil = LocalDate.now().withDayOfMonth(dayUntil).withMonthOfYear(monthUntil).withYear(yearUntil);
		LocalTime scheduler = LocalTime.now().withHourOfDay(hour).withMinuteOfHour(minutes);
		Driver driver = driverService.getDriverRepository().findById(id);
		Type listType = new TypeToken<ArrayList<Day>>(){}.getType();
		List<Day> days = new Gson().fromJson(daysOfWeek,listType);
		List<LocalDate> dates = createDates(dateFrom, dateUntil, days);
		for (LocalDate date : dates){
			TravelOccasional travelOccasional = new TravelOccasionalBuilder()
	    	.withDestination(destination)
	    	.withAddress(address)
	    	.withDate(date)
	    	.withScheduler(scheduler)
	    	.withDriver(driver)
	    	.withLatitude(latitude)
	    	.withLongitude(longitude)
	    	.build();
			this.travelOccasionalService.save(travelOccasional);
		}
	    return Response.ok().status(HttpStatus.OK_200).build();
	}
	
	private List<LocalDate> createDates(LocalDate dateFrom, LocalDate dateUntil, List<Day> daysOfWeek) {
		List<LocalDate> dates = new ArrayList<LocalDate>();
		LocalDate date = dateFrom;
		int numberOfDay = 1;
		for(Day d : daysOfWeek){
			if (d.confirm){
				while (date.isBefore(dateUntil)) {
				    if(date.dayOfWeek().get() == numberOfDay){
				    	dates.add(date);
				    	date.plusWeeks(1);
				    }
				    else{
				    	date.plusDays(1);
				    }
				}
			}
			numberOfDay++;
			date = dateFrom;
		}
		return dates;
	}
	
	@POST
	@Path("/addChildForATravel/{idTravel}/{idChild}")
	@Produces("application/json")
	public Response addChildForATravel(@PathParam("idTravel") final int idTravel, @PathParam("idChild") final int idChild) {
		TravelOccasional travel = travelOccasionalService.getTravelOccasionalRepository().findById(idTravel);
		travel.addChild(idChild);
	    this.travelOccasionalService.update(travel);
	    return Response.ok().status(HttpStatus.OK_200).build();
	}
	
	@GET
	@Path("/allPendingTravelsForAChild/{idChild}") 
	@Produces("application/json")
	public List<TravelOccasional> allPendingTravelsForAChild(@PathParam("idChild") int idChild) {
		Child child = childService.getChildRepository().findById(idChild);
		return travelOccasionalService.allPendingTravelsForAChild(child);
	}
	
	@GET
	@Path("/childsOfTravel/{idTravel}") 
	@Produces("application/json")
	public List<Child> childsOfTravel(@PathParam("idTravel") int idTravel) {
		TravelOccasional travel = travelOccasionalService.getTravelOccasionalRepository().findById(idTravel);
		List<Child> childsOfTravel = new ArrayList<Child>();
		for(Integer cid : travel.getChildsGo()){
			Child child = childService.getChildRepository().findById(cid);
			if(child.isEnabled()){
				if(travel.childsGoEffectively.contains(child.getId())){
					child.setTravelGo(true);
				}else{
					child.setTravelGo(false);
				}
				childsOfTravel.add(child);
			}
		}
		return childsOfTravel;
	}
	
	@DELETE
	@Path("/deleteTravel/{id}")
	@Produces("application/json")
	public Response deleteTravel(@PathParam("id") int id) {
		TravelOccasional travel = travelOccasionalService.getTravelOccasionalRepository().findById(id);
		if(travel == null) {
			return Response.serverError().status(HttpStatus.NOT_FOUND_404).build();
		}
		travel.active = false;
		travelOccasionalService.saveTravel(travel);
		return Response.ok().status(HttpStatus.OK_200).build();
	}
	
	@DELETE
	@Path("/deleteChildForTravel/{idChild}/{idTravel}")
	@Produces("application/json")
	public Response deleteChildForTravel(@PathParam("idChild") int idChild,@PathParam("idTravel") int idTravel) {
		TravelOccasional travel = travelOccasionalService.getTravelOccasionalRepository().findById(idTravel);
		travel.deleteChild(idChild);
		travelOccasionalService.saveTravel(travel);
		return Response.ok().status(HttpStatus.OK_200).build();
	}
	
	@PUT
	@Path("/profile/{destination}/{day}/{month}/{year}/{hour}/{minutes}/{id}/{latitude}/{logitude}")
	@Produces("application/json")
	public Response modifyTravel(@PathParam("destination") String destination,@PathParam("address") String address,@PathParam("day") Integer day,@PathParam("month") Integer month,@PathParam("year") Integer year,@PathParam("hour") final Integer hour,@PathParam("minutes") final Integer minutes,@PathParam("id") final int id,@PathParam("latitude") double latitude,@PathParam("longitude") double longitude) {
		LocalDate date = LocalDate.now().withDayOfMonth(day).withMonthOfYear(month).withYear(year);
		LocalTime scheduler = LocalTime.now().withHourOfDay(hour).withMinuteOfHour(minutes);
		Driver driver = driverService.getDriverRepository().findById(id);
		TravelOccasional travel = travelOccasionalService.getTravelOccasionalRepository().findById(id);
		if(travel == null){
			return Response.serverError().status(HttpStatus.NOT_FOUND_404).build();
		}
		travel.setDestination(destination);
		travel.setAddress(address);
		travel.setDate(date);
		travel.setScheduler(scheduler);
		travel.setDriver(driver);
		travel.setLatitude(latitude);
    	travel.setLongitude(longitude);
		this.travelOccasionalService.update(travel);
		return Response.ok().status(HttpStatus.OK_200).build();
    }
	
	@PUT
	@Path("/saveAssist/{data}/{IdTravel}")
	@Produces("application/json")
	public Response saveAssist(@PathParam("data") String data,@PathParam("IdTravel") int IdTravel) {
		TravelOccasional travel = travelOccasionalService.getTravelOccasionalRepository().findById(IdTravel);
		if(travel == null){
			return Response.serverError().status(HttpStatus.NOT_FOUND_404).build();
		}
		List<Integer> childsOfTravelAux = new ArrayList<Integer>();
		Type listType = new TypeToken<ArrayList<Child>>(){}.getType();
		List<Child> childs = new Gson().fromJson(data,listType);
		for(Child c : childs){
			if(c.isTravelGo()){
				childsOfTravelAux.add(c.getId());
			}
		}
		travel.setChildsGoEffectively(childsOfTravelAux);
		this.travelOccasionalService.update(travel);
		return Response.ok().status(HttpStatus.OK_200).build();
    }
}