package domain.repositories;

import org.hibernate.Query;

import domain.Admin;

public class AdminRepository extends HibernateGenericDao<Admin> implements GenericRepository<Admin> {
	
	private static final long serialVersionUID = 1198156507938538913L;

	@Override
	protected Class<Admin> getDomainClass() {
		return Admin.class;
	}

	public Admin getAdminByEmail(String email) {
		String hql = "SELECT u FROM " + Admin.class.getName() + " u " +
                "WHERE u.email = :email";
        Query query =  getHibernateTemplate().getSessionFactory().getCurrentSession().createQuery(hql);
        query.setParameter("email",email);
        Admin admin = (Admin) query.uniqueResult();
        return admin;
    }
}
