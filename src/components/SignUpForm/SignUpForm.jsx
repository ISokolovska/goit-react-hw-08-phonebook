import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/auth-operations';
import PropTypes from 'prop-types';

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const finalData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
    console.log(finalData);
    dispatch(signUp(finalData));
    reset();
  };

  const reset = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <h1>Registration page </h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <span>Name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          ></input>
        </label>
        <label>
          <span>Email:</span>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          ></input>
        </label>
        <label>
          <span>Password:</span>
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          ></input>
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;

SignUpForm.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    })
  ),
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};
