package domain;

import java.util.List;

public class Parent extends User{

	private static final long serialVersionUID = -5906442839194574683L;
	
	public boolean activate;
	public List<Child> childs;

	public Parent(){}
	public Parent(String name,String surname,int age,int document,String address,String email,int telephone,int celphone,List<Child> childs){
		super(name,surname,age,document,address,email,telephone,celphone,2);
		this.childs = childs;
		this.activate = false;
	}
	
	public void addChild(Child child){
		this.childs.add(child);
	}
}
