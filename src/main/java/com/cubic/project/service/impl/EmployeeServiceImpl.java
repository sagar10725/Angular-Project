package com.cubic.project.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cubic.project.dao.MyDataDao;
import com.cubic.project.model.Department;
import com.cubic.project.model.Employee;
import com.cubic.project.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	@Autowired
	private MyDataDao myDataDao;

	@Override
	public List<Employee> getEmployees() {
		List<Employee> employees = new ArrayList<Employee>();
		try {
			Map<String, Employee> map = myDataDao.getAllEmployess();
			for (Map.Entry<String, Employee> m : map.entrySet()) {
				employees.add(m.getValue());
			}

		} catch (Exception e) {
			throw new NullPointerException(e.getMessage());
		}
		return employees;

	}

	@Override
	public void saveEmployee(Employee emp) {
		myDataDao.saveEmployee(emp);
	}

	@Override
	public Double calculateSalary(String empNo, Integer totalWorkingDays) {
		try {
			return myDataDao.calculateSalary(empNo, totalWorkingDays);

		} catch (IllegalArgumentException ex) {
			throw new IllegalArgumentException(ex.getMessage());
		}

	}

	@Override
	public List<Department> getDepartments() {
		return myDataDao.getDepartments();
	}

	@Override
	public void updateEmployee(Employee emp) {
		myDataDao.updateEmployee(emp);
	}

	@Override
	public void deleteEmployee(String empId) {
		myDataDao.deleteEmployee(empId);
	}

	@Override
	public Employee getEmployeeById(String empId) {
		return myDataDao.getEmployeeById(empId);
	}

}
