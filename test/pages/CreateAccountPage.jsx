import React, { useState } from 'react';
import './accountStyle.css';
import {
  validateName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validateDateOfBirth
} from '../utils/validators';

const CreateAccountPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {
      firstName: validateName(formData.firstName),
      lastName: validateName(formData.lastName),
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
      confirmPassword: validateConfirmPassword(formData.password, formData.confirmPassword),
      dob: validateDateOfBirth(formData.dob),
    };

    const filteredErrors = Object.fromEntries(
      Object.entries(newErrors).filter(([_, v]) => v !== '')
    );

    setErrors(filteredErrors);
    return Object.keys(filteredErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('✅ Account Created:', formData);
      alert('Account successfully created!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        dob: '',
      });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <h2>Create New Account</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-input" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <p className="error-text">{errors.firstName}</p>}

        <input className="form-input" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && <p className="error-text">{errors.lastName}</p>}

        <input className="form-input" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="error-text">{errors.email}</p>}

        <input className="form-input" name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        {errors.password && <p className="error-text">{errors.password}</p>}

        <input className="form-input" name="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}

        <input className="form-input" name="dob" placeholder="Date of Birth (dd/mm/yyyy)" value={formData.dob} onChange={handleChange} />
        {errors.dob && <p className="error-text">{errors.dob}</p>}

        <button type="submit" className="submit-button">SUBMIT</button>
      </form>
    </div>
  );
};

export default CreateAccountPage;
