import styled from 'styled-components';
import {Button, Navbar} from 'react-bootstrap';
import breakpoint from './breakpoint';
import { themeColor } from './GlobalStyle';

export const LOGO = styled.img`
  width: 50px;
  margin-right: 1em;
`

export const H1 = styled.h1`
  margin: 0;
  display: flex;
  align-items: center;
  color: white;
`

export const NAVBAR = styled(Navbar)`
  background-color: ${themeColor};
  color: white;
  @media only screen and (min-width: ${breakpoint.size.xl}) {
    padding: 2em 0;
  }
  z-index: 99;
`

export const navbarBrandStyles = {
  display: 'flex',
  margin: '0 3em 0 0'
}

export const BUTTON = styled(Button)`
  background-color: transparent;
  border: none;
  font-weight: 800;
  margin: 0 0.5em;
  @media only screen and (max-width: 991px) {
    margin-left: 0;
    margin-right: 1em;
    margin-top: 0.5em;
  }
  text-decoration: none;
  color: white;
  &:hover {
    color: white;
  }
  &:active {
    color: white;
  }
`
export const LOGOUTBUTTON = styled(BUTTON)`
  margin-left: 0.3em;
  @media only screen and (max-width: 990px) {
    margin: 0;
    padding-left: 0;
  }
`

export const MANAGERLOGOUTBTN = styled(LOGOUTBUTTON)`
  margin-left: 0.5em;
    @media only screen and (max-width: ${breakpoint.size.sm}) {
    margin: 0;
    padding-left: 0;
  }
`
export const buttonStyle = {
  backgroundColor: "transparent",
  border: "none",
}
