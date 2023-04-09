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
  console.log(setShowPassword);
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
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormControl
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <FormLabel variant="formLabelText" fontSize="18px" mr="0px" mb="0px">
          Name:
        </FormLabel>
        <Input
          variant="formInput"
          mb="20px"
          placeholder="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        ></Input>
        <FormLabel variant="formLabelText" mr="0px" mb="0px">
          Email:
        </FormLabel>
        <Input
          variant="formInput"
          mb="20px"
          placeholder="Email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        ></Input>
        <FormLabel variant="formLabelText" mr="0px" mb="0px">
          Password:
        </FormLabel>
        <Input
          variant="formInput"
          mb="0"
          type={showPassword ? 'text' : 'password'}
          min={7}
          placeholder="********"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button variant="formButton" type="submit" disabled={isLoading}>
          Sign Up
        </Button>
      </FormControl>
    </form>
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
