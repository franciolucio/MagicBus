package domain.servicesRest;

import org.springframework.transaction.annotation.Transactional;

import domain.Driver;
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
//    	Admin admin = new AdminBuilder().build();
//    	userService.save(admin);
    	Driver driver01 = new Driver("Lucio","Francioni",23,37878360,"Larrea 3180,Quilmes","franciolucio@gmail.com",42782277,1165532161,23524255);
    	driverService.save(driver01);
    }
}