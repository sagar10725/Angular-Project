'use strict';
myApp.factory("employeeService", function($http, $q) {
	return {
		getTime : function() {
			return $http({
				url : 'getTime',
				method : 'GET',
				data : '',
				dataType : 'application/json',
				headers : {
					'Accept' : 'application/json, text/plain, */*',
					'Content-Type' : 'application/json; charset=utf-8'
				}
			}).then(function(response) {
				return response;
			})
		},
		addEmp : function(emp) {
			return $http({
				method : 'POST',
				url : 'employee',
				dataType : 'application/json',
				data : JSON.stringify(emp),
				headers : {
					'Accept' : 'application/json, text/plain',
					'Content-Type' : 'application/json'
				}
			}).then(function(response) {
				return response;

			}, function(errResponse) {
				console.log(errResponse.status);
				console.log('Error while adding employee');
				return $q.reject(errResponse);
			});
		},
		getAllDepartment : function() {
			return $http({
				method : 'get',
				url : 'all_department',
				data : '',
				headers : {
					'Accept' : 'application/json; charset=utf-8',
					'Content-Type' : 'application/json; charset=utf-8'
				}
			}).then(
					function(response) {
						return response;
					},
					function(errResponse) {
						console.log(errResponse.data);
						console.error('Error while fetching Departments '
								+ errResponse);
						return $q.reject(errResponse);
					});
		},
		getAllEmployee : function() {
			return $http({
				method : 'get',
				url : 'employee',
				data : '',
				headers : {
					'Accept' : 'application/json; charset=utf-8',
					'Content-Type' : 'application/json; charset=utf-8'
				}
			}).then(
					function(response) {
						return response;
					},
					function(errResponse) {
						console.log(errResponse.data);
						console.error('Error while fetching Departments '
								+ errResponse);
						return $q.reject(errResponse);
					});
		},
		updateEmp : function(data) {
			return $http({
				method : 'post',
				url : 'update',				
				data : JSON.stringify(data),
				headers : {
					'Accept' : 'application/json, text/plain',
					'Content-Type' : 'application/json'
				}
			}).then(function(response) {
				return response;

			}, function(errResponse) {
				console.log(errResponse.status);
				console.log('Error while adding employee');
				return $q.reject(errResponse);
			});
		}
	}
});