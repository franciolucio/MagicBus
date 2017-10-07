package domain.services;

import org.springframework.transaction.annotation.Transactional;

import domain.Driver;
import domain.repositories.DriverRepository;

public class DriverService extends GenericService<Driver>{

	private static final long serialVersionUID = 7388405495111949457L;
	
	private DriverRepository driverRepository;
	

	public DriverService() {}

	public DriverService(DriverRepository driverRepository) {
		this.driverRepository = driverRepository;
	}

	public DriverRepository getDriverRepository() {
		return driverRepository;
	}

	public void setDriverRepository(DriverRepository driverRepository) {
		this.driverRepository = driverRepository;
	}
	
	@Transactional
	public void deleteDriver(Driver driver) {
		this.getDriverRepository().delete(driver);
		
	}
}