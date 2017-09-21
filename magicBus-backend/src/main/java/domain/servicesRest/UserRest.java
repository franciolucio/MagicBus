package domain.servicesRest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.eclipse.jetty.http.HttpStatus;

import domain.User;
import domain.builders.DriverBuilder;
import domain.builders.ParentBuilder;
import domain.services.UserService;

@Path("/user")
public class UserRest {

	UserService userService;
	
	public UserRest() {}
	public UserRest(UserService userService) {
		this.userService = userService;
	}

	@GET
	@Path("/profile/{email}") 
	@Produces("application/json")
	public User  getProfile(@PathParam("email") final String email) {
		return userService.getUserRepository().getUserByEmail(email);
	}
	
	@GET
	@Path("/logIn/{email}")
	@Produces("application/json")
	public Response logIn(@PathParam("email") final String email) {
		Response response;
		User user = userService.getUserRepository().getUserByEmail(email);
		if (user == null) {
			user = new ParentBuilder().withEmail(email).build();
			userService.getUserRepository().save(user);
		} 
		response = Response.ok().tag("El usuario se encuentra").status(HttpStatus.OK_200).build();
		return response;
    }
	
	@GET
	@Path("/add/{name}/{surname}/{email}/{age}/{address}")
	@Produces("application/json")
	public User creatNewConductor(@PathParam("name") final String name,@PathParam("surname") final String surname,@PathParam("email") final String email,@PathParam("age") final int age,@PathParam("address") final String address) {
        User user = new DriverBuilder()
                .withName(name)
                .withSurname(surname)
                .withEmail(email)
                .withAge(age)
                .withAddress(address)
                .build();

       this.userService.save(user);
       return user;
    }
	
//	@POST
//	@Path("/add/{name}/{surname}/{email}/{age}/{address}")
//	@Consumes("application/json")
//	@Produces("application/json")
//	public Response createNewConductor(@PathParam("name") final String name,@PathParam("surname") final String surname,@PathParam("email") final String email,@PathParam("age") final int age,@PathParam("address") final String address) {
//		Response response;
//		try {
//		User user = new UserBuilder()
//                .withNombre(name)
//                .withApellido(surname)
//                .withEmail(email)
//                .withEdad(age)
//                .withDomicilio(address)
//                .build();
//		this.userService.save(user);
//		response = Response.ok().tag("El usuario fue creado correctamente").status(HttpStatus.OK_200).build();
//		 } catch (Exception e) {
//			 response = Response.serverError().tag("No se pudo crear el usuario").status(HttpStatus.NOT_FOUND_404).build();
//	        }
//		return response;
//		}
}
