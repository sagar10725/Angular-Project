'use strict';
function TimeCtrl($scope, $timeout) {
	$scope.clock = "loading clock..."; // initialise the time variable
	$scope.tickInterval = 1000 // ms

	var tick = function() {
		$scope.clock = Date.now() // get the current time
		$timeout(tick, $scope.tickInterval); // reset the timer
	}

	// Start the timer
	$timeout(tick, $scope.tickInterval);
}

function myfunction() {
	var value = document.getElementById("displaytable").value;
	if (value != null) {
		value.css.style.display = block;
	}
}