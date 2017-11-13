(function() {
 'use strict';

    angular.module('mainControllers', ['mainServices'])
    .controller('mainCtrl', function($scope,getData,$mdDialog,$state) {


      $scope.shortType = "id";
      $scope.shortOrder = false;
        
      $scope.employees = getData.getEmployees();
      console.log($scope.employees);

      $scope.itemsPerPage = 3;
      $scope.page = 1;
      $scope.totalItems = $scope.employees;

      $scope.pageChanged = function() {
        var startPos = ($scope.page - 1) * $scope.itemsPerPage;
      };

      /*$scope.searchTxt   = '';
      $scope.keyupFilter = function(val){
            $scope.searchTxt = val; 
      };*/
       
      
      $scope.editEmployee = function(id){
        let empData = $scope.employees.find(o => o.id === id);
        //console.log(empData);
         
          $scope.showHints = true;          
          $mdDialog.show({
              templateUrl: 'views/edit.html',
              controller: editEmpUser,              
              locals: {userData:empData,id:id},              
              parent: angular.element(document.body),
              bindToController: true,
              clickOutsideToClose: true,
              escapeToClose: true
          });
          function editEmpUser($scope, $mdDialog,userData,id){
              $scope.closeDialog = function() {
                  $mdDialog.hide();
              }
              $scope.firstName = userData.firstName;
              $scope.lastName = userData.lastName;    
              $scope.age =  userData.age;   
              $scope.employer =  userData.employer;
              $scope.location =  userData.location;
              var jDate = userData.joiningDate;
              var jDateArr = jDate.split("-");
              var joinDate = new Date(jDateArr["1"] + '/' + jDateArr["0"] + '/' + jDateArr["2"]);
               $scope.joiningDate = (joinDate.getMonth() + 1)+ '/' + joinDate.getDate()  + '/' +  joinDate.getFullYear();
               $scope.uid = id;

              $scope.updateEmployee = function(id){
                  var jDate = new Date($scope.joiningDate);
                  var empDate= {'firstName':$scope.firstName,'lastName':$scope.lastName,'age':$scope.age,'employer':$scope.employer,'joiningDate':  ('0' + jDate.getDate()).slice(-2) +'-'+ ('0' + (jDate.getMonth()+1)).slice(-2) + '-' +  jDate.getFullYear(),'location':$scope.location};
                  console.log(empDate);
                  $mdDialog.hide();
                     
              }
          }
          

      };
      $scope.deleteEmployee = function (id) {
          var confirm = $mdDialog.confirm({
              parent: angular.element(document.body),
              bindToController: true,
              clickOutsideToClose: true,
              escapeToClose: true
          })
          .title("Would you like to delete this record?")
          .ok('Yes')
          .cancel('Cancel');

          $mdDialog.show(confirm).then(function() {
              let delData = $scope.employees.find(o => o.id === id);
              $scope.status = delData;
              console.log($scope.status);
          }, function() {
              $scope.status = 'You decided to keep your record.';
              console.log($scope.status);
          });  
      };

    });

})();
