import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  /* max-width: 1280px; */
  margin: 0 auto;
  padding: 0 40px;
  /* background-color: aqua; */
`;

export const Header = styled.header`
padding: 24px 0;

  border-bottom: 1px solid oldlace;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.5);
`;

export const HeaderContainer = styled.div`
  /* margin: 0 auto; */
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  margin-left: 40px;
`;

export const NavList = styled.ul`
margin: 0;

  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Link = styled(NavLink)`
  /* padding: 30px 0; */
  font-weight: 600;
  font-size: 24px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  &:hover,
  &:focus {
    color: mediumpurple;
  }
  &.active {
    color: slateblue;
  }
`;

// darkslateblue

export const Item = styled.li`
list-style: none;
`;

