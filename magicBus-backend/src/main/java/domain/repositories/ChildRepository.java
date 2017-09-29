package domain.repositories;

import javax.ws.rs.core.Response;

import org.hibernate.Query;

import domain.Child;

public class ChildRepository  extends HibernateGenericDao<Child> implements GenericRepository<Child> {

	private static final long serialVersionUID = 787163050630518662L;

	@Override
	protected Class<Child> getDomainClass() {
		return Child.class;
	}

	public Response deleteChild(int id) {
		String hql = "DELETE u FROM " + Child.class.getName() + " u " +
                "WHERE u.id = :id";
        Query query =  getHibernateTemplate().getSessionFactory().getCurrentSession().createQuery(hql);
        query.setParameter("id",id);

        Response response = (Response) query.uniqueResult();

        return response;
	}

}
