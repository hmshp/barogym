import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ManagerNavi = () => {
  // const param = useLocation();

  // console.log(param)

  return(
    <>
      <Nav>
        <NavDropdown NavDropdown title="커뮤니티">
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
        <NavDropdown title="출결 관리">
          <LinkContainer to="/intro/gym">
            <NavDropdown.Item>출결</NavDropdown.Item>
          </LinkContainer>  
        </NavDropdown>
        <NavDropdown title="매장 관리">
          <LinkContainer to={"/mgmt/member/list?page=1"}>
            <NavDropdown.Item>회원 관리</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to={"/mgmt/request/list?page=1"}>
            <NavDropdown.Item>신청 관리</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to={"/mgmt/teacher/list?page=1"}>
            <NavDropdown.Item>강사 관리</NavDropdown.Item>
          </LinkContainer>  
          <LinkContainer to={"/board/review/list?page=1"}>
            <NavDropdown.Item>수업 관리</NavDropdown.Item>
          </LinkContainer>  
          <LinkContainer to={"/mgmt/product/list"}>
            <NavDropdown.Item>상품 관리</NavDropdown.Item>
          </LinkContainer>  
        </NavDropdown>
      </Nav>      
    </>
  );
}

export default ManagerNavi;