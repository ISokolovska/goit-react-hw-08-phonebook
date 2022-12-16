import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/users/operations';
import PropTypes from 'prop-types';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  Icon,
  InputRightElement,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
function SignUpForm({ isLoading }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

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
            variant="outline"
            placeholder="Name"
            bg="light"
            size="md"
            width="300px"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          ></Input>
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
          <InputGroup>
            <Input
              mt="10px"
              variant="outline"
              bg="light"
              size="md"
              width="300px"
              type={showPassword ? 'text' : 'password'}
              min={7}
              placeholder="********"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <InputRightElement width="3rem">
              <Button h="1.5rem" size="sm" onClick={handlePasswordVisibility}>
                {showPassword ? (
                  <Icon as={ViewIcon} />
                ) : (
                  <Icon as={ViewOffIcon} />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>

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
