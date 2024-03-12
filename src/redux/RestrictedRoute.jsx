import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../components/hooks/AuthHook';

export const RestrictedRoute = ({ element: Element, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? (
    <Navigate to={redirectTo} />
  ) : (
    <Route element={<Element />} />
  );
};
