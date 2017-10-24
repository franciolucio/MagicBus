package domain;

import java.util.List;

public class Developer extends User{

	private static final long serialVersionUID = 2464213077293180287L;
	
	public boolean activate;
	public List<Child> childs;
	
	public Developer(){}
	public Developer(String name,String surname,int age,int document,String address,String email,int telephone,int celphone,List<Child> childs){
		super(name,surname,age,document,address,email,telephone,celphone,5);
		this.childs = childs;
		this.activate = false;
	}
	
	public void addChild(Child child){
		this.childs.add(child);
	}

}
