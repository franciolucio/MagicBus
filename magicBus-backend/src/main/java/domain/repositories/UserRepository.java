package domain.repositories;

import org.hibernate.Query;

import domain.User;

public class UserRepository  extends HibernateGenericDao<User> implements GenericRepository<User> {

	private static final long serialVersionUID = 4077798780803361296L;

	@Override
	protected Class<User> getDomainClass() {
		return User.class;
	}
	
	public User getUserByUserId(int id){
        String hql = "SELECT u FROM " + User.class.getName() + " u " +
                "WHERE u.id = :id";
        Query query =  getHibernateTemplate().getSessionFactory().getCurrentSession().createQuery(hql);
        query.setParameter("id",id);
        User user = (User) query.uniqueResult();
        return user;
    }
	
	public User getUserByEmail(String email){
        String hql = "SELECT u FROM " + User.class.getName() + " u " +
                "WHERE u.email = :email";
        Query query =  getHibernateTemplate().getSessionFactory().getCurrentSession().createQuery(hql);
        query.setParameter("email",email);

        User user = (User) query.uniqueResult();

        return user;
    }
}
