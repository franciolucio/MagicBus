package domain.servicesRest;

import javax.ws.rs.Path;

import domain.services.ChildService;

@Path("/child")
public class ChildRest {

	ChildService childService;
	
	public ChildRest() {}
	public ChildRest(ChildService childService) {
		this.childService = childService;
	}
	
}
