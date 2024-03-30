const express=require("express");
const locations=require('../controllers/locationController.js')
const restuarants=require('../controllers/restuarantController.js');
const mealTypes=require('../controllers/mealTypeController.js');
const Auth=require('../controllers/signUpControllers.js')
const  Menu=require('../controllers/menuControllers.js')
const route=express.Router();

// handling routes

route.get('/widget',Menu.getAllMenu);        // assignment no 5

route.get('/retuarants/:cityName',restuarants.getRestuarantsByCity)  // assignment no 5 

route.get('/locations',locations.getLocations);  //// Homepage - Get Location API
route.get('/restuarants',restuarants.getAllRestuarants); 
route.get('/res/:locID',restuarants.getRestuarantsByLocationId); // Homepage - Get Restaurant By Location API
route.get('/rest/:id',restuarants.getRestuarantsId); //  details-   get restuarants by id ID api
route.get('/mealtype',mealTypes.getAllMealTypes); // homepage -     get all meal type API
route.post('/signup',Auth.postSignUp);         // homepage - post signup API
route.post('/login',Auth.userLogin);          // homepage - post Login API
route.get('/Menu/:resId',Menu.getMenuById); //  Details - get menu by restuarant id


//filteres restuarants

route.post('/filteredRestuarant/',restuarants.filterRestuarants);  
module.exports=route;