import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  MenuWrapper,
  Overlay,
  CloseButton,
  Logout,
  NavMenu,
  NavMenuLink,
  Svg,
  LogoutSvg,
} from './MobileMenu.styled';

import { useDispatch } from 'react-redux';
import { fetchUserLogout } from '../../redux/user/operations';
import { Icon } from 'components/Icon/Icon';

const MobileMenu = ({ isOpen }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(isOpen);

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  const handleEscKey = event => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (menuIsOpen) {
      window.addEventListener('keydown', handleEscKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [menuIsOpen]);

  useEffect(() => {
    setMenuIsOpen(isOpen);
  }, [isOpen]);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    closeMenu();
    dispatch(fetchUserLogout());
  };
  return (
    <>
      {menuIsOpen && <Overlay onClick={closeMenu}></Overlay>}
      <MenuWrapper
        className={menuIsOpen ? 'shown' : 'hidden'}
        onClick={handleBackdropClick}
      >
        <CloseButton onClick={closeMenu}>
          <Svg>
            <Icon iconid={'x-white'} />
          </Svg>
        </CloseButton>

        <NavMenu>
          <NavMenuLink to="/diary" onClick={closeMenu}>
            Diary
          </NavMenuLink>
          <NavMenuLink to="/product" onClick={closeMenu}>
            Products
          </NavMenuLink>
          <NavMenuLink to="/exercises" onClick={closeMenu}>
            Exercises
          </NavMenuLink>
        </NavMenu>
        <Logout type="button" onClick={handleLogOut}>
          <span>Logout</span>
          <LogoutSvg>
            <Icon iconid={'log-out-white'} />
          </LogoutSvg>
        </Logout>
      </MenuWrapper>
    </>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MobileMenu;
