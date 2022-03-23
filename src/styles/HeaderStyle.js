import styled from 'styled-components';
import {Button} from 'react-bootstrap';

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

export const navbarStyles = {
  backgroundColor: 'rgb(254, 139, 121)',
  color: 'white'
}

export const navbarBrandStyles = {
  display: 'flex',
  margin: '0 3em 0 0'
}

export const BUTTON = styled(Button)`
  background-color: rgb(254, 139, 121);
  border: none;
  font-weight: 800;
  &:hover {
    background-color: rgb(235, 125, 110);
  }
  &:active {
    background-color: rgb(235, 125, 110);
  }
`