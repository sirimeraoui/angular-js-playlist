//the variable will hold the module so it doesnt need to have the same name
//the [] will contain the dependecies
//all the application code is going reside within this module (we namespaced our app)


//this module is what will be controlling our application
var myNinjaApp = angular.module('myNinjaApp',['ngRoute','ngAnimate']);
//what comes after happens happens whitin the module var above:

//before app runs
myNinjaApp.config(['$routeProvider',function($routeProvider){
    //here goes preparations before the app runs routing
$routeProvider
     .when('/home',{
         templateUrl: 'views/home.html',
         controller: 'NinjaController',
     })
     .when('/directory',{
         templateUrl: 'views/directory.html',
         controller: 'NinjaController',
     })
     .otherwise({
         redirectTo:'/home'
     })
}]);

//as app runs
myNinjaApp.run(function(){
    //this function fires as the application runs
});

myNinjaApp.directive("randomNinja",[function(){

    return {
        restrict : 'E', //or A
        scope: {
            ninjas: '=',
            title:'='
        },
        templateUrl : "views/random.html",
        transclude: true,
        replace:true,
        //template: "{{title}}", 
        //template:'<img ng-src="{{ninjas[random].thumb}}"/>',
        controller: function($scope){
            $scope.random = Math.floor(Math.random()*5);
        },
    }
}]);
//controllers' declaration
//spring controller $scope == Model model
//put array brackets to protect the var $scope from minification
myNinjaApp.controller('NinjaController',['$scope','$http',function($scope,$http){
    $scope.addNinja = function(){
         $scope.ninjas.push({
             name : $scope.newNinja.name,
             belt : $scope.newNinja.belt,
             rate : parseInt($scope.newNinja.rate),
             available: true
         });

        $scope.newNinja.name = "";
        $scope.newNinja.belt = "";
        $scope.newNinja.rate = "";
    };
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
          available:true,
          thumb:"content/img/yoshi.png"
        },
        {
          name:"crystal",
          belt:"transparent",
          rate:30,
          available:true,
          thumb:"content/img/yoshi.png"
        },
        {
            name:"crystol",
            belt:"transparent",
            rate:40,
            available:false,
            thumb:"content/img/yoshi.png"
        },
        {
           name:"shaun",
           belt:"black",
           rate:45,
           available:true,
           thumb:"content/img/yoshi.png"
        },
        {
           name:"the Ship",
           belt:"white",
           rate:70,
           available:true,
           thumb:"content/img/yoshi.png"
        }
    ];
    //directive

//needs a python or node server to work
  /*  $http.get('/data/ninjas.json').success(function(data){
        $scope.ninjas=data;
    })*/

   // console.log(angular.toJson($scope.ninjas));
}]);
