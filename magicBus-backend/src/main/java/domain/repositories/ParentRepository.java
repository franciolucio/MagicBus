package domain.repositories;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;

import domain.Parent;

public class ParentRepository extends HibernateGenericDao<Parent> implements GenericRepository<Parent> {

	private static final long serialVersionUID = -4975459489317953066L;

	@Override
	protected Class<Parent> getDomainClass() {
		return Parent.class;
	}
	
	@SuppressWarnings("unchecked")
	public <E> List<Parent> findRegisteredParents() {
		Query q = getHibernateTemplate().getSessionFactory().getCurrentSession().createQuery("from Parent");
		List<Parent> registeredParents = new ArrayList<>();
		List<Parent> allParents = q.list();
		for(Parent p : allParents){
			if(p.activate == true)
				registeredParents.add(p);
			}
		return registeredParents;
	}

	@SuppressWarnings("unchecked")
	public <E> List<Parent> findPendingParents() {
		Query q = getHibernateTemplate().getSessionFactory().getCurrentSession().createQuery("from Parent");
		List<Parent> pendingParents = new ArrayList<>();
		List<Parent> allParents = q.list();
		for(Parent p : allParents){
			if(p.activate == false)
				pendingParents.add(p);
			}
		return pendingParents;
	}
}
