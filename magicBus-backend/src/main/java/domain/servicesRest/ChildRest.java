package domain.servicesRest;

import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import domain.Child;
import domain.services.ChildService;

@Path("/child")
public class ChildRest {

	ChildService childService;
	
	public ChildRest() {}
	public ChildRest(ChildService childService) {
		this.childService = childService;
	}
	
	@GET
	@Path("/allChilds")
	@Produces("application/json")
	public List<Child> allChilds() {
		return childService.getChildRepository().findAll();
	}
	
	@GET
	@Path("/getById/{id}")
	@Produces("application/json")
	public Child getById(@PathParam("id") int id) {
		return childService.getChildRepository().findById(id);
	}
	
	@DELETE
	@Path("/deleteChild/{id}")
	@Produces("application/json")
	public Response deleteChild(@PathParam("id") int id) {
		return childService.deleteChild(id);
	}
	
}
