package domain.services;

import javax.ws.rs.core.Response;

import org.springframework.transaction.annotation.Transactional;

import domain.Child;
import domain.repositories.ChildRepository;

public class ChildService extends GenericService<Child>{

	private static final long serialVersionUID = 7388405495111949457L;
	
	private ChildRepository childRepository;
	

	public ChildService() {}

	public ChildService(ChildRepository driverRepository) {
		this.childRepository = driverRepository;
	}

	public ChildRepository getChildRepository() {
		return childRepository;
	}

	public void setChildRepository(ChildRepository driverRepository) {
		this.childRepository = driverRepository;
	}
	
	@Transactional
	public Response deleteChild(int id) {
		return getChildRepository().deleteChild(id);
	}
}
