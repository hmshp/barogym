import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ManagerNavi = () => {
  // const param = useLocation();

  // console.log(param)

  return(
    <>
      <Nav>
        <NavDropdown title="출결 관리">
          <LinkContainer to="/intro/gym">
            <NavDropdown.Item>출결</NavDropdown.Item>
          </LinkContainer>  
        </NavDropdown>
        <NavDropdown title="매장 관리">
          <LinkContainer to={"/mgmt/member/list?page=1"}>
            <NavDropdown.Item>회원 관리</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to={"/mgmt/enrollment/list?page=1"}>
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
          <LinkContainer to={"/board/faq/list?page=1"}>
            <NavDropdown.Item>결제 관리</NavDropdown.Item>
          </LinkContainer>  
          <LinkContainer to={"/mgmt/income/list"}>
            <NavDropdown.Item>매출</NavDropdown.Item>
          </LinkContainer>  
        </NavDropdown>
      </Nav>      
    </>
  );
}

export default ManagerNavi;