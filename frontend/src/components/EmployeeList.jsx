function EmployeeList({ employees, onEdit, onDelete }) {
  return (
    <div className="section-module">
      <h2 style={{ marginBottom: '1.5rem' }}>Registered Students</h2>
      
      <div className="data-matrix">
        {employees.length === 0 ? (
          <div className="no-data-msg">
            <p>No students found. Add one to get started!</p>
          </div>
        ) : (
          employees.map(employee => (
            <div key={employee.id} className="profile-unit">
              <div className="profile-meta">
                <h3>{employee.fullName}</h3>
                <p><strong>Email:</strong> {employee.contactEmail}</p>
                <p><strong>Department:</strong> {employee.department}</p>
              </div>
              <div className="profile-actions">
                <button 
                  className="action-btn btn-modify"
                  onClick={() => onEdit(employee)}
                >
                  Edit
                </button>
                <button 
                  className="action-btn btn-remove"
                  onClick={() => onDelete(employee.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default EmployeeList;
