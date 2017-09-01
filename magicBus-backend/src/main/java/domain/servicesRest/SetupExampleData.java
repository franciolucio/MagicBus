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
    	User user01 = new User("Lucio","Francioni",23,"Larrea 3180,Quilmes", -34.7430435, -58.25890429999998);
    	User user02 = new User("Emiliano","Mancuso",27,"Mitre 539,Quilmes", -34.719658 , -58.255364);
    	User user03 = new User("Leandro","Rivero",23,"Triunvirato 900,Quilmes",-34.738311 , -58.262582);
    	User user04 = new User("Ezequiel","Francioni",23,"Calle 114 646,Berazategui", -34.773081 , -58.249788);
    	User user05 = new User("Alan","Marino",23,"Calle 156 845,Berazategui", -34.752297 , -58.205647);
    	User user06 = new User("Nicolas","Ravaschino",24,"Jose de San Martin 691,Quilmes", -34.724384 , -58.25824);
    	userService.save(user01);
    	userService.save(user02);
    	userService.save(user03);
    	userService.save(user04);
    	userService.save(user05);
    	userService.save(user06);
    }
}