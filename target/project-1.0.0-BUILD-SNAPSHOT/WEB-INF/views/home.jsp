<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<html ng-app="myModule">
<head>
<title>Home</title>

<link rel="stylesheet" href="<c:url value='resources/css/bootstrap.min.css'/>"></link>
<link rel="stylesheet" href="<c:url value='resources/css/menu.css'/>"></link>
<link rel="stylesheet" href="<c:url value='resources/css/style.css'/>"></link>

<script type="text/javascript" src="resources/jquery/bootstrap.min.js"></script>
<script src="resources/js/bootstrap.min.js"></script>

<script src="resources/js/angular.min.js"></script>
<script src="resources/js/angular-route.js"></script>
<script src="resources/js/myApp.js"></script>

<script language="javascript" type="text/javascript">
	var getRootContext = function() {
		return "${pageContext.request.contextPath}";
	}
</script>
</head>
<body>

	<nav class="navbar navbar-default">
		<div class="container">
			<div class="collapse navbar-collapse"
				id="bs-example-navbar-collapse-1">
				<ul class="nav nav-pills" ng-controller="MenuController">
					<li><a ng-click="myFunc('/', $event)">Home</a></li>
					<li><a ng-click="myFunc('/addEmployee', $event)">Add
							Employee</a></li>
					<li><a ng-click="myFunc('/viewEmployee', $event)">View
							Employee</a></li>
					<li><a ng-click="myFunc('/calcSalary', $event)">Calculate
							Salary</a></li>
					<p style="float: right; top: 10px;" ng-controller='HomeController'>{{
						clock | date:'medium'}}</p>
				</ul>

			</div>
		</div>
	</nav>
	<!-- <div ng-controller="MessageCtrl">{{message}}</div>
 -->

	<div>
		<div class="container" id="left">
			<div ng-view=""></div>
		</div>
		<div class="right">
			<input type="date">
		</div>
	</div>

	<script src="resources/js/controller/MenuCtrl.js"></script>
	<script src="resources/js/controller/HomeCtrl.js"></script>
	<script src="resources/js/controller/EmployeeCtrl.js"></script>
	<script src="resources/js/controller/UpdateCtrl.js"></script>
	
	
	<script src="resources/js/service/employeeService.js"></script>
	<script src="resources/js/service/services.js"></script>

	


	<div class="footer">
		<p class="footer-con">Copyright &copy; 2015. All rights reserved
			at Cubic Technologies, LLC.</p>
	</div>
</body>
</html>
