/**
 * 
 */
myApp.controller("MenuController", function($scope, $location) {

	$scope.activeMenu = angular.element(document.querySelector('#home'));
	$scope.myFunc = function(link, event) {
		$scope.activeMenu.removeClass('activated');
		var currentElement = angular.element(event.target.parentNode);
		currentElement.addClass('activated');
		$scope.activeMenu = currentElement;
		$location.path(link);
	};

	$scope.menuList = [{
		name : 'Home',
		url : '/'
	}, {
		name : 'Add Employee',
		url : '/addEmployee'
	}, {
		name : 'View Employee Records',
		url : '/viewEmployee'
	}, {
		name : 'Calculate Salary',
		url : '/calcSalary'

	}];
});