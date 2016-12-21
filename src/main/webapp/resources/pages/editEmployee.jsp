<div ng-controller="UpdateController">

	<!-- 	<p>The time on the server is {{serverTime}}.</P> -->
	<div ng-repeat="emp in employee">
		<form method="post" name="employeeForm" role="form">
			<fieldset>
				<legend>Add Employee Form</legend>
				<div class="form-group row">
					<label class="col-sm-2 form-control-label">Employee Id :</label>
					<div class="col-sm-4">
						<input type="text" name="empId" class="form-control"
							ng-model="emp.empId" disabled="disabled">
					</div>
				</div>
				<div class="form-group row">
					<label class="col-sm-2 form-control-label">First Name :</label>
					<div class="col-sm-4">
						<input type="text" name="firstName" class="form-control col-sm-4"
							ng-model="emp.firstName">
					</div>
				</div>
				<div class="form-group row">
					<label class="col-sm-2 form-control-label">Last Name :</label>
					<div class="col-sm-4">
						<input type="text" name="lastName" class="form-control col-sm-4"
							ng-model="emp.lastName">
					</div>
				</div>
				<div class="form-group row">
					<label class="col-sm-2 form-control-label">Contact No :</label>
					<div class="col-sm-4">
						<input type="text" name="contactNo" class="form-control col-sm-4"
							ng-model="emp.contactNo">
					</div>
				</div>
				<div class="form-group row">
					<label class="col-sm-2 form-control-label">working Hour/Day  :</label>
					<div class="col-sm-4">
						<input type="number" name="rate" class="form-control col-sm-4"
							ng-model="emp.perHourRate">
					</div>
				</div>
				<div class="form-group">
					<input type="submit" class="btn btn-primary"
						ng-click="updateEmployee(emp)" value="Update"> <input
						type="submit" class="btn btn-warning" value="Cancel">

				</div>
			</fieldset>
		</form>

	</div>
</div>