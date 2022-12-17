import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { signIn } from 'redux/users/operations';
import { Button, FormLabel, Input } from '@chakra-ui/react';
function SignInForm({ isLoading }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
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
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormLabel color="light">Email:</FormLabel>
      <Input
        mt="10px"
        variant="primary"
        width="300px"
        placeholder="Email"
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      ></Input>
      <FormLabel color="light">Password:</FormLabel>

      <Input
        mt="10px"
        variant="primary"
        width="300px"
        type={showPassword ? 'text' : 'password'}
        min={7}
        placeholder="********"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      ></Input>

      <Button
        mt="10px"
        variant="primary"
        _active={{ background: 'hoverBtn' }}
        _hover={{ background: 'hoverBtn' }}
        type="submit"
        disabled={isLoading}
      >
        Sign In
      </Button>
    </form>
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
