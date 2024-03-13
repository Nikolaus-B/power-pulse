import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from '../redux/user/userSelectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = useSelector(selectToken);
  return token ? <Navigate to={redirectTo} /> : Component;
};
