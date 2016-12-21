<div>
	<p>Please select the id to calculate salary</p>
	<div ng-init="getEmployee()">
		<select>
			<option>-- Select id --</option>
			<option ng-repeat="emp in employees">{{emp.empId}}</option>

		</select>
		<button class="button button-success">submit</button>
	</div>
</div>