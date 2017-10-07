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

import domain.Driver;
import domain.builders.DriverBuilder;
import domain.services.DriverService;

@Path("/driver")
public class DriverRest {

	DriverService driverService;
	
	public DriverRest() {}
	public DriverRest(DriverService driverService) {
		this.driverService = driverService;
	}
	
	@GET
	@Path("/allDrivers")
	@Produces("application/json")
	public List<Driver> allDrivers() {
		return driverService.getDriverRepository().findAll();
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
	@Path("/deleteDriver/{id}")
	@Produces("application/json")
	public Response deleteDriver(@PathParam("id") int id) {
		Driver driver = driverService.getDriverRepository().findById(id);
		if(driver == null) {
			return Response.serverError().status(HttpStatus.NOT_FOUND_404).build();
		}
		driverService.deleteDriver(driver);
		return Response.ok().status(HttpStatus.OK_200).build();
	}
	
	@PUT
	@Path("/profile/{id}/{surname}/{name}/{document}/{age}/{address}/{email}/{telephone}/{celphone}/{license}")
	@Produces("application/json")
	public Response modifyParent(@PathParam("id") int id,@PathParam("surname") String surname,@PathParam("name") String name,@PathParam("document") int document,@PathParam("age") int age,@PathParam("address") String address,@PathParam("email") final String email,@PathParam("telephone") int telephone,@PathParam("celphone") int celphone,@PathParam("license") int license) {
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
}