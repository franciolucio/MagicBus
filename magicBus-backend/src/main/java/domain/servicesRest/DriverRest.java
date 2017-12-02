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

import domain.Driver;
import domain.Message;
import domain.Travel;
import domain.builders.DriverBuilder;
import domain.services.DriverService;
import domain.services.TravelService;

@Path("/driver")
public class DriverRest {

	DriverService driverService;
	TravelService travelService;
	
	public DriverRest() {}
	public DriverRest(DriverService driverService, TravelService travelService) {
		this.driverService = driverService;
		this.travelService = travelService;
	}
	
	@GET
	@Path("/allDrivers")
	@Produces("application/json")
	public List<Driver> allDrivers() {
		return driverService.findRegisteredDrivers();
	}
	
	@GET
	@Path("/driverById/{idDriver}")
	@Produces("application/json")
	public Driver driverById(@PathParam("idDriver") int idDriver) {
		return driverService.getDriverRepository().findById(idDriver);
	}
	
	@POST
	@Path("/add/{surname}/{name}/{document}/{age}/{address}/{email}/{telephone}/{celphone}/{license}")
	@Produces("application/json")
	public Response createNewDriver(@PathParam("surname") final String surname,@PathParam("name") final String name,@PathParam("document") final int document,@PathParam("age") final int age,@PathParam("address") final String address,@PathParam("email") final String email,@PathParam("telephone") final int telephone,@PathParam("celphone") final int celphone,@PathParam("license") final int license) {
        Driver driver = new DriverBuilder()
                .withName(name)
                .withSurname(surname)
                .withDocument(document)
                .withAge(age)
                .withAddress(address)
                .withEmail(email)
                .withTelephone(telephone)
                .withCelphone(celphone)
                .withLicense(license)
                .build();

       this.driverService.save(driver);
       return Response.ok().status(HttpStatus.OK_200).build();
    }
	
	
	@DELETE
	@Path("/deleteDriver/{idDriver}")
	@Produces("application/json")
	public Response deleteDriver(@PathParam("idDriver") int idDriver) {
		Driver driver = driverService.getDriverRepository().findById(idDriver);
		LocalDate today = new LocalDate();
		List<Travel> travelsDriver = travelService.findPendingTravels();
		List<Travel> travelsForToday = travelService.findPendingTravelForADate(today);
		for(Travel t : travelsForToday){
			if(t.isInitTravel() && ! t.isFinishTravel()){
				return Response.serverError().status(HttpStatus.NOT_FOUND_404).build();
			}
		}
		driver.enabled = false;
		driverService.saveDriver(driver);
		for(Travel t : travelsDriver)
			if(t.getDriver().getId() == idDriver){
				driverService.chargeDriver(t);
				travelService.update(t);
			}
		return Response.ok().status(HttpStatus.OK_200).build();
	}
	
	@PUT
	@Path("/profileDriver/{id}/{surname}/{name}/{document}/{age}/{address}/{email}/{telephone}/{celphone}/{license}")
	@Produces("application/json")
	public Response modifyDriver(@PathParam("id") int id,@PathParam("surname") String surname,@PathParam("name") String name,@PathParam("document") int document,@PathParam("age") int age,@PathParam("address") String address,@PathParam("email") final String email,@PathParam("telephone") int telephone,@PathParam("celphone") int celphone,@PathParam("license") int license) {
		Driver driver = driverService.getDriverRepository().findById(id);
		if(driver == null){
			return Response.serverError().status(HttpStatus.NOT_FOUND_404).build();
		}
		driver.setName(name);
		driver.setSurname(surname);
		driver.setDocument(document);
		driver.setAge(age);
		driver.setAddress(address);
		driver.setEmail(email);
		driver.setTelephone(telephone);
		driver.setCelphone(celphone);
		driver.setLicense(license);
		this.driverService.update(driver);
		return Response.ok().status(HttpStatus.OK_200).build();
    }
	
	@POST
	@Path("/newMessage/{idDriver}/{idTravel}/{content}")
	@Produces("application/json")
	public Response newMessage(@PathParam("idDriver") final int idDriver, @PathParam("idTravel") final int idTravel, @PathParam("content") final String content) {
		Driver driver = driverService.getDriverRepository().findById(idDriver);
		Travel travel = travelService.getTravelRepository().findById(idTravel);
		String fromUser = driver.getSurname() + " " + driver.getName();
		Message message = new Message(fromUser, content);
		travel.addMessage(message);
		this.travelService.update(travel);
		return Response.ok().status(HttpStatus.OK_200).build();
	}
}