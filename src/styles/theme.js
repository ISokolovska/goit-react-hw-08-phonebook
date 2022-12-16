import { extendTheme } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const theme = extendTheme({
  colors: {
    primary: '#FFDC83',
    secondary: '#25502A',
    hoverBtn: '#D0A54F',
    light: '#F8FFF8',
    dark: '#284775',
    darkBrown: '#96711B',
  },
});

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const AuthNavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavLinkAuth = styled(NavLink)`
  &:not(:last-child) {
    margin-right: 25px;
  }
`;

// export const NavLinkWrapper = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   list-style: none;
// `;

// export const NavLinkPage = styled(NavLink)`
//   &:not(:last-child) {
//     margin-right: 25px;
//   }
// `;

export const UserMenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const UserMenuItem = styled.li`
  display: flex;
  justify-content: baseline;
  align-items: center;
  &:not(:last-child) {
    margin-right: 25px;
  }
`;

export const UserText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;
