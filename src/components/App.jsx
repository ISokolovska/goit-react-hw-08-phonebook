import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoading } from 'redux/selectors';
import { getIsLoggedIn } from '../redux/auth/auth-selectors';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { TitleContacts } from './Styled';
// import { NavLink } from 'react-router-dom';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu/UserMenu';
import { AuthNav } from './AuthNav';

const LazyHomePage = lazy(() => import('../pages/HomePage'));
const LazySignUpPage = lazy(() => import('../pages/SignUpPage'));
const LazyLoginPage = lazy(() => import('../pages/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
    // style={{
    //   margin: '0 auto',
    //   display: 'flex',
    //   flexDirection: 'column',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: 'black',
    //   backgroundColor: '#896e69',
    //   border: '5px solid #003b46',
    //   borderRadius: 50,
    // }}
    >
      <header>
        <nav>
          <Navigation />
          <UserMenu />
          <AuthNav />
        </nav>

        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* <Route path="/" element={<LazyHomePage />} /> */}
          <Route path="/register" element={<LazySignUpPage />} />
          {/* <Route path="/login" element={<LazyLoginPage />} /> */}
          {/* <Route path="*" element={<LazyHomePage />} /> */}
        </Routes>
      </Suspense>
      {/* <h1>Phonebook</h1> */}
      {/* <ContactsForm /> */}
      {isLoading && !error && <b>Request in progress...</b>}
      {/* <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactsList /> */}
    </div>
  );
};
