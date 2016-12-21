///<reference path = "angualr.min.js"/>
///<reference path = "angular-route.js"/>

"use strict";
var myApp = angular.module("myModule", [ 'ngRoute' ]);

myApp.controller("MessageCtrl", function($scope) {
	$scope.message = "wel-come to the Angular Project";
});

myApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : getRootContext() + '/resources/pages/dashboard.jsp',
		controller : 'HomeController'
	}).when('/addEmployee', {
		templateUrl : getRootContext() + '/resources/pages/addEmployee.jsp',
		controller : 'EmployeeController'
	}).when('/viewEmployee', {
		templateUrl : getRootContext() + '/resources/pages/viewEmployee.jsp',
		controller : 'EmployeeController'
	}).when('/calcSalary', {
		templateUrl : getRootContext() + '/resources/pages/calcSalary.jsp',
		controller : 'EmployeeController'
	}).when('/edit/:id', {
		templateUrl : getRootContext() + '/resources/pages/editEmployee.jsp',
		controller : 'UpdateController'
	}).otherwise({
		redirectTo : '/'
	});
} ]);