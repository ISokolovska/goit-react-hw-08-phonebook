import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { SignInForm } from 'components';

function SignInPage() {
  const { isLoading, error, user } = useSelector(state => state.userData);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) return;

    navigate('/contacts');
  }, [user, navigate]);

  return (
    <div>
      <h1>Please, log in !</h1>
      {error.length > 0 && <p>Some error occured... With message {error}</p>}
      <SignInForm isLoading={isLoading} />
    </div>
  );
}

export default SignInPage;
