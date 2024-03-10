import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout/AppLayout';
import { useDispatch } from 'react-redux';
import { useAuth } from './hooks/AuthHook';
import { refreshing } from '../redux/user/operations';

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
    <Suspense fallback />
  ) : (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<SingUpPage />} />
        <Route path="/login" element={<SingInPage />} />
        <Route path="/settings" element={<UserPage />} />
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/exercises" element={<ExercisesPage />}>
          <Route path="title" element={<TitlePage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
