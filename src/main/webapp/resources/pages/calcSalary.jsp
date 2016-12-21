<script type="text/javascript">
<!--
	function myfunction() {
		var element = document.getElementById("displaytable");
		element.style.display = "block";
	}
	function myfunc() {
		var element = document.getElementById("displaytable");
		element.style.display = "none";
	}
//-->
</script>
<style>
<!--
#displaytable {
	overflow: hidden;
	clear: right;
	width: 872px;
}
//
-->
</style>



<div>
	<div ng-init="getEmployee()">
		<p>Please select the id to calculate salary</p>
		<select ng-model="emp.empId" value="emp.empId">
			<option>-- Select id --</option>
			<option ng-repeat="emp in employees">{{emp.empId}}</option>
		</select> 
		<input type="submit" class="button-success" onclick='javascript:myfunction(); ' value="Submit"
			ng-click="(getemployeeById(emp.empId))" />
			 <input type="submit"class="button-default" onclick='javascript:myfunc(); '
			value="Cancel" />
	</div>
<div>
	<table class="table table-bordered" id="displaytable"
		style="display: none;">
		<tr>
			<th rowspan="2">Employee Id</th>
			<th rowspan="2">First Name</th>
			<th rowspan="2">Last Name</th>
			<th rowspan="2">Contact Number</th>
			<th colspan="3">Salary per month</th>
		</tr>
		<tr>
			<th>Total working hour</th>
			<th>Rate/hour</th>
			<th>Total Salary/month</th>
		</tr>


		<tr ng-init="getData()">
			<td>{{employeeById.empId}}</td>
			<td>{{employeeById.firstName}}</td>
			<td>{{employeeById.lastName}}</td>
			<td>{{employeeById.contactNo}}</td>
			<td>{{employeeById.perHourRate}}</td>
			<td>40</td>
			<td>6300</td>
		</tr>

	</table>
</div>