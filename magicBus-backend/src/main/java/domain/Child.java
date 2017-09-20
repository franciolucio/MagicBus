package domain;

public class Child extends User{

	private static final long serialVersionUID = 8538030915424631793L;
	
	public String pregnancyMedicine;
	public double latitude;
	public double longitude;

	public Child() {}
	public Child(String name,String surname,int age,int document,String address,String email,int telephone,int celphone,String pregnancyMedicine,double latitude,double longitude){
		super(name,surname,age,document,address,email,telephone,celphone);
		this.pregnancyMedicine = pregnancyMedicine;
		this.latitude = latitude;
		this.longitude = longitude;
	}

}
