import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsLoading,
  selectBMR,
  selectDailyRateSports,
} from '../redux/user/userSelectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);
  const bmr = useSelector(selectBMR);
  const dailyRateSports = useSelector(selectDailyRateSports);

  return {
    user,
    isLoggedIn,
    isRefreshing,
    isLoading,
    bmr,
    dailyRateSports,
  };
};
