import React from 'react';
import { useSelector } from 'react-redux';
import { SignUpForm } from 'components';

function SignUpPage() {
  const { isLoading, error } = useSelector(state => state.userData);

  return (
    <div>
      <h1>Sign Up</h1>
      {error.length > 0 && <p>Some error occured... With message {error}</p>}
      <SignUpForm isLoading={isLoading} />
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
    </div>
  );
}
export default SignUpPage;
