package com.cubic.project.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cubic.project.model.Department;
import com.cubic.project.model.Employee;
import com.cubic.project.service.EmployeeService;

@Controller

public class APITestController {
	Logger logger = Logger.getLogger(APITestController.class);
	@Autowired
	private EmployeeService employeeService;

	@RequestMapping(value = "/all_department", method = RequestMethod.GET)
	public @ResponseBody List<Department> getDepartments() {
		logger.info("++++ Getting Departments ++++++++++");
		return employeeService.getDepartments();
	}

	@RequestMapping(value = "/employee", method = RequestMethod.POST)
	public @ResponseBody Employee createEmployee(@RequestBody Employee employee) {
		employeeService.saveEmployee(employee);
		logger.info("*** adding employee records........");
		return employee;
	}

	@RequestMapping(value = "/employee", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody List<Employee> getEmployees() {
		try {
			logger.info("++++ Getting Employee records ++++++++++");
			return employeeService.getEmployees();
		} catch (NullPointerException ex) {
		}

		return null;

	}

	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public @ResponseBody Employee updateEmployee(@RequestBody Employee employee) {
		logger.info(" +++++++ updating the emplpyee record of " + employee.getEmpId() + " ++++++++");
		employeeService.updateEmployee(employee);
		return employee;
	}

	@RequestMapping(value = "/delete/{empId}", method = RequestMethod.POST)
	public @ResponseBody boolean deleteEmployee(@PathVariable("empId") String empId, Employee employee) {
		logger.info(" +++++++ deleting the emplpyee record of " + employee.getEmpId() + " ++++++++");
		employeeService.deleteEmployee(empId);
		return true;
	}

	@RequestMapping(value = "/calc_salary/{empNo}/{totalWorkingDays}", method = RequestMethod.GET)
	public @ResponseBody Double calculateSalary(@PathVariable String empNo, @PathVariable Integer totalWorkingDays) {
		return employeeService.calculateSalary(empNo, totalWorkingDays);
	}

	@RequestMapping(value = "/employee/{empId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Employee getEmployeeById(@PathVariable("empId") String empId) {
		logger.info("getting employe record of : " + empId);
		Employee emp =employeeService.getEmployeeById(empId);
		System.out.println(emp.getFirstName());
		return emp;
	}

}
