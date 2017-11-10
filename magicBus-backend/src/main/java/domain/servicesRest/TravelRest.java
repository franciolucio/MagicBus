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
import domain.Travel;
import domain.Parent;
import domain.Message;
import domain.builders.TravelBuilder;
import domain.services.ChildService;
import domain.services.DriverService;
import domain.services.ParentService;
import domain.services.TravelService;

@Path("/travel")
public class TravelRest {

	TravelService travelService;
	DriverService driverService;
	ChildService childService;
	ParentService parentService;
	
	public TravelRest() {}
	public TravelRest(TravelService travelService,DriverService driverService,ChildService childService,ParentService parentService) {
		this.travelService = travelService;
		this.driverService = driverService;
		this.childService = childService;
		this.parentService = parentService;
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
	@Path("/addTravelOccasional/{destination}/{address}/{day}/{month}/{year}/{hour}/{minutes}/{id}/{latitude}/{logitude}")
	@Produces("application/json")
	public Response createNewTravelOccasional(@PathParam("destination") String destination,@PathParam("address") String address,@PathParam("day") Integer day,@PathParam("month") Integer month,@PathParam("year") Integer year,@PathParam("hour") final Integer hour,@PathParam("minutes") final Integer minutes,@PathParam("id") final int id,@PathParam("latitude") double latitude,@PathParam("longitude") double longitude) {
		LocalDate date = LocalDate.now().withDayOfMonth(day).withMonthOfYear(month).withYear(year);
		LocalTime scheduler = LocalTime.now().withHourOfDay(hour).withMinuteOfHour(minutes);
		Driver driver = driverService.getDriverRepository().findById(id);
		Travel travel = new TravelBuilder()
	    	.withDestination(destination)
	    	.withAddress(address)
	    	.withDate(date)
	    	.withScheduler(scheduler)
	    	.withDriver(driver)
	    	.withLatitude(latitude)
	    	.withLongitude(longitude)
	    	.build();
	    this.travelService.save(travel);
	    return Response.ok().status(HttpStatus.OK_200).build();
	 }
	
	@POST
	@Path("/addTravelDiary/{destination}/{address}/{day}/{month}/{year}/{hour}/{minutes}/{id}/{latitude}/{logitude}/{dayUntil}/{monthUntil}/{yearUntil}/{daysOfWeek}/{childs}")
	@Produces("application/json")
	public Response creatNewTravelDiary(@PathParam("destination") String destination,@PathParam("address") String address,@PathParam("day") Integer day,@PathParam("month") Integer month,@PathParam("year") Integer year,@PathParam("hour") final Integer hour,@PathParam("minutes") final Integer minutes,@PathParam("id") final int id,@PathParam("latitude") double latitude,@PathParam("longitude") double longitude,@PathParam("dayUntil") Integer dayUntil,@PathParam("monthUntil") Integer monthUntil,@PathParam("yearUntil") Integer yearUntil,@PathParam("daysOfWeek") final String daysOfWeek,@PathParam("childs") final String childs) {
		LocalDate dateFrom = LocalDate.now().withDayOfMonth(day).withMonthOfYear(month).withYear(year);
		LocalDate dateUntil = LocalDate.now().withDayOfMonth(dayUntil).withMonthOfYear(monthUntil).withYear(yearUntil);
		LocalTime scheduler = LocalTime.now().withHourOfDay(hour).withMinuteOfHour(minutes);
		Driver driver = driverService.getDriverRepository().findById(id);
		Type listTypeDay = new TypeToken<ArrayList<Day>>(){}.getType();
		List<Day> days = new Gson().fromJson(daysOfWeek,listTypeDay);
		Type listTypeChild = new TypeToken<ArrayList<Child>>(){}.getType();
		List<Child> childsOfSistem = new Gson().fromJson(childs,listTypeChild);
		List<LocalDate> dates = createDates(dateFrom, dateUntil, days);
		List<Integer> childsGo = new ArrayList<Integer>();
		for (Child child : childsOfSistem){
			if(child.isConfirm()){
				childsGo.add(child.getId());
			}
		}
		for (LocalDate date : dates){
			Travel travel = new TravelBuilder()
	    	.withDestination(destination)
	    	.withAddress(address)
	    	.withDate(date)
	    	.withScheduler(scheduler)
	    	.withDriver(driver)
	    	.withLatitude(latitude)
	    	.withLongitude(longitude)
	    	.withChildsGo(childsGo)
	    	.build();
			this.travelService.save(travel);
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
				    	date = date.plusWeeks(1);
				    }
				    else{
				    	date = date.plusDays(1);
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
		Travel travel = travelService.getTravelRepository().findById(idTravel);
		if(travel.childInTravel(idChild)){
			return Response.serverError().status(HttpStatus.NOT_FOUND_404).build();
		}
		travel.addChild(idChild);
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
	@Path("/allPendingTravelsForAllChilds/{idParent}") 
	@Produces("application/json")
	public List<Travel> allPendingTravelsForAllChilds(@PathParam("idParent") int idParent) {
		Parent parent = parentService.getParentRepository().findById(idParent);
		List<Travel> travels = new ArrayList<Travel>();
		for (Child child : parent.getChilds()){
			for (Travel travel : travelService.allPendingTravelsForAChild(child)){
				travel.setChildName(child.getSurname() + " " + child.getName());
				travels.add(travel);
			}
		}
		return travels;
	}

	@GET
	@Path("/childsOfTravel/{idTravel}") 
	@Produces("application/json")
	public List<Child> childsOfTravel(@PathParam("idTravel") int idTravel) {
		Travel travel = travelService.getTravelRepository().findById(idTravel);
		List<Child> childsOfTravel = new ArrayList<Child>();
		for(Integer cid : travel.getChildsGo()){
			Child child = childService.getChildRepository().findById(cid);
			if(child.isEnabled()){
				if(travel.childsGoEffectively.contains(child.getId())){
					child.setConfirm(true);
				}else{
					child.setConfirm(false);
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
		Travel travel = travelService.getTravelRepository().findById(idTravel);
		if(!travel.getChildsGoEffectively().contains(idChild)){
			travel.deleteChild(idChild);
			travelService.saveTravel(travel);
			return Response.ok().status(HttpStatus.OK_200).build();
		}
		return Response.serverError().status(HttpStatus.NOT_FOUND_404).build();
	}
	
	@PUT
	@Path("/profile/{destination}/{address}/{day}/{month}/{year}/{hour}/{minutes}/{idDriver}/{latitude}/{logitude}/{idTravel}")
	@Produces("application/json")
	public Response modifyTravel(@PathParam("destination") String destination,@PathParam("address") String address,@PathParam("day") Integer day,@PathParam("month") Integer month,@PathParam("year") Integer year,@PathParam("hour") final Integer hour,@PathParam("minutes") final Integer minutes,@PathParam("idDriver") final int idDriver,@PathParam("latitude") double latitude,@PathParam("longitude") double longitude,@PathParam("idTravel") final int idTravel) {
		LocalDate date = LocalDate.now().withDayOfMonth(day).withMonthOfYear(month).withYear(year);
		LocalTime scheduler = LocalTime.now().withHourOfDay(hour).withMinuteOfHour(minutes);
		Driver driver = driverService.getDriverRepository().findById(idDriver);
		Travel travel = travelService.getTravelRepository().findById(idTravel);
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
		this.travelService.saveTravel(travel);
		return Response.ok().status(HttpStatus.OK_200).build();
    }
	
	@PUT
	@Path("/saveAssist/{data}/{idTravel}")
	@Produces("application/json")
	public Response saveAssist(@PathParam("data") String data, @PathParam("idTravel") int idTravel){
		Travel travel = travelService.getTravelRepository().findById(idTravel);
		if(travel == null){
			return Response.serverError().status(HttpStatus.NOT_FOUND_404).build();
		}
		List<Integer> childsOfTravelAux = new ArrayList<Integer>();
		Type listType = new TypeToken<ArrayList<Child>>(){}.getType();
		List<Child> childs = new Gson().fromJson(data,listType);
		for(Child c : childs){
			if(c.isConfirm()){
				childsOfTravelAux.add(c.getId());
			}
		}
		travel.setChildsGoEffectively(childsOfTravelAux);
		this.travelService.update(travel);
		return Response.ok().status(HttpStatus.OK_200).build();
    }
	
	@GET
	@Path("/messages/{idTravel}")
	@Produces("application/json")
	public List<Message> getMessagesSent(@PathParam("idTravel") int idTravel) {
		return travelService.getTravelRepository().findById(idTravel).getMessages();
	}

	/*@GET
	@Path("/getInitOfTravel/{idTravel}")
	@Produces("application/json")
	public List<Message> getInitOfTravel(@PathParam("idTravel") int idTravel) {
		return travelService.getTravelRepository().findById(idTravel).getInitTravel();
	}
	
	@PUT
	@Path("/initTrue/{idTravel}")
	@Produces("application/json")
	public Response initTrue(@PathParam("idTravel") int idTravel){
		Travel travel = travelService.getTravelRepository().findById(idTravel);
		travel.setInitTavel(true);
		this.travelService.update(travel);
		return Response.ok().status(HttpStatus.OK_200).build();
    }*/
}