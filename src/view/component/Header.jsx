import * as React from 'react';
import { Container, Navbar, Offcanvas, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Navi from './Navi';

const navbarStyles = {
  backgroundColor: 'rgb(254, 139, 121)',
  color: 'white'
}

const navbarBrandStyles = {
  display: 'flex',
  margin: '0 3em 0 0'
}

const Logo = styled.img`
  width: 50px;
  margin-right: 1em;
`

const H1 = styled.h1`
  margin: 0;
  display: flex;
  align-items: center;
  color: white;
`


const Header = () => {

  const [isToggled, setIsToggled] = React.useState(false);

  const toggle = () => {
    setIsToggled(prevIsToggled => !prevIsToggled)
  }

  return (
    <Navbar style={navbarStyles} expand="md" onToggle={toggle}>
      <Container fluid>
        <Navbar.Brand style={navbarBrandStyles} href="/">
          <Logo
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
                  <Button variant="primary" size="sm">로그인</Button>
                  <Button variant="primary" size="sm">회원가입</Button>
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
                    <Button variant="primary" size="sm">로그인</Button>
                    <Button variant="primary" size="sm">회원가입</Button>
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
