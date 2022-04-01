import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navi = () => {
  // const param = useLocation();

  // console.log(param)

  return(
    <>
      <Nav>
        <NavDropdown title="피트니스">
          <LinkContainer to="/intro/gym">
            <NavDropdown.Item>피트니스 소개</NavDropdown.Item>
          </LinkContainer>  
          <LinkContainer to="/intro/teacher">
            <NavDropdown.Item>강사소개</NavDropdown.Item>
          </LinkContainer>  
          <LinkContainer to="/intro/class">
            <NavDropdown.Item>프로그램</NavDropdown.Item>
          </LinkContainer>  
          <LinkContainer to="/intro/location">
            <NavDropdown.Item>매장위치</NavDropdown.Item>
          </LinkContainer>  
        </NavDropdown>
        <NavDropdown title="커뮤니티">
          <LinkContainer to={"/board/list?id=notice&page=1"}>
            <NavDropdown.Item>공지사항</NavDropdown.Item>
          </LinkContainer> 
          <LinkContainer to={"/board/list?id=qna&page=1"}>
            <NavDropdown.Item>1:1문의</NavDropdown.Item>
          </LinkContainer>  
          <LinkContainer to={"/board/list?id=faq&page=1"}>
            <NavDropdown.Item>자주하는질문</NavDropdown.Item>
          </LinkContainer>  
        </NavDropdown>
        <NavDropdown title="이용권">
          <LinkContainer to="/pass/info">
            <NavDropdown.Item>이용권안내</NavDropdown.Item>
          </LinkContainer>  
          <LinkContainer to="/pass/buy">
            <NavDropdown.Item>이용권구매</NavDropdown.Item>
          </LinkContainer>  
        </NavDropdown>
        <NavDropdown title="수업 예약">
          <LinkContainer to="/class/appointment">
            <NavDropdown.Item>수업예약</NavDropdown.Item>
          </LinkContainer>  
          <LinkContainer to="/class/schedule">
            <NavDropdown.Item>수업일정</NavDropdown.Item>
          </LinkContainer>  
        </NavDropdown>
        <NavDropdown title="마이페이지">
          <LinkContainer to="/myInfo">
            <NavDropdown.Item>내 정보</NavDropdown.Item>
          </LinkContainer>  
          <LinkContainer to="/myInfo/PayList">
            <NavDropdown.Item>구매한 이용권</NavDropdown.Item>
          </LinkContainer>  
          <LinkContainer to="/myInfo/posts">
            <NavDropdown.Item>내 게시글</NavDropdown.Item>
          </LinkContainer>  
        </NavDropdown>
      </Nav>      
    </>
  );
}

export default Navi;