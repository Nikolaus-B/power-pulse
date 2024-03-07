import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 151px; 
  height: auto;
  padding: 34px 0 33px 0;

  @media (max-width: 768px) {
    width: 126px;
    padding: 24px 0 24px 20px;
  }
`;

export const HeaderContainer = styled.div`
  
  display: flex;
  align-items: center;
  font-size: 1rem;
  border-bottom: 1px solid #303030;
  padding: 0px 96px;

  ${props => (props.showBottomBorder ? 'border-bottom: 1px solid #303030;' : '')}
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: inherit;
  margin-left: auto;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 16px;
  align-items: center;
  list-style-type: none;
  margin-right: 16px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px 27px;
  font-family: Roboto, sans-serif;
  border: 1px solid #303030;
  border-radius: 12px;
  color: #efede8;
  transition: background-color 0.3s ease;
  font-size: 16px;

  &:hover {
    background-color: #e6533c;
    border: 1px solid transparent;
  }
`;

export const LogOutBtn = styled.button`
  background-color: transparent;
  color: #efede8;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const NavBtn = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
`;

export const NavLinkLogout = styled(NavLink)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
`;

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid',
    borderRadius: '12px',
    borderColor: 'rgba(239, 237, 232, 0.2)',
    backgroundColor: 'rgba(16, 16, 15, 1)',
    padding: 0,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.707)',
    zIndex: 1001,
  },
};

export const AvatarLink = styled.a`
  display: inline-block;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid #e6533c;
  overflow: hidden;
  background-color: #3030304d;
`;
