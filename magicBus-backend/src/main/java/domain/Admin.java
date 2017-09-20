package domain;

public class Admin extends User{

	private static final long serialVersionUID = -747045332297400687L;
	
	public Admin(){}
	public Admin(String name,String surname,int age,int document,String address,String email,int telephone,int celphone){
		super(name,surname,age,document,address,email,telephone,celphone);
	}

}
