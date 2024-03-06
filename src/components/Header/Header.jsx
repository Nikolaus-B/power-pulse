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
} from './Header.styled';
import { Icon } from '@iconify-icon/react';
import { useMediaQuery } from 'react-responsive';
import { css } from '@emotion/react';

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

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <HeaderContainer>
        <LogoContainer>
          <img src={LogoSvg} alt="Logo" width="151" css={css`
            @media (max-width: 768px) {
              width: 100px;
            }
          `}/>
        </LogoContainer>

        {isAuthenticated && (
          <NavContainer>
            <nav ref={navRef}>
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

              <CloseBtn onClick={showNavbar}>
                <Icon
                  icon="maki:cross"
                  width="32"
                  height="32"
                  style={{ color: 'white' }}
                />
              </CloseBtn>
              {isTabletOrMobile && (
                <NavLinkLogout>
                  <p onClick={logout}>Logout</p>
                  <svg className='svg' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H7.5" stroke="#E6533C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83337M17.5 10H7.5" stroke="#E6533C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                </NavLinkLogout>
              )}
            </nav>
          </NavContainer>
        )}

        <div className="outer-nav-buttons">
          {isAuthenticated && (
            <>
              <button>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 17.5C15.933 17.5 17.5 15.933 17.5 14C17.5 12.067 15.933 10.5 14 10.5C12.067 10.5 10.5 12.067 10.5 14C10.5 15.933 12.067 17.5 14 17.5Z" stroke="#EFEDE8" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21.8491 17.1819C21.708 17.5018 21.6658 17.8566 21.7282 18.2007C21.7906 18.5447 21.9546 18.8622 22.1991 19.1122L22.2628 19.1758C22.46 19.3728 22.6165 19.6067 22.7232 19.8643C22.83 20.1218 22.8849 20.3978 22.8849 20.6766C22.8849 20.9553 22.83 21.2313 22.7232 21.4889C22.6165 21.7464 22.46 21.9803 22.2628 22.1773C22.0658 22.3745 21.8318 22.531 21.5743 22.6377C21.3168 22.7445 21.0408 22.7994 20.762 22.7994C20.4833 22.7994 20.2072 22.7445 19.9497 22.6377C19.6922 22.531 19.4583 22.3745 19.2613 22.1773L19.1976 22.1137C18.9477 21.8692 18.6302 21.7051 18.2861 21.6428C17.9421 21.5804 17.5872 21.6225 17.2673 21.7637C16.9536 21.8981 16.6861 22.1214 16.4976 22.4059C16.3092 22.6905 16.2081 23.0239 16.2067 23.3652V23.5455C16.2067 24.1081 15.9832 24.6476 15.5854 25.0454C15.1876 25.4432 14.6481 25.6667 14.0855 25.6667C13.5229 25.6667 12.9834 25.4432 12.5856 25.0454C12.1878 24.6476 11.9643 24.1081 11.9643 23.5455V23.45C11.9561 23.099 11.8424 22.7585 11.6382 22.4729C11.4339 22.1873 11.1484 21.9697 10.8188 21.8485C10.4989 21.7073 10.1441 21.6652 9.80003 21.7276C9.45597 21.79 9.13849 21.954 8.88853 22.1985L8.82489 22.2622C8.62789 22.4594 8.39395 22.6158 8.13643 22.7226C7.87892 22.8293 7.6029 22.8843 7.32414 22.8843C7.04538 22.8843 6.76935 22.8293 6.51184 22.7226C6.25433 22.6158 6.02038 22.4594 5.82338 22.2622C5.62616 22.0652 5.4697 21.8312 5.36295 21.5737C5.2562 21.3162 5.20126 21.0402 5.20126 20.7614C5.20126 20.4826 5.2562 20.2066 5.36295 19.9491C5.4697 19.6916 5.62616 19.4577 5.82338 19.2606L5.88701 19.197C6.13152 18.947 6.29555 18.6296 6.35793 18.2855C6.42031 17.9415 6.3782 17.5866 6.23701 17.2667C6.10257 16.953 5.87933 16.6855 5.59478 16.497C5.31023 16.3086 4.97679 16.2075 4.6355 16.2061H4.4552C3.89262 16.2061 3.35308 15.9826 2.95527 15.5848C2.55747 15.187 2.33398 14.6475 2.33398 14.0849C2.33398 13.5223 2.55747 12.9828 2.95527 12.585C3.35308 12.1872 3.89262 11.9637 4.4552 11.9637H4.55065C4.90171 11.9555 5.24217 11.8418 5.52779 11.6376C5.8134 11.4333 6.03096 11.1478 6.15217 10.8182C6.29335 10.4983 6.33546 10.1435 6.27308 9.79942C6.2107 9.45536 6.04668 9.13788 5.80217 8.88792L5.73853 8.82428C5.54131 8.62728 5.38485 8.39333 5.2781 8.13582C5.17135 7.87831 5.11641 7.60229 5.11641 7.32353C5.11641 7.04477 5.17135 6.76874 5.2781 6.51123C5.38485 6.25372 5.54131 6.01977 5.73853 5.82277C5.93553 5.62555 6.16948 5.46909 6.42699 5.36234C6.6845 5.25559 6.96053 5.20065 7.23929 5.20065C7.51805 5.20065 7.79407 5.25559 8.05159 5.36234C8.3091 5.46909 8.54304 5.62555 8.74005 5.82277L8.80368 5.8864C9.05364 6.13091 9.37112 6.29493 9.71518 6.35732C10.0592 6.4197 10.4141 6.37759 10.734 6.2364H10.8188C11.1325 6.10196 11.4001 5.87872 11.5885 5.59417C11.777 5.30962 11.8781 4.97618 11.8794 4.63489V4.45459C11.8794 3.89201 12.1029 3.35247 12.5007 2.95466C12.8985 2.55686 13.4381 2.33337 14.0007 2.33337C14.5632 2.33337 15.1028 2.55686 15.5006 2.95466C15.8984 3.35247 16.1219 3.89201 16.1219 4.45459V4.55004C16.1232 4.89133 16.2244 5.22477 16.4128 5.50932C16.6012 5.79387 16.8688 6.01711 17.1825 6.15156C17.5024 6.29274 17.8572 6.33485 18.2013 6.27247C18.5453 6.21009 18.8628 6.04606 19.1128 5.80156L19.1764 5.73792C19.3734 5.5407 19.6074 5.38424 19.8649 5.27749C20.1224 5.17074 20.3984 5.1158 20.6772 5.1158C20.9559 5.1158 21.232 5.17074 21.4895 5.27749C21.747 5.38424 21.9809 5.5407 22.1779 5.73792C22.3751 5.93492 22.5316 6.16887 22.6384 6.42638C22.7451 6.68389 22.8 6.95992 22.8 7.23868C22.8 7.51744 22.7451 7.79346 22.6384 8.05098C22.5316 8.30849 22.3751 8.54243 22.1779 8.73944L22.1143 8.80307C21.8698 9.05303 21.7058 9.37051 21.6434 9.71457C21.581 10.0586 21.6231 10.4135 21.7643 10.7334V10.8182C21.8987 11.1319 22.122 11.3995 22.4065 11.5879C22.6911 11.7763 23.0245 11.8775 23.3658 11.8788H23.5461C24.1087 11.8788 24.6482 12.1023 25.046 12.5001C25.4438 12.8979 25.6673 13.4375 25.6673 14C25.6673 14.5626 25.4438 15.1022 25.046 15.5C24.6482 15.8978 24.1087 16.1213 23.5461 16.1213H23.4507C23.1094 16.1226 22.7759 16.2237 22.4914 16.4122C22.2068 16.6006 21.9836 16.8682 21.8491 17.1819Z" stroke="#EFEDE8" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

              </button>
              <button>
              <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="23" cy="23" r="22.5" fill="#303030" fill-opacity="0.3" stroke="#E6533C"/>
                        <path d="M23 15C24.0609 15 25.0783 15.4214 25.8284 16.1716C26.5786 16.9217 27 17.9391 27 19C27 20.0609 26.5786 21.0783 25.8284 21.8284C25.0783 22.5786 24.0609 23 23 23C21.9391 23 20.9217 22.5786 20.1716 21.8284C19.4214 21.0783 19 20.0609 19 19C19 17.9391 19.4214 16.9217 20.1716 16.1716C20.9217 15.4214 21.9391 15 23 15ZM23 31C23 31 31 31 31 29C31 26.6 27.1 24 23 24C18.9 24 15 26.6 15 29C15 31 23 31 23 31Z" fill="#EFEDE8" fill-opacity="0.1"/>
                    </svg>

              </button>
              {!isTabletOrMobile && (
                <NavLinkLogout>
                  <p onClick={logout}>Logout</p>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H7.5" stroke="#E6533C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83337M17.5 10H7.5" stroke="#E6533C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                  </svg>
                </NavLinkLogout>
              )}
            </>
          )}
        </div>
        {/* {(isTabletOrMobile || isMobile) && ( */}
  <>
    <NavBtn onClick={showNavbar} />
    <Icon
      icon="bitcoin-icons:menu-outline"
      width="32"
      height="32"
      style={{ color: '#E6533C' }}
    />
  </>
{/* )} */}
      </HeaderContainer>
    </header>
  );
};