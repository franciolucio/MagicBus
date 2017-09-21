package domain.services;

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
}
