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
        ,
         resolve : {
            "check": function($state , $rootScope){
                if($rootScope.loggedIn){
                    $state.go('detail');
                }
            }
        }
        
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
    })
    
    .state('logout',{
        url:'/logout',
        templateUrl: 'app/templates/logout.html',
          resolve : {
            "check": function($state , $rootScope){
                if(!$rootScope.loggedIn){
                    $state.go('home');
                }
            }
        }
    })
        .state('members',{
        url:'/members',
        templateUrl: 'app/templates/members.html',
          resolve : {
            "check": function($state , $rootScope){
                if(!$rootScope.loggedIn){
                    $state.go('home');
                }
            }
        }
    })
        .state('products',{
        url:'/products',
        templateUrl: 'app/templates/products.html',
          resolve : {
            "check": function($state , $rootScope){
                if(!$rootScope.loggedIn){
                    $state.go('home');
                }
            }
        }
    })
        .state('reporting',{
        url:'/reporting',
        templateUrl: 'app/templates/reporting.html',
          resolve : {
            "check": function($state , $rootScope){
                if(!$rootScope.loggedIn){
                    $state.go('home');
                }
            }
        }
    }) 
        .state('users',{
        url:'/users',
        templateUrl: 'app/templates/users.html',
          resolve : {
            "check": function($state , $rootScope){
                if(!$rootScope.loggedIn){
                    $state.go('home');
                }
            }
        }
    })
        .state('admin',{
        url:'/admin',
        templateUrl: 'app/templates/admin.html',
        
        resolve : {
            "check": function($state , $rootScope){
                if(!$rootScope.loggedIn){
                    $state.go('home');
                }
            }
        }
    })
    
    
    ;
});