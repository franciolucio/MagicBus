package domain.repositories;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.hibernate.Query;
import org.joda.time.LocalDate;

import domain.Travel;

public class TravelRepository extends HibernateGenericDao<Travel> implements GenericRepository<Travel> {

	private static final long serialVersionUID = 5493419685937149972L;

	@Override
	protected Class<Travel> getDomainClass() {
		return Travel.class; 
	}

	@SuppressWarnings("unchecked")
	public <E> List<Travel> findPendingTravels() {
		LocalDate today = new LocalDate().now();
		Query q = getHibernateTemplate().getSessionFactory().getCurrentSession().createQuery("from Travel");
		List<Travel> pendingTravels = new ArrayList<>();
		List<Travel> allTravels = q.list();
		for(Travel t : allTravels){
			if(t.date.isAfter(today))
				pendingTravels.add(t);
			}
		return pendingTravels;
	}

	@SuppressWarnings("unchecked")
	public <E> List<Travel> findHistoricTravels() {
		LocalDate today = new LocalDate().now();
		Query q = getHibernateTemplate().getSessionFactory().getCurrentSession().createQuery("from Travel");
		List<Travel> historicTravels = new ArrayList<>();
		List<Travel> allTravels = q.list();
		for(Travel t : allTravels){
			if(t.date.isBefore(today))
				historicTravels.add(t);
			}
		return historicTravels;
	}
}
