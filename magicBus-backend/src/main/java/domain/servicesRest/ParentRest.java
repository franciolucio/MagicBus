package domain.servicesRest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.eclipse.jetty.http.HttpStatus;

import domain.Child;
import domain.Parent;
import domain.builders.ChildBuilder;
import domain.builders.ParentBuilder;
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
	@Path("/logIn/{email}")
	@Produces("application/json")
	public Parent logIn(@PathParam("email") final String email) {
		Parent parent = parentService.findParentsByEmail(email);
		if (parent == null) {
			parent = new ParentBuilder().withEmail(email).build();
			parentService.saveParent(parent);
		} 
		return parent;
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
	
	@PUT
	@Path("/enable/{id}")
	@Produces("application/json")
	public Response enableParent(@PathParam("id") int id) {
		Parent parent = parentService.getParentRepository().findById(id);
		if(parent == null) {
			return Response.serverError().status(HttpStatus.NOT_FOUND_404).build();
		}
		parent.activate = true;
		parentService.saveParent(parent);
		return Response.ok().status(HttpStatus.OK_200).build();
	}
	
	@GET
	@Path("/allPendingParents")
	@Produces("application/json")
	public List<Parent> allPendingParents() {
		return parentService.findPendingParents();
	}
	
	@POST
	@Path("/add/{id}/{surname}/{name}/{document}/{age}/{address}/{email}/{telephone}/{celphone}/{pregnancyMedicine}/{latitude}/{longitude}")
	@Produces("application/json")
	@Consumes("application/json")
	public Response createNewChild(@PathParam("id") int id,@PathParam("surname") String surname,@PathParam("name") String name,@PathParam("document") int document,@PathParam("age") int age,@PathParam("address") String address,@PathParam("email") final String email,@PathParam("telephone") int telephone,@PathParam("celphone") int celphone,@PathParam("pregnancyMedicine") String pregnancyMedicine,@PathParam("latitude") double latitude,@PathParam("longitude") double longitude) {
		Parent parent = parentService.getParentRepository().findById(id);
		if(parent == null){
			return Response.serverError().status(HttpStatus.NOT_FOUND_404).build();
		}
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
		return Response.ok().status(HttpStatus.OK_200).build();
    }
	
	@PUT
	@Path("/profile/{id}/{surname}/{name}/{document}/{age}/{address}/{email}/{telephone}/{celphone}")
	@Produces("application/json")
	public Response modifyParent(@PathParam("id") int id,@PathParam("surname") String surname,@PathParam("name") String name,@PathParam("document") int document,@PathParam("age") int age,@PathParam("address") String address,@PathParam("email") final String email,@PathParam("telephone") int telephone,@PathParam("celphone") int celphone) {
		Parent parent = parentService.getParentRepository().findById(id);
		if(parent == null){
			return Response.serverError().status(HttpStatus.NOT_FOUND_404).build();
		}
		parent.setName(name);
        parent.setSurname(surname);
        parent.setDocument(document);
        parent.setAge(age);
        parent.setAddress(address);
        parent.setEmail(email);
        parent.setTelephone(telephone);
        parent.setCelphone(celphone);
		this.parentService.update(parent);
		return Response.ok().status(HttpStatus.OK_200).build();
    }
	
	@GET
	@Path("/allByID/{id}")
	@Produces("application/json")
	public List<Child> allChilds(@PathParam("id") int id) {
		return parentService.getParentRepository().findById(id).childs;
	}

}
