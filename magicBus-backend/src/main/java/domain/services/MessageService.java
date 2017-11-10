package domain.services;

import org.springframework.transaction.annotation.Transactional;

import domain.Message;
import domain.repositories.MessageRepository;

public class MessageService extends GenericService<Message>{

	private static final long serialVersionUID = 7388405495111949457L;
	
	private MessageRepository messageRepository;

	public MessageService() {}

	public MessageService(MessageRepository messageRepository) {
		this.messageRepository = messageRepository;
	}

	public MessageRepository getMessageRepository() {
		return messageRepository;
	}

	public void setMessageRepository(MessageRepository messageRepository) {
		this.messageRepository = messageRepository;
	}

	@Transactional
	public void saveChild(Message message) {
		getMessageRepository().saveOrUpdate(message);
	}
}