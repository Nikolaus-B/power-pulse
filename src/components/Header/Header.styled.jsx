import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  `

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  font-size: 1rem;
  padding: 34px 0 34px 96px;
  border-bottom: 1px solid ##EFEDE866;
`;

export const RightPart = styled.div`
  margin-right: 0.5rem;
  text-align: right;
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export const CloseBtn = styled.button`
  visibility: visible;
  opacity: 1;
  position: absolute;
  top: 2rem;
  right: 2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const NavLinkLogout = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  gap: 0.5rem;
  color: white; 
  text-decoration: none; 
`;

export const NavBtn = styled.button`
padding: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    color: var(--textColor);
    visibility: hidden;
    opacity: 0;
    font-size: 1.8rem;
`;

// export const LogoContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: 16px; /* Відступ між логотипом та навігацією */
// `;

// export const ListItem = styled.p`
//   font-family: Roboto, sans-serif;
// `;

// export const HeaderContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
//     0px 2px 1px rgba(46, 47, 66, 0.16), 0px 2px 6px rgba(46, 47, 66, 0.08);
//   padding: 34px 96px;
// `;

export const NavList = styled.ul`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px 27px;
  font-family: Roboto, sans-serif;
  border: 1px solid #303030;
  border-radius: 12px;
  color: #efede8;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6533c;
    border: 0.5px solid transparent;
  }
`;

// export const ButtonContainer = styled.div`
//   margin-left: 32px;
// `;

// export const UserList = styled.ul`
//   display: flex;
//   margin-left: 16px;
// `;
