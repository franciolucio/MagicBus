package domain;

public class Child extends User{

	private static final long serialVersionUID = 8538030915424631793L;
	
	public String pregnancyMedicine;
	public double latitude;
	public double longitude;
	public boolean enabled;

	public Child() {}
	public Child(String name,String surname,int age,int document,String address,String email,int telephone,int celphone,String pregnancyMedicine,double latitude,double longitude){
		super(name,surname,age,document,address,email,telephone,celphone);
		this.pregnancyMedicine = pregnancyMedicine;
		this.latitude = latitude;
		this.longitude = longitude;
		this.enabled = true;
	}
	public boolean isEnabled() {
		return enabled;
	}
	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
	public String getPregnancyMedicine() {
		return pregnancyMedicine;
	}
	public void setPregnancyMedicine(String pregnancyMedicine) {
		this.pregnancyMedicine = pregnancyMedicine;
	}
	public double getLatitude() {
		return latitude;
	}
	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}
	public double getLongitude() {
		return longitude;
	}
	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}
}
