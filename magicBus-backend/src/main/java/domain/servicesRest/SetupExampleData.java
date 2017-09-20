package domain.servicesRest;

import org.springframework.transaction.annotation.Transactional;

import domain.Driver;
import domain.User;
import domain.services.DriverService;
import domain.services.UserService;


public class SetupExampleData {
	
	UserService userService;
	DriverService driverService;
	   
    public SetupExampleData() {}

    public SetupExampleData(UserService userService, DriverService driverService){
        this.userService = userService;
        this.driverService = driverService;
    }
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Getters & Setters
    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    public UserService getUserService() {
        return userService;
    }
    
    public void setUserService(UserService userService) {
        this.userService = userService;
    }
    
    public DriverService getDriverService() {
        return driverService;
    }
    
    public void setDriverService(DriverService driverService) {
        this.driverService = driverService;
    }
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Set Up
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    @Transactional
    public void init() throws Exception {
    	User user01 = new User("Lucio","Francioni",23,"Larrea 3180,Quilmes", -34.7430435, -58.25890429999998,"images/lucio.ico","");
    	User user02 = new User("Emiliano","Mancuso",27,"Mitre 539,Quilmes", -34.719658 , -58.255364,"images/emiliano.ico","");
    	User user03 = new User("Leandro","Rivero",23,"Triunvirato 900,Quilmes",-34.738311 , -58.262582,"images/leandro.ico","");
    	User user04 = new User("Ezequiel","Francioni",23,"Calle 114 646,Berazategui", -34.773081 , -58.249788,"images/ezequiel.ico","");
    	User user05 = new User("Alan","Marino",23,"Calle 156 845,Berazategui", -34.752297 , -58.205647,"images/alan.ico","");
    	User user06 = new User("Nicolas","Ravaschino",24,"Jose de San Martin 691,Quilmes", -34.724384 , -58.25824,"images/nicolas.ico","");
    	userService.save(user01);
    	userService.save(user02);
    	userService.save(user03);
    	userService.save(user04);
    	userService.save(user05);
    	userService.save(user06);
    	
    	Driver driver01 = new Driver("Nicolas","Morandi", 34828361);
    	driverService.save(driver01);
    }
}