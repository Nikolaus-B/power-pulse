import { Icon } from 'components/Icon/Icon';
import { useState } from 'react';
import {
  UserContainer,
  NavContainer,
  StyledNavLink,
  UserData,
  AvatarHeader,
  LogOutBtn,
  SettingLink,
  LogOutText,
  //   Photo,
} from './UserMenu.styled';
import { useMediaQuery } from 'react-responsive';
import { fetchUserLogout } from '../../redux/user/operations';
import { useDispatch } from 'react-redux';

export const UserMenu = () => {
  // const isTablet = useMediaQuery({ minWidth: 768 });
  // const isMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const [isActivePage, setIsActivePage] = useState('');
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(fetchUserLogout());

  const handleActivePage = name => {
    setIsActivePage(name);
  };

  return (
    <UserContainer>
      <NavContainer>
        <StyledNavLink
          style={
            isActivePage === 'diary'
              ? { backgroundColor: 'var(--orange-color)' }
              : { backgroundColor: 'transparent' }
          }
          onClick={() => handleActivePage('diary')}
          to="/diary"
        >
          Diary
        </StyledNavLink>
        <StyledNavLink
          style={
            isActivePage === 'products'
              ? { backgroundColor: 'var(--orange-color)' }
              : { backgroundColor: 'transparent' }
          }
          onClick={() => handleActivePage('products')}
          to="/product"
        >
          Products
        </StyledNavLink>
        <StyledNavLink
          style={
            isActivePage === 'exercises'
              ? { backgroundColor: 'var(--orange-color)' }
              : { backgroundColor: 'transparent' }
          }
          onClick={() => handleActivePage('exercises')}
          to="/exercises"
        >
          Exercises
        </StyledNavLink>
      </NavContainer>

      <UserData>
        <SettingLink to="/settings">
          <Icon iconid={'settings'} width={24} height={24} />
        </SettingLink>
        <AvatarHeader>
          {/* <Photo src={} width={46} height={46} alt="Avatar" /> */}
        </AvatarHeader>

        {isDesktop && (
          <LogOutBtn type="button" onClick={handleLogOut}>
            <LogOutText>Logout</LogOutText>
            <Icon iconid={'log-out'} width={20} height={20} />
          </LogOutBtn>
        )}
      </UserData>
    </UserContainer>
  );
};
