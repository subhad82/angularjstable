myApp.controller('detailCtrl',['$scope','$state','$location',function($scope,$state,$location){
   
   console.log('yes india');
    

    
     $scope.IsVisible = false;
            $scope.ShowHide = function () {
                
                $scope.IsVisible = $scope.IsVisible ? false : true;
            }


     $scope.people = [
    {name:'Jon', join: "5/8/18 12:00 AM", id: '2AG6B7', status : 'active', section1:'1', section2 :'0' , section3 : '1' , section4 :'0' },
    {name:'Mike', join: "5/8/18 12:00 AM", id: 'K8F85K' ,status : 'active' , section1:'0', section2 :'0' , section3 : '1' , section4 :'0'},
     {name:'Jon', join: "5/8/18 12:00 AM", id: 'J80V67' ,status : 'active' , section1:'1', section2 :'0' , section3 : '0' , section4 :'0'},
    {name:'Mike', join: "5/8/18 12:00 AM", id: '789BHG' ,status : 'active' , section1:'1', section2 :'1' , section3 : '1' , section4 :'1'},
    {name:'Allen', join: "5/8/18 12:00 AM", id: 'J9G78N' ,status : 'active' , section1:'0', section2 :'1' , section3 : '1' , section4 :'0'}
    ];
    
  $scope.addPerson = function(){
    var person = {
        name: $scope.name,
        join: $scope.join,
        id: $scope.id,
        status : $scope.status,
        section1 : $scope.section1,
        section2 : $scope.section2,
        section3 : $scope.section3,
        section4 : $scope.section4,
        
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


