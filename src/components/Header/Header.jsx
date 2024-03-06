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
} from './Header.styled';
import { useMediaQuery } from 'react-responsive';
import { css } from '@emotion/react';
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

  const isTabletOrMobile = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ minWidth: 320 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const navRef = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <HeaderContainer>
        <LogoContainer>
          <a href='/HomePage'>
          <img
            src={LogoSvg}
            alt="Logo"
            width="151"
            // css={css`
            //   @media (max-width: 768px) {
            //     width: 100px;
            //   }
            // `}
          />
          </a>
        </LogoContainer>
        {/* {isAuthenticated && ( */}
        <NavContainer>
          {/* <nav ref={navRef}> */}
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

            <div>
              <NavLink to="/">
                <svg>
                  <Icon iconid={'settings'} width="28" />
                </svg>
              </NavLink>

              <CloseBtn onClick={showNavbar}>
                <Icon
                  icon="maki:cross"
                  width="32"
                  height="32"
                  style={{ color: 'white' }}
                />
              </CloseBtn>
            </div>
          {/* </nav> */}
        </NavContainer>

        <div className="outer-nav-buttons">
          {/* {isAuthenticated && ( */}
          <>
            {/* {!isTabletOrMobile && ( */}
            <NavLinkLogout>
              <p onClick={logout}>Logout</p>
              <svg>
                <Icon iconid={'log-out'} width="20" />
              </svg>
            </NavLinkLogout>
            {/* )} */}
          </>
          {/* )} */}
        </div>
        {/* {(isTabletOrMobile || isMobile) && ( */}
        <>
          <NavBtn onClick={showNavbar} />
          <svg>
            <Icon iconid={'burger-menu'} />
          </svg>
        </>
        {/* )} */}

        <Modal
          isOpen={isMenuOpen}
          // onRequestClose={handleCloseModal}
          style={customStyles}
          contentLabel="Add Product Modal"
        ></Modal>
      </HeaderContainer>
    </header>
  );
};
