'use strict';

myApp.controller("EmployeeController", [
		'$scope',
		'$location',
		'$routeParams',
		'employeeService',
		'services',
		function($scope, $location, $routeParams, employeeService, services) {
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
					$scope.employee = {};
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

			/*
			 * $scope.deleteEmp = function(id) { // alert(id); var result =
			 * confirm("Are you sure ??"); if (result) {
			 * employeeService.deleteEmployee(id).then( function(response) { if
			 * (response) { alert("employee record of " + id + " is deleted..");
			 * $location.path('viewEmployee'); } }); }
			 */
			$scope.deleteEmp = function(idx) {
				/* alert(idx); */
				var id = $scope.employees[idx].empId;
				/* alert(id); */
				var result = confirm("Are you sure ??");
				if (result) {
					employeeService.deleteEmployee(id).then(
							function(response) {
								if (response) {
									$scope.employees.splice(idx, 1);
									alert("employee record  of " + id
											+ " is deleted..");
								}
							});
				}
			}

			$scope.getemployeeById = function(empid) {
				employeeService.getEmployeeById(empid).then(
						function(response) {
							$scope.employeeById = response.data;
							console.log("......fetch the data of employee "
									+ empid + "..............");
						});
			}
		} ]);