import React, { useEffect, useState } from 'react';
import { Container, Navbar, Offcanvas, Button, ButtonGroup } from 'react-bootstrap';
import Navi from './Navi';
import {LOGO, H1, navbarBrandStyles, BUTTON, buttonStyle, NAVBAR} from '../../styles/HeaderStyle';
import { Link, useNavigate } from 'react-router-dom';
import { deleteCookie, getCookie } from './login/cookie';

const Header = () => {
  const navigate = useNavigate();
  const [isToggled, setIsToggled] = useState(false);
  const [cmemName, setMemName] = useState('');
  const [cmemUid, setMemUid] = useState('');
  
  useEffect(() => {
    setMemName(getCookie('cmem_name'));
    setMemUid(getCookie('cmem_uid'));
  },[]);

  const onLogout = () => {
    console.log(`onLogout 호출`);
    deleteCookie('cmem_name');
    deleteCookie('cmem_uid');
    setMemName('');
    setMemUid('');
    console.log(`onLogout 호출후 ${cmemName},  ${cmemUid}`);
    navigate('/');
  };

  const toggle = () => {
    setIsToggled(prevIsToggled => !prevIsToggled)
  }
  console.log(`getCookie : ${getCookie('cmem_uid')} , ${getCookie('cmem_name')}`);
  //console.log(cmem_name);
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
          cmemName &&
            <>
              <Navbar.Collapse className="justify-content-end">
                <Navi/>
                <ButtonGroup>
                    <BUTTON variant="secondary" style={buttonStyle} onClick={onLogout}>로그아웃</BUTTON>
                    <BUTTON variant="secondary" style={buttonStyle} as={Link} to="/login/modify">정보수정</BUTTON>
                  </ButtonGroup>
              </Navbar.Collapse>
            </>
        }
        {
          !cmemName &&
            <>
              <Navbar.Collapse className="justify-content-end">
                <Navi/>
                <ButtonGroup>
                    <BUTTON variant="secondary" style={buttonStyle} as={Link} to="/login">로그인</BUTTON>
                    <BUTTON variant="secondary" style={buttonStyle} as={Link} to="/login/signup">회원가입</BUTTON>
                  </ButtonGroup>
              </Navbar.Collapse>
            </>
        }
      </Container>
    </NAVBAR>
  );
};
export default Header;