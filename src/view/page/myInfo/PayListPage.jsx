import React from 'react';
import styled from 'styled-components';
import {STYLEDCONTAINER, PAGEHEADER, STYLEDSECTION, SUBSECTION} from '../../../styles/MyInfoStyle'

const STYLEDBUTTON = styled.button`
  background-color: rgb(254, 139, 121);
  color: white;
  padding: 0.5em 1em;
  border-radius: 4px;
  border: none;
`

const PayListPage = () => {
  return (
    <STYLEDCONTAINER>
      <PAGEHEADER>
        <h1>구매한 이용권</h1>
        <STYLEDBUTTON>이용권 구매</STYLEDBUTTON>
      </PAGEHEADER>
      <STYLEDSECTION>
        <SUBSECTION>
          <h2>그룹레슨 120일 20회</h2>
          <h3>2022.02.19 - 2022.06.16</h3>
        </SUBSECTION>
        <SUBSECTION>
          <p>잔여 일수: <strong>106일</strong>/120일</p>
          <p>잔여 일수: <strong>17회</strong>/20회</p>
        </SUBSECTION>
      </STYLEDSECTION>
    </STYLEDCONTAINER>
  );
};

export default PayListPage;