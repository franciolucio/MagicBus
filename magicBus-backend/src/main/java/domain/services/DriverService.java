package domain.services;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;

import domain.Driver;
import domain.Travel;
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
	public void saveDriver(Driver driver) {
		driverRepository.saveOrUpdate(driver);
	}
	
	@Transactional
	public List<Driver> findRegisteredDrivers() {
		return getDriverRepository().findRegisteredDrivers();
	}
	
	@Transactional
	public Driver findDriverByEmail(String email) {
		return getDriverRepository().getDriverByEmail(email);
	}
	
	@Transactional
	public void chargeDriver(Travel t) {
		t.setDriver(getDriverOfSystem());
	}
	
	private Driver getDriverOfSystem() {
		List<Driver> drivers = getDriverRepository().findRegisteredDrivers();
		if(drivers != null){
			System.out.println("No hay drivers para asignar");
		}
		return drivers.get(0);
	}
}