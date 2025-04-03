import React from 'react';
import './App.css';
import EmployeeForm from './Components/EmployeeForm';  // Adjust the import path if needed

function App() {
  return (
    <div className="App">
      <h1>Employee Management</h1>
      <EmployeeForm />  {/* This component will render the form */}
    </div>
  );
}

export default App;  // Only one export default
