'use strict';
myApp.controller("SalaryCalcController", [ '$scope', 'employeeService',
		'services', function($scope, employeeService, services) {

			$scope.getSalary = function() {
				var employees = services.getEmployee();
				alert(">>>>>>>>.....>>>>>>>>");
				$scope.employeeById = employees;
			}
		} ]);