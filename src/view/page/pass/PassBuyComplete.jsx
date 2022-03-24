import React from 'react';
import {PAGEHEADER,SUBSECTION,STYLEDCONTAINER} from '../../../styles/ClassStyle'
import { Link } from 'react-router-dom' 
import styled from 'styled-components';

export const STYLEDBUTTON2 = styled.button`
  background-color: ${(props) => (props.gray ? "gray" : "rgb(254, 139, 121)")};
  color: white;
  padding: 0.5em 1em;
  margin-bottom: 20px;
  border-radius: 4px;
  border: none;
  @media (min-width: 800px) {
  }
`;

const PassBuyComplete = () => {
  return (
<div>
<STYLEDCONTAINER>
    <PAGEHEADER>
          <h1>결제 완료</h1>
        </PAGEHEADER>

          <div>
        <SUBSECTION>
        <p> <h3><strong>이용권 구매</strong> 가 <strong>완료</strong>되었습니다.</h3>
      </p>
      </SUBSECTION>

          </div>

      <SUBSECTION>
          <h2>그룹수업 5회권 패키지</h2>
          <h3>70,000원</h3>
        </SUBSECTION>
        <SUBSECTION>

      <p>      <strong>이용권 정보 </strong>
        그룹수업 5회권 패키지</p>

          <p> <strong>이용권 시작일자 </strong> 2022.02.23 수요일</p>
         
     </SUBSECTION>

      <Link to="/">
<STYLEDBUTTON2> 홈 화면으로</STYLEDBUTTON2>
</Link>

</STYLEDCONTAINER>

</div>
  );
};

export default PassBuyComplete;