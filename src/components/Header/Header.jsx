import {
  HeaderContainer,
  NavBtn,
  UserContainer,
  LogoLink,
  HeaderWrapper,
} from './Header.styled';
import { Icon } from 'components/Icon/Icon';
import { useState } from 'react';
import { UserMenu } from 'components/UserMenu/UserMenu';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import { useSelector } from 'react-redux';

import { useMediaQuery } from 'react-responsive';

import { selectToken } from '../../redux/user/userSelectors';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = useSelector(selectToken);
  const onClickNavBtn = () => {
    setIsOpen({ isOpen: !isOpen });
  };

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1439 });

  return (
    <HeaderWrapper
      style={
        token
          ? { borderBottom: '1px solid rgba(239, 237, 232, 0.20)' }
          : { borderBottom: 'none' }
      }
    >
      <HeaderContainer>
        <LogoLink to="/">
          <Icon iconid={'icon-Logo'} width={126} height={13} />
        </LogoLink>

        <UserContainer>
          {token && (
            <>
              <UserMenu />
              {(isMobile || isTablet) && (
                <NavBtn onClick={onClickNavBtn}>
                  <Icon iconid={'icon-Icon'} width={24} height={16} />
                </NavBtn>
              )}
              <MobileMenu isOpen={isOpen} />
            </>
          )}
        </UserContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
