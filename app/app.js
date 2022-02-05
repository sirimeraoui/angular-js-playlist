//the variable will hold the module so it doesnt need to have the same name
//the [] will contain the dependecies
//all the application code is going reside within this module (we namespaced our app)
//this module is what will be controlling our application
var myNinjaApp = angular.module('myNinjaApp',[]);
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
//spring controller $scope == Model model
//put array brackets to protect the var $scope from minification
myNinjaApp.controller('NinjaController',['$scope',function($scope){
    $scope.removeNinja=function(ninja){
        var removedNninja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNninja,1);
    };
    //similar to the :modeladdAttribute in spring    
    $scope.ninjas=[
        {
          name:"yoshi",
          belt:"green",
          rate:50,
          available:true
        },
        {
          name:"crystal",
          belt:"transparent",
          rate:30,
          available:true
        },
        {
            name:"crystol",
            belt:"transparent",
            rate:40,
            available:false
        },
        {
           name:"shaun",
           belt:"black",
           rate:45,
           available:true
        },
        {
           name:"the Ship",
           belt:"white",
           rate:70,
           available:true

        }
    ];
}]);
