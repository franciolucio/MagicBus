package domain.servicesRest;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import domain.User;
import domain.services.UserService;

@Path("/user")
public class UserRest {

	UserService userService;
	
	public UserRest() {}
	public UserRest(UserService userService) {
		this.userService = userService;
	}

//	@POST
//	@Path("/newUser")
//	@Produces("application/json") 
//	public User user() {
//		User user = UserBuilder.aUser().build();
//		return user;
//	}
	
	@GET
	@Path("/allUsers")
	@Produces("application/json")
	public List<User> allUsers() {
		return userService.getUserRepository().findAll();
	}

}
