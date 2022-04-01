import React, { useEffect, useState, useContext } from 'react';
import { Container, Navbar, Offcanvas, Button, ButtonGroup } from 'react-bootstrap';
import Navi from './Navi';
import {LOGO, H1, navbarBrandStyles, BUTTON, buttonStyle, NAVBAR} from '../../styles/HeaderStyle';
import { Link, useNavigate } from 'react-router-dom';
import { deleteCookie, getCookie } from './login/cookie';

const Header = () => {
  const navigate = useNavigate();
  const [isToggled, setIsToggled] = useState(false);
  //강사님은 수업 때 isLoggedin state 만들어서 submit할 때 이걸 true로 하고, 이 state 값에 따라 다른 컴포넌트들을 렌더링했다.(지금은 cmemName을 갖고 조건부 렌더링하고 있음)

  //쿠키 연결이 풀렸 때를 대비하고 화면 렌더링 변화가 요구될 때
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
    // 공공장소 등에서 내 정보가 남아있으면 좋지 않으니.. 초기화
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