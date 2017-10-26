package domain.services;

import java.util.List;

import org.joda.time.LocalDate;
import org.springframework.transaction.annotation.Transactional;

import domain.Child;
import domain.Travel;
import domain.repositories.TravelRepository;

public class TravelService extends GenericService<Travel>{

	private static final long serialVersionUID = 8522046852038258879L;
	private TravelRepository travelRepository;
	

	public TravelService() {}

	public TravelService(TravelRepository travelRepository) {
		this.travelRepository = travelRepository;
	}

	public TravelRepository getTravelRepository() {
		return travelRepository;
	}

	public void setTravelRepository(TravelRepository travelRepository) {
		this.travelRepository = travelRepository;
	}
	
	@Transactional
	public List<Travel> findPendingTravels() {
		return travelRepository.findPendingTravels();
	}
	
	@Transactional
	public List<Travel> allPendingTravelsForAChild(Child child) {
		return travelRepository.allPendingTravelsForAChild(child);
	}
	
	@Transactional
	public List<Travel> findPendingTravelForADate(LocalDate date) {
		return travelRepository.findPendingTravelForADate(date);
	}
	
	@Transactional
	public List<Travel> findHistoricTravels() {
		return travelRepository.findHistoricTravels();
	}
	
	@Transactional
	public void saveTravel(Travel travelRepository) {
		getTravelRepository().saveOrUpdate(travelRepository);
	}
}
