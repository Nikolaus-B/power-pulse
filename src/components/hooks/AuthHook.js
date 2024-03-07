import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  // selectBMR,
} from '../../redux/user/userSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  // const bmr = useSelector(selectBMR);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    // bmr,
  };
};
