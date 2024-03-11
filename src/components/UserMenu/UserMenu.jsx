import { Icon } from 'components/Icon/Icon';
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

export const UserMenu = () => {
  // const isTablet = useMediaQuery({ minWidth: 768 });
  // const isMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return (
    <UserContainer>
      <NavContainer>
        <StyledNavLink to="/diary">Diary</StyledNavLink>
        <StyledNavLink to="/products">Products</StyledNavLink>
        <StyledNavLink to="/exercises">Exercises</StyledNavLink>
      </NavContainer>

      <UserData>
        <SettingLink to="/params">
          <Icon iconid={'settings'} width={24} height={24} />
        </SettingLink>
        <AvatarHeader>
          {/* <Photo src={} width={46} height={46} alt="Avatar" /> */}
        </AvatarHeader>

        {isDesktop && (
          <LogOutBtn type="button">
            <LogOutText>Logout</LogOutText>
            <Icon iconid={'log-out'} width={20} height={20} />
          </LogOutBtn>
        )}
      </UserData>
    </UserContainer>
  );
};

