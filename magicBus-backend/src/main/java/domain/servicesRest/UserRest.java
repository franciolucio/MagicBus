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
		return userService.getUserRepository().findById(email);
	}
	
	@GET
	@Path("/userID/{email}") 
	@Produces("application/json")
	public int userID (@PathParam("email") final String email) {
		return userService.getUserRepository().findById(email).getId();
	}
	
	
	
	@GET
	@Path("/logIn/{email}")
	@Produces("application/json")
	public Response logIn(@PathParam("email") final String email) {
		Response response;
		User user = userService.getUserRepository().findById(email);
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
	public User creatNewDriver(@PathParam("name") final String name,@PathParam("surname") final String surname,@PathParam("email") final String email,@PathParam("age") final int age,@PathParam("address") final String address) {
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
}