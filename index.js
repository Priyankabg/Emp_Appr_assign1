
var app = angular.module("mainApp",[]); //we have node dependencies here [] indicate it

//binding the controller
app.controller("CRUDController", function($scope){

   
   $scope.EmpList=[] ;  // emplt array of employees

   $scope.AddData = function(){    // add data to the tale or array

       var emp = {   // complete object

           Id:$scope.EmpList.length + 1,
           Name:$scope.Name,
           Salary:$scope.Salary,
           Position:$scope.Position,
           Phone:$scope.Phone

       };

       
       $scope.EmpList.push(emp);   // push the emp object to the array
       ClearModel();   // this will reset all the values to default

   };

   //function to delete the data

   $scope.DeleteData = function(emp){
    
       var index=$scope.EmpList.indexOf(emp);  // what index we want to delete in the array

       $scope.EmpList.splice(index,1);  // Delete only one index (if i give 2 that index and the next index will be deleted whi ch we don't want) 

   }

   // function to bind data to the input feilds

   $scope.BindSelectedData = function(emp){

       $scope.Id=emp.Id;
       $scope.Name=emp.Name;
       $scope.Salary=emp.Salary;
       $scope.Position=emp.Position;
       $scope.Phone=emp.Phone;
   };

   
   function ClearModel(){
       
       $scope.Id=0;
       $scope.Name='';
       $scope.Salary=null;
       $scope.Position='';
       $scope.Phone=null;
   }
   
   $scope.UpdateData = function(){
       $f.grep($scope.EmpList,function(e){

           if(e.Id == $scope.Id)

           {
               e.Name=$scope.Name;
               e.Salary=$scope.Salary;
               e.Position=$scope.Position;
               e.Phone=$scope.Phone;
           }
                   
       });

   };

});
