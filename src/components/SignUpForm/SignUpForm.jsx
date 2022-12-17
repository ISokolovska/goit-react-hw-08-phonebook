import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/users/operations';
import PropTypes from 'prop-types';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

function SignUpForm({ isLoading }) {
  const [formData, setFormData] = useState({
    name: '',
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
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormControl>
          <FormLabel color="light">Name:</FormLabel>
          <Input
            mt="10px"
            variant="primary"
            width="300px"
            placeholder="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          ></Input>
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
          />

          <Button
            mt="10px"
            variant="primary"
            _active={{ background: 'hoverBtn' }}
            _hover={{ background: 'hoverBtn' }}
            type="submit"
            disabled={isLoading}
          >
            Sign Up
          </Button>
        </FormControl>
      </form>
    </div>
  );
}

export default SignUpForm;

SignUpForm.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};
