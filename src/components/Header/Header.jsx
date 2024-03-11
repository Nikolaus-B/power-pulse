import {
  HeaderContainer,
  NavBtn,
  UserContainer,
  LogoLink,
  HeaderWrapper,
} from './Header.styled';
import { Icon } from 'components/Icon/Icon';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { useMediaQuery } from 'react-responsive';

export const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1439 });

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoLink to="/">
          <Icon iconid={'icon-Logo'} width={126} height={13} />
        </LogoLink>

        <UserContainer>
          <UserMenu />

          {(isMobile || isTablet) && (
            <NavBtn>
              <Icon iconid={'icon-Icon'} width={24} height={16} />
            </NavBtn>
          )}

          <MobileMenu />
        </UserContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
};