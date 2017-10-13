package domain.services;

import java.util.List;

import org.joda.time.LocalDate;
import org.springframework.transaction.annotation.Transactional;

import domain.Child;
import domain.Travel;
import domain.TravelOccasional;
import domain.repositories.TravelOccasionalRepository;

public class TravelOccasionalService extends GenericService<TravelOccasional>{

	private static final long serialVersionUID = 8522046852038258879L;
	private TravelOccasionalRepository travelOccasionalRepository;
	

	public TravelOccasionalService() {}

	public TravelOccasionalService(TravelOccasionalRepository travelOccasionalRepository) {
		this.travelOccasionalRepository = travelOccasionalRepository;
	}

	public TravelOccasionalRepository getTravelOccasionalRepository() {
		return travelOccasionalRepository;
	}

	public void setTravelOccasionalRepository(TravelOccasionalRepository travelRepository) {
		this.travelOccasionalRepository = travelRepository;
	}
	
	@Transactional
	public List<TravelOccasional> findPendingTravels() {
		return travelOccasionalRepository.findPendingTravels();
	}
	
	@Transactional
	public List<TravelOccasional> allPendingTravelsForAChild(Child child) {
		return travelOccasionalRepository.allPendingTravelsForAChild(child);
	}
	
	@Transactional
	public List<TravelOccasional> findPendingTravelForADate(LocalDate date) {
		return travelOccasionalRepository.findPendingTravelForADate(date);
	}
	
	@Transactional
	public List<TravelOccasional> findHistoricTravels() {
		return travelOccasionalRepository.findHistoricTravels();
	}
	
	@Transactional
	public void saveTravel(TravelOccasional travelOccasionalRepository) {
		getTravelOccasionalRepository().saveOrUpdate(travelOccasionalRepository);
	}
}
