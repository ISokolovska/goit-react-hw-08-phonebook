import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { signIn } from 'redux/users/operations';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
function SignInForm({ isLoading }) {
  const [formData, setFormData] = useState({
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
      <FormControl
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <FormLabel variant="formLabelText" mr="0px" mb="0px">
          Email:
        </FormLabel>
        <Input
          variant="formInput"
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
          type={showPassword ? 'text' : 'password'}
          min={7}
          placeholder="********"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        ></Input>

        <Button variant="formButton" type="submit" disabled={isLoading}>
          Sign In
        </Button>
      </FormControl>
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
