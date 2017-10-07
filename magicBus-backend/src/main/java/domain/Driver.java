package domain;


public class Driver extends User{

	public static final long serialVersionUID = 1251078116872517611L;
	
	public int license;
	
	public Driver() {}
	public Driver(String name,String surname,int age,int document,String address,String email,int telephone,int celphone,int license){
		super(name,surname,age,document,address,email,telephone,celphone);
		this.license = license;
	}
	public void setLicense(int license) {
		this.license = license;
	}
	public int getLicense() {
		return license;
	}
}