import { NavLink, useLocation } from 'react-router-dom';
import LogoSvg from '../../img/LogoPulse.svg';
import React, { useState, useRef } from 'react';
import {
  LogoContainer,
  HeaderContainer,
  NavList,
  StyledNavLink,
  // UserList,
  CloseBtn,
  NavLinkLogout,
  NavBtn,
  NavContainer,
  customStyles,
  LogOutBtn,
  AvatarLink,
  LogoImage
} from './Header.styled';
import { useMediaQuery } from 'react-responsive';
import Modal from 'react-modal';
import { Icon } from 'components/Icon/Icon';

export const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  const isTablet = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const navRef = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const [userAvatar, setUserAvatar] = useState(null);

  // const getUserAvatar = () => {
  //   const currentUser = firebase.auth().currentUser;
  //   const avatarURL = currentUser.photoURL;
  //   setUserAvatar(avatarURL);
  // };

  // useEffect(() => {
  //   getUserAvatar();
  // }, []);

  const showNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const showBottomBorder = isLoginPage || isRegisterPage;

  return (
    <header>
      <HeaderContainer showBottomBorder={showBottomBorder}>
        <LogoContainer>
          <a href="#">
            <LogoImage src={LogoSvg} alt="Logo" />
          </a>
        </LogoContainer>

        {/* {isAuthenticated && ( */}

        <NavContainer>

        {isDesktop && (

          <NavList>
            <li>
              <StyledNavLink to="/diary">Diary</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/product">Product</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/exercises">Exercises</StyledNavLink>
            </li>
          </NavList>
        )}
          
          <NavLink to="/">
            <Icon iconid={"settings"} width="28" height="28" />
          </NavLink>


        {/* {isAuthenticated && ( */}
        <>
          {/* {!isTablet && !isMobile( */}

          <AvatarLink to="#">
            {/* {userAvatar && ( */}
            <img src="" alt="Avatar" style={{ width: isMobile ? '37px' : '46px', height: 'auto' }} />
          </AvatarLink>

          {isDesktop && (
            <NavLinkLogout>
              <LogOutBtn>Logout</LogOutBtn>
              <Icon iconid={'log-out'} width="20" />
            </NavLinkLogout>
          )}

          {!isDesktop && (
            <>
              <NavBtn onClick={showNavbar}>
              <svg>
                <Icon iconid={'burger-menu'} width="32" />
              </svg>
              </NavBtn>
            </>
          )}
        </>
        {/* )} */}
        </NavContainer>
        {/* )} */}
        <Modal
          isOpen={isMenuOpen}
          style={customStyles}
          contentLabel="Add Product Modal"
        ></Modal>
      </HeaderContainer>
    </header>
  );
};