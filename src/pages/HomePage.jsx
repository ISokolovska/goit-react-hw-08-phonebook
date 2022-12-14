import React from 'react';
import { useSelector } from 'react-redux';

function HomePage() {
  const { isLoading, error } = useSelector(state => state.userData);

  return (
    <div>
      {isLoading && <p>Hello, it's you phonebook !</p>}
      {error.length > 0 && <p>Some error occured... With message {error}</p>}
    </div>
  );
}

export default HomePage;
