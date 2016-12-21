'use strict';

myApp.controller("EmployeeController", [ '$scope', '$location',
		'employeeService', 'services',
		function($scope, $location, employeeService, services) {
			/*
			 * $scope.serverTime = {};
			 * employeeService.getTime().then(function(response) {
			 * $scope.serverTime = response.data; });
			 */
			$scope.addEmployee = function() {
				var emp = $scope.employee;
				console.log("Adding Employee records ..........");
				employeeService.addEmp(emp).then(function(response) {
					console.log("********* Add employee success *********");
					alert("Add employee records successfully...");
				});
			}

			$scope.getDepartment = function() {
				employeeService.getAllDepartment().then(function(response) {
					$scope.departments = response.data;
					console.log(response.data);
				});
			}

			$scope.getEmployee = function() {
				employeeService.getAllEmployee().then(function(response) {
					$scope.employees = response.data;
					console.log(response.data);
				});
			}

			$scope.editEmp = function(emp) {
				var id = emp.empId;
				services.addEmployee(emp);
				$location.path('edit/' + id);
			}
		} ]);