package domain.repositories;

import org.hibernate.Query;

import domain.Developer;

public class DeveloperRepository extends HibernateGenericDao<Developer> implements GenericRepository<Developer> {
	
	private static final long serialVersionUID = 4710268591769897338L;

	@Override
	protected Class<Developer> getDomainClass() {
		return Developer.class;
	}
	
	public Developer getDeveloperByEmail(String email) {
		String hql = "SELECT u FROM " + Developer.class.getName() + " u " +
                "WHERE u.email = :email";
        Query query =  getHibernateTemplate().getSessionFactory().getCurrentSession().createQuery(hql);
        query.setParameter("email",email);
        Developer developer = (Developer) query.uniqueResult();
        return developer;
    }
}
