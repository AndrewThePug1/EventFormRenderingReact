import React, { useState } from 'react';

function RegistrationForm() {
  // State for the form inputs
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // TODO 1: Add event handlers to update state based on form input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // TODO 2: Implement form submission logic
  const handleSubmit = (event) => {
    event.preventDefault();
    // Prevent default form submission behavior

    // Process the form data here (e.g., log to the console, make API call)
    console.log('Form Data:', formData);

    // TODO 3: Add any additional actions on form submission
  };

  // TODO 4: Implement form validation logic
  const validateForm = () => {
    // Example validation: check if the email is not empty and the password length is at least 6 characters
    return formData.email.trim() !== '' && formData.password.length >= 6;
  };

  const isFormValid = validateForm();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          // TODO: Add any needed attributes for validation
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          // TODO: Add any needed attributes for validation
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          // TODO: Add any needed attributes for validation
        />
      </div>
      <button type="submit" disabled={!isFormValid}>
        Register
      </button>
      {/* TODO 5: Display validation error messages here */}
    </form>
  );
}

export default RegistrationForm;
