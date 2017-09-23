package domain.repositories;

import domain.Child;

public class ChildRepository  extends HibernateGenericDao<Child> implements GenericRepository<Child> {

	private static final long serialVersionUID = 787163050630518662L;

	@Override
	protected Class<Child> getDomainClass() {
		return Child.class;
	}

}
