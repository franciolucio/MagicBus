package domain.repositories;

import java.util.Date;
import java.util.List;

import org.hibernate.Query;

import domain.Travel;

public class TravelRepository extends HibernateGenericDao<Travel> implements GenericRepository<Travel> {

	private static final long serialVersionUID = 5493419685937149972L;

	@Override
	protected Class<Travel> getDomainClass() {
		return Travel.class; 
	}

	public List<Travel> findPendingTravels() {
		Date today = new Date();
		String hql = "from Travel as t where t.date >= today ";
        Query query = getHibernateTemplate().getSessionFactory().getCurrentSession().createQuery(hql);
        query.setParameter("date",today);
        return (List<Travel>) query.list();
	}

	public List<Travel> findHistoricTravels() {
		Date today = new Date();
		String hql = "from Travel as t where t.date < today ";
        Query query = getHibernateTemplate().getSessionFactory().getCurrentSession().createQuery(hql);
        query.setParameter("date",today);
        return (List<Travel>) query.list();
	}
}
