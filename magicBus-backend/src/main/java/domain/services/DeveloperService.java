package domain.services;

import org.springframework.transaction.annotation.Transactional;

import domain.Developer;
import domain.repositories.DeveloperRepository;

public class DeveloperService extends GenericService<Developer> {

	private static final long serialVersionUID = 6166643790617431257L;
	private DeveloperRepository developerRepository;
	
	public DeveloperService() {}

	public DeveloperService(DeveloperRepository developerRepository) {
		this.developerRepository = developerRepository;
	}

	public DeveloperRepository getDeveloperRepository() {
		return developerRepository;
	}

	public void setDeveloperRepository(DeveloperRepository developerRepository) {
		this.developerRepository = developerRepository;
	}
	
	@Transactional
	public Developer findDeveloperByEmail(String email) {
		return getDeveloperRepository().getDeveloperByEmail(email);
	}
}
