package domain.servicesRest;

import org.joda.time.LocalDate;
import org.joda.time.LocalTime;
import org.springframework.transaction.annotation.Transactional;

import domain.Child;
import domain.Driver;
import domain.Parent;
import domain.Travel;
import domain.TravelOccasional;
import domain.builders.ChildBuilder;
import domain.builders.ParentBuilder;
import domain.services.ChildService;
import domain.services.DriverService;
import domain.services.ParentService;
import domain.services.TravelOccasionalService;


public class SetupExampleData {
	
	DriverService driverService;
	TravelOccasionalService travelOccasionalService;
	ChildService childService;
	ParentService parentService;
	   
    public SetupExampleData() {}

    public SetupExampleData(DriverService driverService,TravelOccasionalService travelOccasionalService,ChildService childService,ParentService parentService){
        this.driverService = driverService;
        this.travelOccasionalService = travelOccasionalService;
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
    
    public TravelOccasionalService getTravelService() {
        return travelOccasionalService;
    }
    
    public void setTravelService(TravelOccasionalService travelService) {
        this.travelOccasionalService = travelService;
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
    	Driver driver01 = new Driver("Ezequiel","Francioni",23,38123456,"Laprida 2965, Quilmes","ezefrancioni",42782277,1165532161,23524255);
    	Driver driver02 = new Driver("Roman","Francioni",23,37984165,"Lafinur 125, Quilmes","romaneloriginal",42782277,1165532161,23524255);
    	Driver driver03 = new Driver("Lucio","Francioni",23,37878360,"Larrea 3180, Quilmes","franciolucio",42782277,1165532161,23524255);
    	driverService.save(driver01);
    	driverService.save(driver02);
    	driverService.save(driver03);
    	
    	Parent parent01 = new ParentBuilder()	.withName("Emiliano")
    											.withEmail("emiliano07.mp")
    											.withSurname("Mancuso")
    											.withDocument(34828361)
    											.withAge(27)
    											.withAddress("Mitre 530, Quilmes")
    											.withCelphone(1164989552)
    											.withTelephone(42545122)
    											.build(); 
    	Parent parent02 = new ParentBuilder()	.withName("Lucio")
												.withEmail("franciolucio")
												.withSurname("Francioni")
												.withAge(24)
    											.withDocument(37528361)
												.withAddress("Larrea 3000, Quilmes")
												.withCelphone(1164989888)
												.withTelephone(45254455)
												.build(); 
    	Parent parent03 = new ParentBuilder()	.withName("Pedro")
    											.withEmail("pedrito")
    											.withSurname("Gonzalez")
    											.withDocument(3798551)
    											.withAge(30)
    											.withAddress("Videla 1022, Quilmes")
    											.withCelphone(1164987188)
    											.withTelephone(45874455)
    											.build();
    	Parent parent04 = new ParentBuilder()	.withName("Laura")
												.withEmail("lauraN1")
												.withSurname("Garcia")
												.withDocument(2298551)
												.withAge(39)
												.withAddress("Alem 621, Quilmes")
												.withCelphone(1164987188)
												.withTelephone(45874455)
												.build();
    	
    	Child child01 = new ChildBuilder()	.withName("Martin")
    										.withEmail("martincito")
    										.withSurname("Diano")
    										.withDocument(2298551)
    										.withAge(39)
    										.withAddress("Saavedra 621, Quilmes, Buenos Aires, Argentina")
    										.withLatitude(-34.7129507)
    										.withLongitude(-58.255657799999994)
    										.withCelphone(1164987188)
    										.withTelephone(45874455)
    										.withPregnancyMedicine("OSDE")
    										.build();
    	Child child02 = new ChildBuilder().withName("Thiago").withSurname("Motta").withAddress("Av. Dardo Rocha 1564, Bernal Oeste, Buenos Aires, Argentina").withLongitude(-58.307777499999986).withLatitude(-34.7112367).build();
    	Child child03 = new ChildBuilder().withName("Bianca").withSurname("De Francioni").withAddress("Zapiola 342, Bernal, Buenos Aires, Argentina").withLongitude(-58.28179290000003).withLatitude(-34.7154487).build();
    	Child child04 = new ChildBuilder().withName("Lionel").withAddress("Larrea 3180, Quilmes, Buenos Aires, Argentina").withSurname("Messi").withLongitude(-58.258892100000025).withLatitude(-34.7430589).build();
    	Child child05 = new ChildBuilder().withName("Gabriel Omar").withSurname("Batistuta").withAddress("Avenida Mitre 511, Quilmes, Buenos Aires, Argentina").withLongitude(-58.2556797).withLatitude(-34.7194653).build();
    	Child child06 = new ChildBuilder().withName("Juan").withSurname("Mercier").withAddress("José de San Martín 675, Quilmes, Buenos Aires, Argentina").withLongitude(-58.25842490000002).withLatitude(-34.7242231).build();
    	parent01.addChild(child01);
    	parent01.addChild(child02);
    	parent01.addChild(child03);
    	
    	parent02.addChild(child04);
    	parent02.addChild(child05);
    	parent02.addChild(child06);
    	
    	parent01.activate = true;
    	parent02.activate = true;
    	
    	parentService.save(parent01);
    	parentService.save(parent02);
    	parentService.save(parent03);
    	parentService.save(parent04);
    	
    	LocalDate fechaTravel01 = LocalDate.now().withDayOfMonth(01).withMonthOfYear(10).withYear(2017);
    	LocalDate fechaTravel02 = LocalDate.now().withDayOfMonth(23).withMonthOfYear(9).withYear(2017);
    	LocalDate fechaTravel03 = LocalDate.now().withDayOfMonth(17).withMonthOfYear(12).withYear(2017);
    			
    	TravelOccasional travel01 = new TravelOccasional("San Jose", "Mitre 400, Quilmes", fechaTravel01,driver01,new LocalTime());
    	TravelOccasional travel02 = new TravelOccasional("Chaparral", "Roque Saenz Peña 150,Bernal",fechaTravel02,driver02,new LocalTime());
    	TravelOccasional travel03 = new TravelOccasional("Lanus HighSchool", "Calle Falsa 123, Lanus",fechaTravel03,driver03,new LocalTime());
    	TravelOccasional travel04 = new TravelOccasional("Lanus HighSchool", "Calle Falsa 123, Lanus",new LocalDate(),driver03,new LocalTime());
    	travel01.addChild(child01.getId());
    	travel02.addChild(child02.getId());
    	travel03.addChild(child04.getId());
    	travel03.addChild(child05.getId());
    	travel03.addChild(child06.getId());
    	
    	travel04.addChild(child03.getId());
    	travel04.addChild(child01.getId());
    	travelOccasionalService.save(travel01);
    	travelOccasionalService.save(travel02);
    	travelOccasionalService.save(travel03);
    	travelOccasionalService.save(travel04);
    }
}