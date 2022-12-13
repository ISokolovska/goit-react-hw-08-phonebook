import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login page </h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email:
          <input
            id="POST-email"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Password:
          <input
            id="POST-password"
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default LoginPage;
