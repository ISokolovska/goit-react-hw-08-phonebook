import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

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
