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
    //similar to the :modeladdAttribute in spring    
    $scope.ninjas=[
        {
          name:"yoshi",
          belt:"green"
        },
        {
          name:"crystal",
          belt:"transparent"
        },
        {
            name:"crystol",
            belt:"transparent"
        },
        {
           name:"shaun",
           belt:"black"
        },
        {
           name:"the Ship",
           belt:"white"
        }
    ];
}]);
