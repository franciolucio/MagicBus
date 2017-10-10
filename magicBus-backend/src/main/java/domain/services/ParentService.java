package domain.services;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;

import domain.Child;
import domain.Parent;
import domain.repositories.ParentRepository;

public class ParentService extends GenericService<Parent>{
	
	private static final long serialVersionUID = -4058012183468034953L;
	private ParentRepository parentRepository;
	

	public ParentService() {}

	public ParentService(ParentRepository parentRepository) {
		this.parentRepository = parentRepository;
	}

	public ParentRepository getParentRepository() {
		return parentRepository;
	}

	public void setParentRepository(ParentRepository parentRepository) {
		this.parentRepository = parentRepository;
	}
	
	@Transactional
	public List<Parent> findRegisteredParents() {
		return getParentRepository().findRegisteredParents();
	}
	
	@Transactional
	public List<Parent> findPendingParents() {
		return getParentRepository().findPendingParents();
	}
	
	@Transactional
	public Parent findParentsByEmail(String email) {
		return getParentRepository().getParentByEmail(email);
	}

	@Transactional
	public void saveParent(Parent parent) {
		parentRepository.saveOrUpdate(parent);
	}

	@Transactional
	public List<Child> findChildsForAParent(Parent parent) {
		return getParentRepository().findChildsForAParent(parent);
	}
}
