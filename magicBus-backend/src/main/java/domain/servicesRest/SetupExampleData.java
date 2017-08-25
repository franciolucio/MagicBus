package domain.servicesRest;

import org.springframework.transaction.annotation.Transactional;

import domain.User;
import domain.services.UserService;


public class SetupExampleData {
    
	
	UserService userService;
   
    public SetupExampleData() {}

    public SetupExampleData(UserService userService){
        this.userService = userService;
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
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Set Up
    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Transactional
    public void init() throws Exception {
    	User user = new User("Lucio","Francioni",23,"Larrea 3180 Quilmes");
    	userService.save(user);
    }
}