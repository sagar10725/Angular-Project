<div ng-init="getEmployee()">
	<h1>list of employee pages</h1>
	
	<table class="table table-striped table-hover">
		<thead>
			<tr>
				<th>Employee ID</th>
				<th>first Name</th>
				<th>last Name</th>
				<th>Contact Number</th>
				<th>working Hour/Day </th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			<tr ng-repeat="emp in employees">
				<td>{{emp.empId}}</td>
				<td>{{emp.firstName}}</td>
				<td>{{emp.lastName}}</td>
				<td>{{emp.contactNo}}</td>
				<td>$ {{emp.perHourRate}}</td>
				<td>
					<button class="btn btn-mini btn-costum" ng-click="editEmp(emp)">Edit</button> /
					<button class="btn btn-mini btn-danger" ng-click="deleteEmp($index)">Delete</button>
				</td>
			</tr>
		</tbody>
	</table>

</div>

