import * as React from 'react';
import { Container, Navbar, Offcanvas, Button } from 'react-bootstrap';
import Navi from './Navi';
import { LinkContainer } from 'react-router-bootstrap';
import {LOGO, H1, navbarStyles, navbarBrandStyles} from '../../styles/HeaderStyle';

const Header = () => {

  const [isToggled, setIsToggled] = React.useState(false);

  const toggle = () => {
    setIsToggled(prevIsToggled => !prevIsToggled)
  }

  return (
    <Navbar collapseOnSelect style={navbarStyles} expand="md" onToggle={toggle}>
      <Container fluid>
        <Navbar.Brand style={navbarBrandStyles} href="/">
          <LOGO
              alt="바로짐 로고"
              src="https://i.ibb.co/smK8dwT/Kakao-Talk-20220308-145706090.png"
            />  
          <H1>BAROGYM</H1>
        </Navbar.Brand>
        <Navbar.Toggle/>
        {
          !isToggled ?
            <>
              <Navbar.Collapse className="justify-content-end">
                <Navi/>
                <section>
                  <LinkContainer to="/login">
                    <Button variant="primary" size="sm">로그인</Button>
                  </LinkContainer>
                  <LinkContainer to="/login/signup">
                    <Button variant="primary" size="sm">회원가입</Button>
                  </LinkContainer>
                </section>
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
                  <section>
                    <LinkContainer to="/login">
                      <Button variant="primary" size="sm">로그인</Button>
                    </LinkContainer>
                    <LinkContainer to="/login/signup">
                      <Button variant="primary" size="sm">회원가입</Button>
                    </LinkContainer>
                  </section>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </>
        }
      </Container>

    </Navbar>
  );
};
export default Header;
