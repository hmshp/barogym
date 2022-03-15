import React from 'react';
import LoginForm from '../../component/login/LoginForm';
import {CENTEREDSECTION, H1, BUTTON, ITEM, CONTAINER, P} from '../../../styles/MembershipStyle';
import { LinkContainer } from 'react-router-bootstrap';

const LoginPage = () => {
  return (
    <CONTAINER>
      <CENTEREDSECTION>
        <H1>로그인</H1>
        <div>
          <h2>바로짐에 오신 것을 환영합니다.</h2>
          <p>바로짐 회원으로 가입하시면 다양한 서비스를 이용하실 수 있습니다.</p>
        </div>
      </CENTEREDSECTION>
      <LoginForm />
      <ITEM>
        <P>아직 바로짐 회원이 아니신가요?</P>
        <BUTTON gray>회원가입</BUTTON>
      </ITEM>
      <ITEM>
        <P>회원 이메일을 잊으셨나요?</P>
        <LinkContainer to="/login/findEmail">
          <BUTTON gray>이메일 찾기</BUTTON>
        </LinkContainer>
        
      </ITEM>
      <ITEM>
        <P>비밀번호를 잊으셨나요?</P>
        <LinkContainer to="/login/resetPwd">
          <BUTTON gray>비밀번호 변경</BUTTON>
        </LinkContainer>
      </ITEM>
    </CONTAINER>
  );
};

export default LoginPage;