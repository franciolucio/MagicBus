package domain.repositories;

import domain.Driver;

public class DriverRepository  extends HibernateGenericDao<Driver> implements GenericRepository<Driver> {

	private static final long serialVersionUID = 4077798780803361296L;

	@Override
	protected Class<Driver> getDomainClass() {
		return Driver.class;
	}
}