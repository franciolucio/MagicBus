package domain.servicesRest;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

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
	@Path("/add/{name}/{surname}/{document}")
	@Produces("application/json")
	public Driver creatNewConductor(@PathParam("name") final String name,@PathParam("surname") final String surname,@PathParam("document") final int document) {
        Driver driver = new DriverBuilder()
                .withNombre(name)
                .withSurname(surname)
                .withDocument(document)
                .build();

       this.driverService.save(driver);
       return driver;
    }
}