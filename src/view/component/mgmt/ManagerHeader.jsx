import React, {useEffect, useState} from 'react';
import { Container, Navbar, Offcanvas, Button } from 'react-bootstrap';
import ManagerNavi from "./ManagerNavi";
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom'
import {LOGO, H1, NAVBAR, navbarBrandStyles, BUTTON, MANAGERLOGOUTBTN, buttonStyle} from '../../../styles/HeaderStyle';
import { deleteCookie, getCookie } from '../login/cookie';

const ManagerHeader = () => {
  const navigate = useNavigate();
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


  const [isToggled, setIsToggled] = React.useState(false);

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
        <Navbar.Collapse className="justify-content-end">
          <ManagerNavi/>
          <MANAGERLOGOUTBTN variant="secondary" style={buttonStyle} onClick={onLogout}>로그아웃</MANAGERLOGOUTBTN>
        </Navbar.Collapse>
      </Container>
    </NAVBAR>

  );
  //로그아웃 버튼 누르고 새로고침 눌러야 쿠키 변경사항이 반영이 돼서 ManagerHeader 대신 Header가 렌더링된다
};
export default ManagerHeader;
