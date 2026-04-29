import { useState, useEffect } from 'react';

function EmployeeForm({ onSubmit, initialData, onCancel }) {
  const [formData, setFormData] = useState({ fullName: '', contactEmail: '', department: '' });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({ fullName: '', contactEmail: '', department: '' });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="section-module">
      <h2>{initialData ? 'Edit Employee' : 'Add New Student'}</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: '1.5rem' }}>
        <div className="input-block">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="data-input"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="e.g. John Doe"
          />
        </div>
        
        <div className="input-block">
          <label htmlFor="contactEmail">Contact Email</label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            className="data-input"
            value={formData.contactEmail}
            onChange={handleChange}
            required
            placeholder="e.g. john@company.com"
          />
        </div>

        <div className="input-block">
          <label htmlFor="department">Department</label>
          <input
            type="text"
            id="department"
            name="department"
            className="data-input"
            value={formData.department}
            onChange={handleChange}
            required
            placeholder="e.g. Engineering"
          />
        </div>

        <button type="submit" className="action-btn btn-submit">
          {initialData ? 'Update Employee' : 'Add Student'}
        </button>
        
        {initialData && (
          <button 
            type="button" 
            className="action-btn" 
            onClick={onCancel}
            style={{ marginTop: '0.75rem', background: 'rgba(255,255,255,0.1)' }}
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default EmployeeForm;
