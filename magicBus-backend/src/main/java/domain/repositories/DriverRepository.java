package domain.repositories;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;

import domain.Driver;

public class DriverRepository  extends HibernateGenericDao<Driver> implements GenericRepository<Driver> {

	private static final long serialVersionUID = 4077798780803361296L;

	@Override
	protected Class<Driver> getDomainClass() {
		return Driver.class;
	}

	@SuppressWarnings("unchecked")
	public <E> List<Driver> findRegisteredParents() {
		Query q = getHibernateTemplate().getSessionFactory().getCurrentSession().createQuery("from Driver");
		List<Driver> registeredDriver = new ArrayList<>();
		List<Driver> allDrivers = q.list();
		for(Driver d : allDrivers){
			if(d.enabled == true)
				registeredDriver.add(d);
			}
		return registeredDriver;
	}
}