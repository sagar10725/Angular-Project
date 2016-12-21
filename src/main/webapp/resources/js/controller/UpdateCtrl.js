'use strict';
myApp.controller("UpdateController", [ '$scope', '$location', 'services',
		'employeeService',
		function($scope, $location, services, employeeService) {

			$scope.updateEmployee = function(emp) {
				/* console.log(emp); */
				employeeService.updateEmp(emp).then(function(response) {
					console.log("Update employee record successfully....");
					alert("update employee record successfully...");
					$location.path('/viewEmployee');
				});
			}

			var employees = services.getEmployee();
			// console.log(employees);
			$scope.employee = employees;

		} ]);