import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';

function WithAuthRedirect(Component, navigateTo) {
  const ComponentWithRedirect = props => {
    const user = useSelector(getUser);
    const isLoggedIn = user?.email ?? null;

    return isLoggedIn ? <Component {...props} /> : <Navigate to={navigateTo} />;
  };

  return ComponentWithRedirect;
}

export default WithAuthRedirect;
