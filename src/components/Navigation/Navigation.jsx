import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Tabs,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLinkPage, NavLinkWrapper } from 'styles/theme';

export const Navigation = () => {
  return (
    <Breadcrumb spacing="8px" separator=" ">
      <BreadcrumbItem>
        <BreadcrumbLink
          // _selected={{ color: 'white', bg: 'dark' }}
          as={Link}
          to="/"
        >
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          // _selected={{ color: 'white', bg: 'dark' }}
          as={Link}
          to="/contacts"
        >
          Contacts
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>

    // <NavLinkWrapper>
    // {/* <Tab _selected={{ color: 'white', bg: 'dark' }} to="/">
    // Home
    // </Tab> */}
    // <NavLinkPage to="/contacts">Contacts</NavLinkPage>
    // </NavLinkWrapper>
  );
};
