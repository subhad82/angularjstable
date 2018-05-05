myApp.controller('HomeCtrl',['$scope','$state','$rootScope',function($scope , $state , $rootScope){
//    helper.showAlert();
 
    
    
//    myApp.run(function($rootScope, $location, $state, LoginService) {
//    $rootScope.$on('$stateChangeStart', 
//      function(event, toState, toParams, fromState, fromParams){ 
//          console.log('Changed state to: ' + toState);
//      });
//    
//      if(!LoginService.isAuthenticated()) {
//        $state.transitionTo('detail');
//      }
//  });
//    
    
     $scope.submit = function(){
         
        
         
         if ($scope.username == 'admin'  && $scope.password == 'admin'){
              $rootScope.loggedIn = true;
              
             $state.go('detail');
         } else {
             alert('Hint:- username: admin ; Password :admin');
         }
     }
    
    
//      myApp.factory('LoginService', function() {
//    var admin = 'admin';
//    var pass = 'pass';
//    var isAuthenticated = false;
//    
//    return {
//      login : function(username, password) {
//        isAuthenticated = username === admin && password === pass;
//        return isAuthenticated;
//      },
//      isAuthenticated : function() {
//        return isAuthenticated;
//      }
//    };
//    
//  });
//    
}]);