import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SignUpForm } from 'components';
import { useNavigate } from 'react-router';

function SignUpPage() {
  const { isLoading, error, user } = useSelector(state => state.userData);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) return;

    navigate('/contacts');
  }, [user, navigate]);

  return (
    <div>
      <h1>Please, register ! </h1>
      {error.length > 0 && <p>Some error occured... With message {error}</p>}
      <SignUpForm isLoading={isLoading} />
    </div>
  );
}
export default SignUpPage;
