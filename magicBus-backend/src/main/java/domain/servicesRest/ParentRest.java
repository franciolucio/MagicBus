package domain.servicesRest;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import org.springframework.beans.factory.annotation.Autowired;

import domain.Child;
import domain.Parent;
import domain.builders.ChildBuilder;
import domain.builders.ParentBuilder;
import domain.services.ChildService;
import domain.services.ParentService;

@Path("/parent")
public class ParentRest {

	@Autowired
	ParentService parentService;
	@Autowired
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
	
	@GET
	@Path("/enable/{id}")
	@Produces("application/json")
	public Parent enableParent(@PathParam("id") int id) {
		Parent parent = parentService.getParentRepository().findById(id);
		parent.activate = true;
		parentService.saveParent(parent);
		return parent;
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
	@Path("/profile/{id}/{surname}/{name}/{document}/{age}/{address}/{email}/{telephone}/{celphone}")
	@Produces("application/json")
	public Parent modifyParent(@PathParam("id") int id,@PathParam("surname") String surname,@PathParam("name") String name,@PathParam("document") int document,@PathParam("age") int age,@PathParam("address") String address,@PathParam("email") final String email,@PathParam("telephone") int telephone,@PathParam("celphone") int celphone) {
		Parent parent = parentService.getParentRepository().findById(id);
		parent.setName(name);
        parent.setSurname(surname);
        parent.setDocument(document);
        parent.setAge(age);
        parent.setAddress(address);
        parent.setEmail(email);
        parent.setTelephone(telephone);
        parent.setCelphone(celphone);
		this.parentService.update(parent);
       return parent;
    }
	
	@GET
	@Path("/allByID/{id}")
	@Produces("application/json")
	public List<Child> allChilds(@PathParam("id") int id) {
		return parentService.getParentRepository().findById(id).childs;
	}

}
