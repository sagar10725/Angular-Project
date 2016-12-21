'use strict';
myApp.controller("UpdateController", function($scope, $location, services,
		employeeService) {
	var employees = services.getEmployee();
	// console.log(employees);
	$scope.employee = employees;

	$scope.updateEmployee = function() {
		var emps = $scope.emp;
		employeeService.updateEmp($scope.emp).then(function(response) {
			console.log("Update employee record successfully....");
			$location.path('/viewEmployee');
		});
	}
});