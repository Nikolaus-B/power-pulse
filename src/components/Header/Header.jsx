import { NavLink, useLocation } from 'react-router-dom';
import LogoSvg from '../../img/LogoPulse.svg';
import SettingsIcon from '../../img/settings.svg';
import React, { useState } from 'react';
import {
  LogoContainer,
  HeaderContainer,
  NavList,
  StyledNavLink,
  UserList,
} from './Header.styled';

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

  return (
    <header>
      <HeaderContainer>
        <LogoContainer>
          <img src={LogoSvg} alt="Logo" width="151" />
        </LogoContainer>
        {/* {(isAuthenticated || !isLoginPage) && !isRegisterPage && ( */}
        <nav>
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
        </nav>
        <UserList>
          <li>
            <a href="#settings">
              <svg width="24px" height="24px">
                <use href="../../img/settings.svg"></use>
              </svg>
            </a>
          </li>
          {/* user page icon */}
          <li>
            <NavLink to="/">
              <svg>
                <use href=""></use>
              </svg>
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/">
              <svg>
                <use href=""></use>
              </svg>
            </NavLink>
          </li>
        </UserList>  
        {/* )} */}
      </HeaderContainer>
    </header>
  );
};

