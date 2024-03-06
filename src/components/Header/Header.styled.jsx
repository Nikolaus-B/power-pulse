import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px; /* Відступ між логотипом та навігацією */
`;

export const ListItem = styled.p`
  font-family: Roboto, sans-serif;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
              0px 2px 1px rgba(46, 47, 66, 0.16),
              0px 2px 6px rgba(46, 47, 66, 0.08);
  padding: 34px 96px;
`;

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

export const ButtonContainer = styled.div`
  margin-left: 32px;
`;

export const UserList = styled.ul`
  display: flex;
  margin-left: 16px; /* Відступ між логотипом та навігацією */
`;