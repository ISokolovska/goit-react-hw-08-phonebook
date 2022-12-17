import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { useDispatch } from 'react-redux';
import { getAuth } from 'redux/users/operations';
import Header from './Header/Header';

const LazyHomePage = lazy(() => import('../pages/HomePage'));
const LazyContactsPage = lazy(() => import('../pages/ContactsPage'));
const LazySignUpPage = lazy(() => import('../pages/SignUpPage'));
const LazySignInPage = lazy(() => import('../pages/SignInPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getItem('token')) return;

    dispatch(getAuth());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="" element={<LazyHomePage />} />
          <Route path="contacts" element={<LazyContactsPage />} />
          <Route path="sign-up" element={<LazySignUpPage />} />
          <Route path="sign-in" element={<LazySignInPage />} />
          <Route path="*" element={<LazyHomePage />} />
        </Routes>
      </Suspense>
    </>
  );
};
