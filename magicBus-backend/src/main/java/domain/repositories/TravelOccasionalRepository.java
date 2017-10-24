package domain.repositories;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.joda.time.LocalDate;

import domain.Child;
import domain.TravelOccasional;

public class TravelOccasionalRepository extends HibernateGenericDao<TravelOccasional> implements GenericRepository<TravelOccasional> {

	private static final long serialVersionUID = 5493419685937149972L;

	@Override
	protected Class<TravelOccasional> getDomainClass() {
		return TravelOccasional.class; 
	}

	@SuppressWarnings("unchecked")
	public <E> List<TravelOccasional> findPendingTravels() {
		LocalDate today = new LocalDate().now();
		Query q = getHibernateTemplate().getSessionFactory().getCurrentSession().createQuery("from TravelOccasional");
		List<TravelOccasional> pendingTravels = new ArrayList<>();
		List<TravelOccasional> allTravels = q.list();
		for(TravelOccasional t : allTravels){
			if(t.date.isAfter(today) || t.date.isEqual(today) && t.active == true)
				pendingTravels.add(t);
			}
		return pendingTravels;
	}
	
	@SuppressWarnings("unchecked")
	public <E> List<TravelOccasional> allPendingTravelsForAChild(Child child) {
		LocalDate today = new LocalDate().now();
		Query q = getHibernateTemplate().getSessionFactory().getCurrentSession().createQuery("from TravelOccasional");
		List<TravelOccasional> pendingTravels = new ArrayList<>();
		List<TravelOccasional> allTravels = q.list();
		for(TravelOccasional t : allTravels){
			if((t.date.isAfter(today) || t.date.isEqual(today)) && t.childInTravel(child.getId()))
				pendingTravels.add(t);
			}
		return pendingTravels;
	}
	
	@SuppressWarnings("unchecked")
	public <E> List<TravelOccasional> findPendingTravelForADate(LocalDate date) {
		Query q = getHibernateTemplate().getSessionFactory().getCurrentSession().createQuery("from TravelOccasional");
		List<TravelOccasional> pendingTravels = new ArrayList<>();
		List<TravelOccasional> allTravels = q.list();
		for(TravelOccasional t : allTravels){
			if(t.date.isEqual(date))
				pendingTravels.add(t);
			}
		return pendingTravels;
	}

	@SuppressWarnings("unchecked")
	public <E> List<TravelOccasional> findHistoricTravels() {
		LocalDate today = new LocalDate().now();
		Query q = getHibernateTemplate().getSessionFactory().getCurrentSession().createQuery("from TravelOccasional");
		List<TravelOccasional> historicTravels = new ArrayList<>();
		List<TravelOccasional> allTravels = q.list();
		for(TravelOccasional t : allTravels){
			if(t.date.isBefore(today))
				historicTravels.add(t);
			}
		return historicTravels;
	}
}