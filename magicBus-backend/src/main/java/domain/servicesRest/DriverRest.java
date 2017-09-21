package domain.servicesRest;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import domain.Driver;
import domain.Parent;
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
	@Path("/allRegisteredParents")
	@Produces("application/json")
	public List<Parent> allRegisteredParents() {
		return driverService.getDriverRepository().findRegisteredParents();
	}
	
	@GET
	@Path("/allPendingParents")
	@Produces("application/json")
	public List<Parent> allPendingParents() {
		return driverService.getDriverRepository().findPendingParents();
	}
	
	@GET
	@Path("/add/{surname}/{name}/{document}/{age}/{address}/{email}/{telephone}/{celphone}/{license}")
	@Produces("application/json")
	public Driver creatNewConductor(@PathParam("surname") final String surname,@PathParam("name") final String name,@PathParam("document") final int document,@PathParam("age") final int age,@PathParam("address") final String address,@PathParam("email") final String email,@PathParam("telephone") final int telephone,@PathParam("celphone") final int celphone,@PathParam("license") final int license) {
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
       return driver;
    }
}