//the variable will hold the module so it doesnt need to have the same name
//the [] will contain the dependecies
//all the application code is going reside within this module (we namespaced our app)
//this module is what will be controlling our application
var myNinjaApp = anguar.module('myNinjaApp',[]);
//what comes after happens happens whitin the module var above:

//before app runs
myNinjaApp.config(function(){
    //here goes preparations before the app runs
});

//as app runs
myNinjaApp.run(function(){
    //this function fires as the application runs
});

//controllers' declaration
myNinjaApp.controller
