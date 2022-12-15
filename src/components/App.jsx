import React, { lazy, Suspense, useEffect } from 'react';
import { Container } from '@chakra-ui/react';
import { Route, Routes } from 'react-router';
import { Navigation } from './Navigation/Navigation';
import { UserMenu } from './UserMenu/UserMenu';
import { AuthNav } from './AuthNav/AuthNav';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from 'redux/users/operations';
import { getUser } from 'redux/selectors';
import { HeaderNav } from './Styled';

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
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <header>
        <Container
          w="100%"
          maxWidth="1470px"
          m="0 auto"
          bgGradient="linear(to-r, #e2e8e4, #006c84, #6eb5c0)"
        >
          <HeaderNav>
            <Navigation />
            {!isLoggedIn ? <AuthNav /> : <UserMenu />}
          </HeaderNav>
        </Container>
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
