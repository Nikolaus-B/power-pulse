import { GlobalStyle } from 'components/GlobalStyle';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';

import React, { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyle />
      <Toaster
        toastOptions={{
          duration: 5000,
          style: {
            background: '#321f0c',
            color: '#fff',
          },
          success: {
            duration: 3000,
            style: {
              border: '2px solid #3CBF61',
            },
          },
          error: {
            duration: 4000,
            style: {
              border: '2px solid #D80027',
            },
          },
          loading: {
            duration: 2000,
            style: {
              border: '2px solid #e6533c',
            },
          },
        }}
      />
    </>
  );
};
