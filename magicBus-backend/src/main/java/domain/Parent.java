package domain;

public class Parent extends User{


	private static final long serialVersionUID = -5906442839194574683L;
	
	public boolean activate;

	public Parent(){}
	public Parent(String name,String surname,int age,int document,String address,String email,int telephone,int celphone){
		super(name,surname,age,document,address,email,telephone,celphone);
		this.activate = false;
	}
}
