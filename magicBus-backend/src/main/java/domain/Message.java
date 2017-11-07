package domain;

import java.util.List;

public class Message extends Entity{

	private static final long serialVersionUID = -4581469551438031345L;
	private User receiver;
	private List<User> senders;
	private String content;

    public Message(List<User> senders, User receiver, String content){
        this.senders = senders;
        this.receiver = receiver;
        this.content = content;
    }

    public Message(){}

    public String getContent(){
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
    
    public User getReceiver() {
        return receiver;
    }

    public void setReceiver(User receiver) {
        this.receiver = receiver;
    }

    public List<User> getSenders() {
        return senders;
    }
    public void setSenders(List<User> senders) {
        this.senders = senders;
    }
 }
