package domain.repositories;

import java.util.List;

import org.hibernate.Query;

import domain.Driver;
import domain.Parent;

public class DriverRepository  extends HibernateGenericDao<Driver> implements GenericRepository<Driver> {

	private static final long serialVersionUID = 4077798780803361296L;

	@Override
	protected Class<Driver> getDomainClass() {
		return Driver.class;
	}

	public List<Parent> findRegisteredParents() {
		boolean activate = true;
		String hql = "from Parent as p where p.activate := activate ";
        Query query = getHibernateTemplate().getSessionFactory().getCurrentSession().createQuery(hql);
        query.setParameter("activate",activate);
        return (List<Parent>) query.list();
	}

	public List<Parent> findPendingParents() {
		boolean activate = false;
		String hql = "from Parent as p where p.activate := activate ";
        Query query = getHibernateTemplate().getSessionFactory().getCurrentSession().createQuery(hql);
        query.setParameter("activate",activate);
        return (List<Parent>) query.list();
	} 
}