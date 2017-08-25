package domain.repositories;

import org.hibernate.Query;

import domain.User;

public class UserRepository  extends HibernateGenericDao<User> implements GenericRepository<User> {

	private static final long serialVersionUID = 4077798780803361296L;

	@Override
	protected Class<User> getDomainClass() {
		return User.class;
	}
	
	public User getUserByUserName(String nombre){
        String hql = "SELECT u FROM " + User.class.getName() + " u " +
                "WHERE u.nombre = :nombre";
        Query query =  getHibernateTemplate().getSessionFactory().getCurrentSession().createQuery(hql);
        query.setParameter("nombre",nombre);
        User user = (User) query.uniqueResult();
        return user;
    }
}
