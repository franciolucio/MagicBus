package domain.repositories;

import org.hibernate.Query;

import domain.Driver;

public class DriverRepository  extends HibernateGenericDao<Driver> implements GenericRepository<Driver> {

	private static final long serialVersionUID = 4077798780803361296L;

	@Override
	protected Class<Driver> getDomainClass() {
		return Driver.class;
	} 
	
	public Driver getDriverByDriverId(int id){
        String hql = "SELECT u FROM " + Driver.class.getName() + " u " +
                "WHERE u.id = :id";
        Query query =  getHibernateTemplate().getSessionFactory().getCurrentSession().createQuery(hql);
        query.setParameter("id",id);
        Driver driver = (Driver) query.uniqueResult();
        return driver;
    }
}