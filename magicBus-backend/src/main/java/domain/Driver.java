package domain;



public class Driver extends User{

	public static final long serialVersionUID = 1251078116872517611L;
	
	public int license;
	public boolean enabled;
	public double latitude;
	public double longitude;
	
	public Driver() {}
	public Driver(String name,String surname,int age,int document,String address,String email,int telephone,int celphone,int license,double latitude,double longitude){
		super(name,surname,age,document,address,email,telephone,celphone,1,new Inbox());
		this.license = license;
		this.latitude = latitude;
		this.longitude = longitude;
		this.enabled = true;
	}
	public void setLicense(int license) {
		this.license = license;
	}
	public int getLicense() {
		return license;
	}
}