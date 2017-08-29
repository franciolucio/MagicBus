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
    	User user01 = new User("Lucio","Francioni",23,"Larrea 3180,Quilmes");
    	User user02 = new User("Emiliano","Mancuso",27,"Mitre,Quilmes");
    	User user03 = new User("Leandro","Rivero",23,"Triunvirato 900,Quilmes");
    	User user04 = new User("Ezequiel","Francioni",23,"Calle 114 646,Berazategui");
    	User user05 = new User("Alan","Marino",23,"Calle 156 845,Berazategui");
    	User user06 = new User("Nicolas","Ravaschino",24,"José de San Martín 691,Quilmes");
    	userService.save(user01);
    	userService.save(user02);
    	userService.save(user03);
    	userService.save(user04);
    	userService.save(user05);
    	userService.save(user06);
    }
}