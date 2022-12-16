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
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormLabel color="light">Email:</FormLabel>
        <Input
          mt="10px"
          variant="outline"
          placeholder="Email"
          bg="light"
          size="md"
          width="300px"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        ></Input>
        <FormLabel color="light">Password:</FormLabel>
        <Input
          mt="10px"
          variant="outline"
          placeholder="Password"
          bg="light"
          size="md"
          width="300px"
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        ></Input>

        <Button
          mt="10px"
          variant="solid"
          bg="primary"
          _active={{ background: 'hoverBtn' }}
          _hover={{ background: 'hoverBtn' }}
          color="dark"
          size="md"
          w="100px"
          type="submit"
          disabled={isLoading}
        >
          Sign In
        </Button>
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