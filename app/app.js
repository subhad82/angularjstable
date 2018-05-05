var myApp = angular
.module("myApp",['ngCookies',"ui.router"])

.config(function($stateProvider,$urlRouterProvider,$locationProvider){
//    	 $locationProvider.hashPrefix('');
     	$urlRouterProvider
              .otherwise('/home');  
    $stateProvider
        .state('home',{
        url:'/home',
        templateUrl: 'app/templates/home.html',
        controller:'HomeCtrl'
    })
        .state('detail',{
        url:'/detail',
        templateUrl: 'app/templates/detail.html',
         controller:'detailCtrl',
        resolve : {
            "check": function($state , $rootScope){
                if(!$rootScope.loggedIn){
                    $state.go('home');
                }
            }
        }
    });
});