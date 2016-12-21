package com.cubic.project.dao;

import java.util.List;
import java.util.Map;

import com.cubic.project.model.Department;
import com.cubic.project.model.Employee;

public interface MyDataDao {

	public Double calculateSalary(String empNo, Integer totalDays);

	public void saveEmployee(Employee emp);

	public Map<String, Employee> getAllEmployess();

	public List<Department> getDepartments();

	public void updateEmployee(Employee emp);

	public void deleteEmployee(String empId);

	public Employee getEmployeeById(String empId);

}
