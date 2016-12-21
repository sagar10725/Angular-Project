package com.cubic.project.service;

import java.util.List;
import java.util.Map;

import com.cubic.project.model.Department;
import com.cubic.project.model.Employee;

public interface EmployeeService {

	public List<Employee> getEmployees();

	public void saveEmployee(Employee emp);

	public Double calculateSalary(String empNo, Integer totalWorkingDays);

	public List<Department> getDepartments();

	public void updateEmployee(Employee emp);

	public void deleteEmployee(String empId);

	public Employee getEmployeeById(String empId);

}
