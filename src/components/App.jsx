import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AppLayout } from './AppLayout/AppLayout';
import { useDispatch } from 'react-redux';
import { useAuth } from './hooks/AuthHook';
import { refreshing } from '../redux/user/operations';
import { Toaster } from 'react-hot-toast';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const SingUpPage = lazy(() => import('pages/SignUpPage'));
const SingInPage = lazy(() => import('pages/SignInPage'));
const UserPage = lazy(() => import('pages/UserPage'));
const DiaryPage = lazy(() => import('pages/DiaryPage'));
const ProductsPage = lazy(() => import('pages/ProductsPage'));
const ExercisesPage = lazy(() => import('pages/ExercisesPage'));
const TitlePage = lazy(() => import('pages/TitlePage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshing());
  }, [dispatch]);

  return isRefreshing ? (
    <Suspense fallback={<div>Loading...</div>}>
      {/* Додайте спінер або повідомлення завантаження */}
    </Suspense>
  ) : (
    <>
      <Routes>
        <Route path="/" component={<AppLayout />}>
          <Route index component={<HomePage />} />
          <Route
            path="/register"
            component={
              <RestrictedRoute redirectTo="/settings" component={SingUpPage} />
            }
          />
          <Route
            path="/login"
            component={
              <RestrictedRoute redirectTo="/diary" component={SingInPage} />
            }
          />
          <PrivateRoute
            path="/settings"
            component={<UserPage />}
            redirectTo="/"
          />
          <PrivateRoute
            path="/diary"
            component={<DiaryPage />}
            redirectTo="/"
          />
          <PrivateRoute
            path="/product"
            component={<ProductsPage />}
            redirectTo="/"
          />
          <PrivateRoute
            path="/exercises"
            component={<ExercisesPage />}
            redirectTo="/"
          />
          <Route
            path="/error"
            component={
              <RestrictedRoute redirectTo="/" component={<NotFoundPage />} />
            }
          />
          <Route path="/exercises/title" component={<TitlePage />} />
        </Route>
        <Route path="*" component={<Navigate />} />
      </Routes>
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
