import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { signIn } from 'redux/users/operations';

function SignInForm({ isLoading }) {
  const [formData, setFormData] = useState({
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
      email: formData.email,
      password: formData.password,
    };
    console.log(finalData);
    dispatch(signIn(finalData));
    reset();
  };

  const reset = () => {
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <h1>Authorization page </h1>
      <form onSubmit={handleSubmit} autoComplete="off">
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
        <button type="submit" disabled={isLoading}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignInForm;

SignInForm.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};
