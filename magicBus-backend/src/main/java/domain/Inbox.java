package domain;

import java.util.ArrayList;
import java.util.List;

public class Inbox extends Entity{
	
	private static final long serialVersionUID = -7439022905365077166L;
	public List<Message> messagesReceived;
	public List<Message> messagesSent;
	
	public Inbox() {
		this.messagesReceived = new ArrayList<Message>();
		this.messagesSent = new ArrayList<Message>();
	}
	

}
