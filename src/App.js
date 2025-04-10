
import React, { useState, useEffect } from 'react';

function App() {
  const [employees, setEmployees] = useState(() => {
    // Load employee data from local storage when the app starts
    const savedEmployees = localStorage.getItem('employees');
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  const [employee, setEmployee] = useState({
    name: '',
    title: '',
    department: '',
  });

  // Save data to local storage every time employees state changes
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const addEmployee = () => {
    if (employee.name && employee.title && employee.department) {
      setEmployees([...employees, employee]);
      setEmployee({ name: '', title: '', department: '' });
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Employee Entry Form</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={employee.name}
        onChange={handleChange}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />
      <input
        type="text"
        name="title"
        placeholder="Job Title"
        value={employee.title}
        onChange={handleChange}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />
      <input
        type="text"
        name="department"
        placeholder="Department"
        value={employee.department}
        onChange={handleChange}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />
      <button onClick={addEmployee} style={{ marginBottom: '20px' }}>
        Add Employee
      </button>

      <h3>Employee List</h3>
      <ul>
        {employees.map((emp, idx) => (
          <li key={idx}>
            <strong>{emp.name}</strong> - {emp.title} ({emp.department})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

