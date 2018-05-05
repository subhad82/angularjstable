myApp.controller('detailCtrl',['$scope','$state','$location',function($scope,$state,$location){
   
   console.log('yes india');
    

    
     $scope.IsVisible = false;
            $scope.ShowHide = function () {
                
                $scope.IsVisible = $scope.IsVisible ? false : true;
            }


     $scope.people = [
    {name:'Jon', join: "5/8/18 12:00 AM", title: 'Developer'},
    {name:'Mike', join: "5/8/18 12:00 AM", title: 'Manager'},{name:'Jon', join: "5/8/18 12:00 AM", title: 'Developer'},
    {name:'Mike', join: "5/8/18 12:00 AM", title: 'Manager'},
    {name:'Allen', join: "5/8/18 12:00 AM", title: 'CEO'}
    ];
    
  $scope.addPerson = function(){
    var person = {
        name: $scope.name,
        join: $scope.join,
        title: $scope.title,
    };
    
    $scope.people.push(person);
  };
   
   $scope.removePerson = function(index){
    $scope.people.splice(index, 1);
   }; 
    
   $scope.openEdit = function(index) {
    $scope.selectedIndex = index;
    $scope.selectedItem = angular.copy($scope.people[index]);
  };

  $scope.saveItem = function() {
    console.log($scope.selectedItem);
    $scope.people[$scope.selectedIndex] = $scope.selectedItem;
      close();
  };
    
    
  
  
    
}]);


