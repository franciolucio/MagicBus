package domain.servicesRest;

import java.util.List;

import javax.ws.rs.Consumes;
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

import domain.Admin;
import domain.Child;
import domain.Message;
import domain.Parent;
import domain.Travel;
import domain.User;
import domain.builders.ChildBuilder;
import domain.builders.ParentBuilder;
import domain.services.AdminService;
import domain.services.ChildService;
import domain.services.ParentService;
import domain.services.TravelService;

@Path("/parent")
public class ParentRest {

	ParentService parentService;
	ChildService childService;
	AdminService adminService;
	TravelService travelService;
	
	public ParentRest() {}
	public ParentRest(ParentService parentService,ChildService childService,AdminService adminService, TravelService travelService) {
		this.parentService = parentService;
		this.childService = childService;
		this.adminService = adminService;
		this.travelService = travelService;
	}
	
	@GET
	@Path("/logIn/{email}")
	@Produces("application/json")
	public User logIn(@PathParam("email") final String email) {
		Parent parent = parentService.findParentsByEmail(email);
		Admin admin = adminService.findAdminByEmail(email);
		if(admin != null){
			return admin;
		}else{
			if(parent == null){
				parent = new ParentBuilder().withEmail(email).build();
				parentService.saveParent(parent);
			}
			return parent; 
		}
	}
	
	@GET
	@Path("/allParents")
	@Produces("application/json")
	public List<Parent> allParents() {
		return parentService.getParentRepository().findAll();
	}
	
	@GET
	@Path("/allAdmins")
	@Produces("application/json")
	public List<Admin> allAdmins() {
		return adminService.getAdminRepository().findAll();
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
        .withPrepaidMedicine(pregnancyMedicine)
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
		Parent parent = parentService.getParentRepository().findById(id);
		return parentService.findChildsForAParent(parent);
	}
	
	@DELETE
	@Path("/deleteParent/{id}")
	@Produces("application/json")
	public Response deleteParent(@PathParam("id") int id) {
		Parent parent = parentService.getParentRepository().findById(id);
		LocalDate today = new LocalDate();
		List<Travel> travelsForToday = travelService.findPendingTravelForADate(today);
		if(parent == null) {
			return Response.serverError().status(HttpStatus.NOT_FOUND_404).build();
		}
		for(Child c : parent.getChilds())
			for (Travel t : travelsForToday){
				if(!t.childsGo.contains(c)){
					c.setEnabled(false);
					parent.activate = false;
					parentService.saveParent(parent);
				}
			}
		return Response.ok().status(HttpStatus.OK_200).build();
	}
	
	@POST
	@Path("/newMessage/{idParent}/{idChild}/{idTravel}/{content}")
	@Produces("application/json")
	public Response newMessage(@PathParam("idParent") final int idParent, @PathParam("idChild") final int idChild, @PathParam("idTravel") final int idTravel, @PathParam("content") final String content) {
		Parent parent = parentService.getParentRepository().findById(idParent);
		Travel travel = travelService.getTravelRepository().findById(idTravel);
		Child child = childService.getChildRepository().findById(idChild);
		String fromUser = parent.getSurname() + " " + parent.getName() + " (" + child.getSurname() + " " + child.getName() + ")";
		Message message = new Message(fromUser, content);
		travel.addMessage(message);
		this.travelService.update(travel);
		return Response.ok().status(HttpStatus.OK_200).build();
	}
	
	@POST
	@Path("/newMessageAdmin/{idAdmin}/{idTravel}/{content}")
	@Produces("application/json")
	public Response newMessageAdmin(@PathParam("idAdmin") final int idAdmin, @PathParam("idTravel") final int idTravel, @PathParam("content") final String content) {
		Admin admin = adminService.getAdminRepository().findById(idAdmin);
		Travel travel = travelService.getTravelRepository().findById(idTravel);
		String fromUser = admin.getSurname() + " " + admin.getName() + " (Admin)";
		Message message = new Message(fromUser, content);
		travel.addMessage(message);
		this.travelService.update(travel);
		return Response.ok().status(HttpStatus.OK_200).build();
	}
}