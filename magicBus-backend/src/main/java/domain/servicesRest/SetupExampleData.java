package domain.servicesRest;

import org.joda.time.LocalDate;
import org.springframework.transaction.annotation.Transactional;

import domain.Child;
import domain.Driver;
import domain.Parent;
import domain.Travel;
import domain.builders.ChildBuilder;
import domain.builders.ParentBuilder;
import domain.services.ChildService;
import domain.services.DriverService;
import domain.services.ParentService;
import domain.services.TravelService;


public class SetupExampleData {
	
	DriverService driverService;
	TravelService travelService;
	ChildService childService;
	ParentService parentService;
	   
    public SetupExampleData() {}

    public SetupExampleData(DriverService driverService,TravelService travelService,ChildService childService,ParentService parentService){
        this.driverService = driverService;
        this.travelService = travelService;
        this.childService = childService;
        this.parentService = parentService;
    } 
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Getters & Setters
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    public DriverService getDriverService() {
        return driverService;
    }
    
    public void setDriverService(DriverService driverService) {
        this.driverService = driverService;
    }
    
    public TravelService getTravelService() {
        return travelService;
    }
    
    public void setTravelService(TravelService travelService) {
        this.travelService = travelService;
    }
    
    public ParentService getParentService() {
        return parentService;
    }
    
    public void setParentService(ParentService parentService) {
        this.parentService = parentService;
    }
    
    public ChildService getChildService() {
        return childService;
    }
    
    public void setChildService(ChildService childService) {
        this.childService = childService;
    }
  
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Set Up
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    @Transactional
    public void init() throws Exception {
//    	Admin admin = new AdminBuilder().build();
//    	userService.save(admin);
    	Driver driver01 = new Driver("Lucio","Francioni",23,37878360,"Larrea 3180,Quilmes","franciolucio",42782277,1165532161,23524255);
    	driverService.save(driver01);
    	
    	Travel travel01 = new Travel("Quilmes",new LocalDate(2017,10,01),driver01,1);
    	Travel travel02 = new Travel("Bernal",new LocalDate(2017,9,23),driver01,2);
    	Travel travel03 = new Travel("Lanus",new LocalDate(2017,8,7),driver01,3);
    	travelService.save(travel01);
    	travelService.save(travel02);
    	travelService.save(travel03);
    	
    	Parent parent01 = new ParentBuilder().withName("Emiliano").withEmail("emiliano07.mp").withSurname("Mancuso").build(); 
    	Parent parent02 = new ParentBuilder().withName("Juan").build();
    	Parent parent03 = new ParentBuilder().withName("Pedro").build();
    	
    	Child childPadre01 = new ChildBuilder().withName("Martin").build();
    	parent01.addChild(childPadre01);
    	
    	parentService.save(parent01);
    	parentService.save(parent02);
    	parentService.save(parent03);
    	
    }
}