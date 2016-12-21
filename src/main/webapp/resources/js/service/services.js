myApp.service('services', function() {
	var empData = {};
	var addEmployee = function(emp) {
		empData = [];
		empData.push(emp);
	};
	//console.log(empData);
	var getEmployee = function() {
		return empData;
	};
	return {
		addEmployee : addEmployee,
		getEmployee : getEmployee
	};
});