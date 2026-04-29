package com.company.management.repository;

import com.company.management.model.Employee;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class EmployeeRepository {

    private final JdbcTemplate jdbcTemplate;

    public EmployeeRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<Employee> rowMapper = new RowMapper<Employee>() {
        @Override
        public Employee mapRow(ResultSet rs, int rowNum) throws SQLException {
            Employee employee = new Employee();
            employee.setId(rs.getInt("id"));
            employee.setFullName(rs.getString("full_name"));
            employee.setContactEmail(rs.getString("contact_email"));
            employee.setDepartment(rs.getString("department"));
            return employee;
        }
    };

    public int save(Employee employee) {
        String sql = "INSERT INTO employee (full_name, contact_email, department) VALUES (?, ?, ?)";
        return jdbcTemplate.update(sql, employee.getFullName(), employee.getContactEmail(), employee.getDepartment());
    }

    public List<Employee> findAll() {
        String sql = "SELECT * FROM employee";
        return jdbcTemplate.query(sql, rowMapper);
    }

    public Employee findById(Integer id) {
        String sql = "SELECT * FROM employee WHERE id = ?";
        List<Employee> employees = jdbcTemplate.query(sql, rowMapper, id);
        if (employees.isEmpty()) {
            return null;
        }
        return employees.get(0);
    }

    public int update(Integer id, Employee employee) {
        String sql = "UPDATE employee SET full_name = ?, contact_email = ?, department = ? WHERE id = ?";
        return jdbcTemplate.update(sql, employee.getFullName(), employee.getContactEmail(), employee.getDepartment(), id);
    }

    public int deleteById(Integer id) {
        String sql = "DELETE FROM employee WHERE id = ?";
        return jdbcTemplate.update(sql, id);
    }
}
