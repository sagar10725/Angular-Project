<div ng-controller="EmployeeController">

	<!-- 	<p>The time on the server is {{serverTime}}.</P> -->

	<form method="post" name="employeeForm" role="form"
		ng-submit="addEmployee()">
		<fieldset>
			<legend>Add Employee Form</legend>
			<div class="form-group row">
				<label class="col-sm-2 form-control-label">Employee Id :</label>
				<div class="col-sm-4">
					<input type="text" name="empId" class="form-control"
						ng-model="employee.empId">
				</div>
			</div>
			<div class="form-group row">
				<label class="col-sm-2 form-control-label">First Name :</label>
				<div class="col-sm-4">
					<input type="text" name="firstName" class="form-control col-sm-4"
						ng-model="employee.firstName">
				</div>
			</div>
			<div class="form-group row">
				<label class="col-sm-2 form-control-label">Last Name :</label>
				<div class="col-sm-4">
					<input type="text" name="lastName" class="form-control col-sm-4"
						ng-model="employee.lastName">
				</div>
			</div>
			<div class="form-group row">
				<label class="col-sm-2 form-control-label">Contact No :</label>
				<div class="col-sm-4">
					<input type="text" name="contactNo" class="form-control col-sm-4"
						ng-model="employee.contactNo">
				</div>
			</div>
			<!-- <div class="form-group row" ng-init="getDepartment()">
				<label class="col-sm-2 form-control-label">Department :</label>
				<div class="col-sm-5">
					<select name="department">
						<option value="">-- Please select departments --</option>
						<option ng-repeat="department in departments">{{department.name}}</option>

					</select>
				</div>
			</div> -->
			<div class="form-group row">
				<label class="col-sm-2 form-control-label">Rate Per Hour :</label>
				<div class="col-sm-4">
					<input type="text" name="rate" class="form-control col-sm-4"
						ng-model="employee.perHourRate">
				</div>
			</div>
			<div class="form-group">
				<button type="submit" class="btn btn-primary">Add Employee</button>
			</div>
		</fieldset>
	</form>


</div>