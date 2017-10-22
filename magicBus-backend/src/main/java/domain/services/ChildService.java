package domain.services;

import org.springframework.transaction.annotation.Transactional;

import domain.Child;
import domain.repositories.ChildRepository;

public class ChildService extends GenericService<Child>{

	private static final long serialVersionUID = 7388405495111949457L;
	
	private ChildRepository childRepository;
	

	public ChildService() {}

	public ChildService(ChildRepository childRepository) {
		this.childRepository = childRepository;
	}

	public ChildRepository getChildRepository() {
		return childRepository;
	}

	public void setChildRepository(ChildRepository childRepository) {
		this.childRepository = childRepository;
	}
	
	@Transactional
	public void deleteChild(int id) {
		childRepository.deleteById(id);
	}

	@Transactional
	public void saveChild(Child child) {
		getChildRepository().saveOrUpdate(child);
	}
}
