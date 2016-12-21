package com.cubic.project.dao.impl;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.cubic.project.dao.MyDataDao;
import com.cubic.project.model.Department;
import com.cubic.project.model.Employee;

@Repository
public class MyDataDaoImpl implements MyDataDao {
	private static Map<String, Employee> employees;
	private static Double FEDERAL_TAX = 890.45;

	public MyDataDaoImpl() {
		this.employees = new HashMap<String, Employee>();
	}

	@Override
	public void saveEmployee(Employee emp) {
		/*
		 * if (employess == null) employess = new HashMap<String, Employee>();
		 */

		employees.put(emp.getEmpId(), emp);
	}

	@Override
	public Map<String, Employee> getAllEmployess() {
		return employees;
	}

	@Override
	public Double calculateSalary(String empNo, Integer totalDays) {
		if (empNo == null)
			throw new IllegalArgumentException("number is null");
		Employee emp = employees.get(empNo);
		Double perHourRate = emp.getPerHourRate();
		Double payscale = (perHourRate * totalDays * 8) - FEDERAL_TAX;
		return payscale;
	}

	@Override
	public List<Department> getDepartments() {
		List<Department> departments = Arrays.asList(new Department("IT", "D0001", "Development"),
				new Department("Staffing", "D0002", "Recruting"), new Department("Account", "D0003", "Salary Calc"),
				new Department("Management", "D0004", "Manage the Team"));
		return departments;
	}

	@Override
	public void updateEmployee(Employee emp) {
		employees.put(emp.getEmpId(), emp);
	}

	@Override
	public void deleteEmployee(String empId) {
		employees.remove(empId);
	}

	@Override
	public Employee getEmployeeById(String empId) {
		return employees.get(empId);

	}
}
