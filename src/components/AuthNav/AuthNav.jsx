// import { AuthNavWrapper, NavLinkAuth } from 'components/Styled';
// import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { AuthNavWrapper, NavLinkAuth } from 'components/Styled';

export const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <NavLinkAuth to="/sign-up">Register</NavLinkAuth>
      <NavLinkAuth to="/sign-in">Authorization</NavLinkAuth>
    </AuthNavWrapper>
  );
};
