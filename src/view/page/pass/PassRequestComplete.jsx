import React from 'react';
import {PAGEHEADER,SUBSECTION,STYLEDCONTAINER} from '../../../styles/ClassStyle'
import { Link } from 'react-router-dom' 
import styled from 'styled-components';
import { H1 } from '../../../styles/MyInfoStyle';
import { themeColor } from '../../../styles/GlobalStyle';

export const STYLEDBUTTON2 = styled.button`
  background-color: ${(props) => (props.gray ? "gray" : themeColor)};
  color: white;
  padding: 0.5em 1em;
  margin-bottom: 20px;
  border-radius: 4px;
  border: none;
  @media (min-width: 800px) {
  }
`;

const PassRequestComplete = () => {
  return (
<div>
<STYLEDCONTAINER>

    <PAGEHEADER>
      <H1>신청 완료</H1>
    </PAGEHEADER>

    <div>
      <SUBSECTION>
        <h3><strong>이용권 신청</strong>이 <strong>완료</strong>되었습니다.</h3>
      </SUBSECTION>
    </div>
      <Link to="/">
        <STYLEDBUTTON2> 홈 화면으로</STYLEDBUTTON2>
      </Link>

  </STYLEDCONTAINER>

</div>
  );
};

export default PassRequestComplete;