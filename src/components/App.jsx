import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu/UserMenu';
import { AuthNav } from './AuthNav';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from 'redux/users/operations';
import { getToken, getUser } from 'redux/selectors';

const LazyHomePage = lazy(() => import('../pages/HomePage'));
const LazyContactsPage = lazy(() => import('../pages/ContactsPage'));
const LazySignUpPage = lazy(() => import('../pages/SignUpPage'));
const LazySignInPage = lazy(() => import('../pages/SignInPage'));

export const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const isLoggedIn = user?.email ?? null;
  useEffect(() => {
    if (!localStorage.getItem('token')) return;

    dispatch(getAuth());
  }, []);

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
          {!isLoggedIn ? <AuthNav /> : <UserMenu />}
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LazyHomePage />} />
          <Route path="/contacts" element={<LazyContactsPage />} />
          <Route path="/sign-up" element={<LazySignUpPage />} />
          <Route path="/sign-in" element={<LazySignInPage />} />
          <Route path="*" element={<LazyHomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
