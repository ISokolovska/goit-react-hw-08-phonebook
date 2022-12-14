import { SignInForm } from 'components';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function SignInPage() {
  const { isLoading, error, user } = useSelector(state => state.userData);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) return;

    navigate('/contacts');
  }, [user, navigate]);

  return (
    <div>
      <h1>Sign In</h1>
      {error.length > 0 && <p>Some error occured... With message {error}</p>}
      <SignInForm isLoading={isLoading} />
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
    </div>
  );
}

export default SignInPage;
