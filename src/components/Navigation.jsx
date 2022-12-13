import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Головна</NavLink>
      <NavLink to="/contacts">Контакти</NavLink>
    </nav>
  );
};
