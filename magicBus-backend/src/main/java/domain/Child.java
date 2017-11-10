package domain;


public class Child extends User{

	private static final long serialVersionUID = 8538030915424631793L;
	
	public String prepaidMedicine;
	public double latitude;
	public double longitude;
	public boolean enabled;
	public boolean confirm;

	public Child() {}
	public Child(String name,String surname,int age,int document,String address,String email,int telephone,int celphone,String pregnancyMedicine,double latitude,double longitude){
		super(name,surname,age,document,address,email,telephone,celphone,3);
		this.prepaidMedicine = pregnancyMedicine;
		this.latitude = latitude;
		this.longitude = longitude;
		this.enabled = true;
		this.confirm = false;
	}
	public boolean isConfirm() {
		return confirm;
	}
	public void setConfirm(boolean confirm) {
		this.confirm = confirm;
	}
	public boolean isEnabled() {
		return enabled;
	}
	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
	public String getPrepaidMedicine() {
		return prepaidMedicine;
	}
	public void setPrepaidMedicine(String prepaidMedicine) {
		this.prepaidMedicine = prepaidMedicine;
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
