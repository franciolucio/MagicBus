package domain.servicesRest;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import domain.Child;
import domain.Parent;
import domain.builders.ChildBuilder;
import domain.services.ChildService;
import domain.services.ParentService;

@Path("/parent")
public class ParentRest {

	ParentService parentService;
	ChildService childService;
	
	public ParentRest() {}
	public ParentRest(ParentService parentService,ChildService childService) {
		this.parentService = parentService;
		this.childService = childService;
	}
	
	@GET
	@Path("/allParents")
	@Produces("application/json")
	public List<Parent> allParents() {
		return parentService.getParentRepository().findAll();
	}
	
	@GET
	@Path("/allRegisteredParents")
	@Produces("application/json")
	public List<Parent> allRegisteredParents() {
		return parentService.findRegisteredParents();
	}
	
	@GET
	@Path("/allPendingParents")
	@Produces("application/json")
	public List<Parent> allPendingParents() {
		return parentService.findPendingParents();
	}
	
	@GET
	@Path("/add/{id}/{surname}/{name}/{document}/{age}/{address}/{email}/{telephone}/{celphone}/{pregnancyMedicine}/{latitude}/{longitude}")
	@Produces("application/json")
	public Child createNewChild(@PathParam("id") int id,@PathParam("surname") String surname,@PathParam("name") String name,@PathParam("document") int document,@PathParam("age") int age,@PathParam("address") String address,@PathParam("email") final String email,@PathParam("telephone") int telephone,@PathParam("celphone") int celphone,@PathParam("pregnancyMedicine") String pregnancyMedicine,@PathParam("latitude") double latitude,@PathParam("longitude") double longitude) {
		Parent parent = parentService.getParentRepository().findById(id);
		Child child = new ChildBuilder()
		.withName(name)
        .withSurname(surname)
        .withDocument(document)
        .withAge(age)
        .withAddress(address)
        .withEmail(email)
        .withTelephone(telephone)
        .withCelphone(celphone)
        .withPregnancyMedicine(pregnancyMedicine)
        .withLatitude(latitude)
        .withLongitude(longitude)
        .build();
		parent.addChild(child);
		this.parentService.update(parent);
		this.childService.save(child);
       return child;
    }
	
	@GET
	@Path("/allByID/{id}")
	@Produces("application/json")
	public List<Child> allChilds(@PathParam("id") int id) {
		return parentService.getParentRepository().findById(id).childs;
	}

}
