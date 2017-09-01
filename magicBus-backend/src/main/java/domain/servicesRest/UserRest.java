package domain.servicesRest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.eclipse.jetty.http.HttpStatus;

import domain.User;
import domain.builders.UserBuilder;
import domain.services.UserService;

@Path("/user")
public class UserRest {

	UserService userService;
	
	public UserRest() {}
	public UserRest(UserService userService) {
		this.userService = userService;
	}

	
	@GET
	@Path("/allUsers")
	@Produces("application/json")
	public List<User> allUsers() {
		return userService.getUserRepository().findAll();
	}
	
	@POST
	@Path("/newUser/{nombre}/{apellido}/{edad}/{domicilio}/{latitude}/{longitude}")
	@Consumes("application/json")
	@Produces("application/json")
	public Response addEvent(@PathParam("name") final String nombre,@PathParam("surname") final String apellido,@PathParam("age") final int edad,@PathParam("address") final String domicilio,@PathParam("latitude") final double latitude,@PathParam("longitude") final double longitude) {
		Response response;
		try {
		User user = UserBuilder.aUser()
					.withNombre(nombre)
					.withApellido(apellido)
					.withEdad(edad)
					.withDomicilio(domicilio)
					.withLatitude(latitude)
					.withLongitude(longitude)
					.build();
		userService.save(user);
        response = Response.ok().tag("El usuario fue creado correctamente").status(HttpStatus.OK_200).build();
		 } catch (Exception e) {
	            response = Response.serverError().tag("No se pudo crear el usuario").status(HttpStatus.NOT_FOUND_404).build();
	        }
		return response;
	}
	


}
