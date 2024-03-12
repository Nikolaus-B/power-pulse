import { useAuth } from '../components/hooks/AuthHook';
import { Route, Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? (
    <Navigate to={redirectTo} />
  ) : (
    <Route element={<Component />} />
  );
};
