import React, { useContext } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import UserContext from '../../userContext';

const Navi = () => {
  const { userId } = useContext(UserContext)

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
          <LinkContainer to={"/board/list?id=notice"}>
            <NavDropdown.Item>공지사항</NavDropdown.Item>
          </LinkContainer> 
          <LinkContainer to={"/board/list?id=qna"}>
            <NavDropdown.Item>1:1문의</NavDropdown.Item>
          </LinkContainer>  
          <LinkContainer to={"/board/list?id=faq"}>
            <NavDropdown.Item>자주하는질문</NavDropdown.Item>
          </LinkContainer>  
        </NavDropdown>
        <NavDropdown title="이용권">
          <LinkContainer to="/pass/info">
            <NavDropdown.Item>이용권안내</NavDropdown.Item>
          </LinkContainer>  
          <LinkContainer to="/pass/request">
            <NavDropdown.Item>이용권 신청</NavDropdown.Item>
          </LinkContainer>  
        </NavDropdown>
        {
          typeof userId !== 'undefined' &&
          <NavDropdown title="수업 예약">
            <LinkContainer to="/class/appointment">
              <NavDropdown.Item>수업 예약</NavDropdown.Item>
            </LinkContainer>  
            <LinkContainer to="/class/schedule">
              <NavDropdown.Item>예약 내역</NavDropdown.Item>
            </LinkContainer>  
          </NavDropdown>
        }
        
        {
          typeof userId !== 'undefined' &&
          <NavDropdown title="마이페이지">
            <LinkContainer to="/myInfo">
              <NavDropdown.Item>내 정보</NavDropdown.Item>
            </LinkContainer>  
            <LinkContainer to="/myInfo/pass">
              <NavDropdown.Item>내 이용권</NavDropdown.Item>
            </LinkContainer>  
            <LinkContainer to="/myInfo/request">
              <NavDropdown.Item>신청 내역</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/myInfo/posts">
              <NavDropdown.Item>내 문의글</NavDropdown.Item>
            </LinkContainer>  
          </NavDropdown>
        }
      </Nav>      
    </>
  );
}

export default Navi;