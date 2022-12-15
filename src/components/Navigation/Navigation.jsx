import { NavLinkPage, NavLinkWrapper } from 'components/Styled';

export const Navigation = () => {
  return (
    <NavLinkWrapper>
      <NavLinkPage to="/">Home</NavLinkPage>
      <NavLinkPage to="/contacts">Contacts</NavLinkPage>
    </NavLinkWrapper>
  );
};
