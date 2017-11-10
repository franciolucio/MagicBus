package domain.repositories;

import domain.Message;

public class MessageRepository extends HibernateGenericDao<Message> implements GenericRepository<Message> {

		private static final long serialVersionUID = 787163050630518662L;

		@Override
		protected Class<Message> getDomainClass() {
			return Message.class;
		}
	}
