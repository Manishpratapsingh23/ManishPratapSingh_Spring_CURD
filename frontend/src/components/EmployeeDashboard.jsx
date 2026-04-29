import { useState, useEffect } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';

const API_URL = '/api/employees';

function EmployeeDashboard() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const data = await response.json();
        setEmployees(data);
      }
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      if (editingEmployee) {
        await fetch(`${API_URL}/${editingEmployee.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      } else {
        await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      }
      setEditingEmployee(null);
      fetchEmployees();
    } catch (error) {
      console.error('Error saving employee:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      try {
        await fetch(`${API_URL}/${id}`, {
          method: 'DELETE'
        });
        fetchEmployees();
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    }
  };

  return (
    <>
      <div className="headline-bar">
        <h1>Student Directory</h1>
        <p>Manage your Student Record with elegance</p>
      </div>

      <div className="workspace-wrapper">
        <EmployeeForm 
          onSubmit={handleFormSubmit}
          initialData={editingEmployee}
          onCancel={() => setEditingEmployee(null)}
        />
        <EmployeeList 
          employees={employees}
          onEdit={(emp) => setEditingEmployee(emp)}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default EmployeeDashboard;
