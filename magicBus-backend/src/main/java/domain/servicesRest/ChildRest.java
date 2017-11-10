package domain.servicesRest;

import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.eclipse.jetty.http.HttpStatus;

import domain.Child;
import domain.Travel;
import domain.services.ChildService;
import domain.services.TravelService;

@Path("/child")
public class ChildRest {

	ChildService childService;
	TravelService travelService;
	
	public ChildRest() {}
	public ChildRest(ChildService childService,TravelService travelService) {
		this.childService = childService;
		this.travelService = travelService;
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
		Child child = childService.getChildRepository().findById(id);
		List<Travel> travelsForAChild = travelService.allPendingTravelsForAChild(child);
		for (Travel t : travelsForAChild)
			if(t.isInitTravel() && ! t.isFinishTravel()){
				return Response.serverError().status(HttpStatus.NOT_FOUND_404).build();
			}
		child.enabled = false;
		childService.saveChild(child);
		return Response.ok().status(HttpStatus.OK_200).build();
	}
	
	@PUT
	@Path("/profile/{id}/{surname}/{name}/{document}/{age}/{address}/{email}/{telephone}/{celphone}/{pregnancyMedicine}/{latitude}/{longitude}")
	@Produces("application/json")
	public Response modifyParent(@PathParam("id") int id,@PathParam("surname") String surname,@PathParam("name") String name,@PathParam("document") int document,@PathParam("age") int age,@PathParam("address") String address,@PathParam("email") final String email,@PathParam("telephone") int telephone,@PathParam("celphone") int celphone,@PathParam("pregnancyMedicine") String pregnancyMedicine,@PathParam("latitude") double latitude,@PathParam("longitude") double longitude) {
		Child child = childService.getChildRepository().findById(id);
		if(child == null){
			return Response.serverError().status(HttpStatus.NOT_FOUND_404).build();
		}
		child.setName(name);
		child.setSurname(surname);
		child.setDocument(document);
		child.setAge(age);
        child.setAddress(address);
        child.setEmail(email);
        child.setTelephone(telephone);
        child.setCelphone(celphone);
        child.setPrepaidMedicine(pregnancyMedicine);
        child.setLatitude(latitude);
        child.setLongitude(longitude);
		this.childService.update(child);
		return Response.ok().status(HttpStatus.OK_200).build();
    }
}
