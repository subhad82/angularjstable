myApp.controller('detailCtrl',['$scope','$http',function($scope,$http){
   
   console.log('yes india');
    

    
    


     $scope.people = [
    {name:'Jon', join: "9/10/17", title: 'Developer'},
    {name:'Mike', join: "9/10/17", title: 'Manager'},{name:'Jon', join: "9/10/17", title: 'Developer'},
    {name:'Mike', join: "9/10/17", title: 'Manager'},
    {name:'Allen', join: "9/10/17", title: 'CEO'}
    ];
    
  $scope.addPerson = function(){
    var person = {
        name: $scope.name,
        age: $scope.join,
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