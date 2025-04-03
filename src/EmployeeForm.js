// Import the necessary libraries
import React from 'react';

//  Define the EmployeeForm component
class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    //  Initialize state with empty values
    this.state = {
      name: '',
      email: '',
      title: '',
      department: ''
    };

    // Bind the methods to the class instance
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //  Handle input field changes
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  //  Handle form submission
  handleSubmit(event) {
    event.preventDefault();
    console.log('Employee Data Submitted:', this.state);
    
    // Reset the form fields after submission
    this.setState({
      name: '',
      email: '',
      title: '',
      department: ''
    });
  }

  //  Render the form with input fields and submit button
  render() {
    return (
      <div>
        <h2>Employee Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
/>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="title">Job Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="department">Department:</label>
            <input
              type="text"
              id="department"
              name="department"
              value={this.state.department}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

// Export the EmployeeForm component
export default EmployeeForm;
