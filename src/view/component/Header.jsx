import * as React from 'react';
import { Container, Navbar, Offcanvas, Button, ButtonGroup } from 'react-bootstrap';
import Navi from './Navi';
import {LOGO, H1, navbarBrandStyles, BUTTON, buttonStyle, NAVBAR} from '../../styles/HeaderStyle';
import { Link } from 'react-router-dom';

const Header = () => {

  const [isToggled, setIsToggled] = React.useState(false);

  const toggle = () => {
    setIsToggled(prevIsToggled => !prevIsToggled)
  }

  return (
    <NAVBAR collapseOnSelect expand="md" onToggle={toggle}>
      <Container fluid>
        <Navbar.Brand style={navbarBrandStyles} href="/">
          <LOGO
              alt="바로짐 로고"
              src="https://i.ibb.co/xD3kQPV/barogym-logo.png"
            />  
          <H1>BAROGYM</H1>
        </Navbar.Brand>
        <Navbar.Toggle/>
        {
          !isToggled ?
            <>
              <Navbar.Collapse className="justify-content-end">
                <Navi/>
                <ButtonGroup>
                    <BUTTON variant="secondary" style={buttonStyle} as={Link} to="/login">로그인</BUTTON>
                    <BUTTON variant="secondary" style={buttonStyle} as={Link} to="/login/signup">회원가입</BUTTON>
                  </ButtonGroup>
              </Navbar.Collapse>
            </>
          :
            <>
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
              >
                <Offcanvas.Body>
                  <Navi/>
                  <ButtonGroup>
                    <BUTTON variant="secondary" as={Link} to="/login">로그인</BUTTON>
                    <BUTTON variant="secondary" as={Link} to="/login/signup">회원가입</BUTTON>
                  </ButtonGroup>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </>
        }
      </Container>
    </NAVBAR>
  );
};
export default Header;
