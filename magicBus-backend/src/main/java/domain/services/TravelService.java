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
		return getTravelRepository().findPendingTravels();
	}
	
	@Transactional
	public List<Travel> findPendingTravelForADate(LocalDate date) {
		return getTravelRepository().findPendingTravelForADate(date);
	}
	
	@Transactional
	public List<Travel> findHistoricTravels() {
		return getTravelRepository().findHistoricTravels();
	}
	
	@Transactional
	public List<Child> getChilds(int id, List<Travel> travels) {
		return travels.get(id).getChilds();
	}
	

}
