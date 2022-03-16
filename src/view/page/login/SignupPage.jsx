import React from 'react';
import LoginForm from '../../component/login/LoginForm';
import {H1, BUTTON, ITEM, CONTAINER, P, PAGEHEADER} from '../../../styles/MembershipStyle';
import { LinkContainer } from 'react-router-bootstrap';
import SignUpForm from '../../component/login/SignUpForm';

const SignupPage = () => {
  return (
    <CONTAINER>
      <PAGEHEADER>
        <H1>회원가입</H1>
      </PAGEHEADER>
      <SignUpForm />
    </CONTAINER>
  );
};

export default SignupPage;