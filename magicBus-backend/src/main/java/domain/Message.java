package domain;

public class Message extends Entity{

	private static final long serialVersionUID = -4581469551438031345L;
	private String fromUser;
	private String content;

	public Message(){}
    public Message(String fromUser, String content){
    	this.fromUser = fromUser;
        this.content = content;
    }
	
	public String getContent(){
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
    
    public String getFromUser() {
        return fromUser;
    }

    public void setFromUser(String user) {
        this.fromUser = user;
    }
 }