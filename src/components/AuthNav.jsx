import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/sign-up">Register</NavLink>
      <NavLink to="/sign-in">Login</NavLink>
    </div>
  );
};
