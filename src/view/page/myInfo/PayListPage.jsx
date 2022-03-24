import React from 'react';
import styled from 'styled-components';
import {CONTAINER, PAGEHEADER, SUBSECTION, H1} from '../../../styles/MyInfoStyle'
import { LinkContainer } from 'react-router-bootstrap';

const STYLEDBUTTON = styled.button`
  background-color: rgb(254, 139, 121);
  color: white;
  padding: 0.5em 1em;
  border-radius: 4px;
  border: none;
`

const PayListPage = () => {
  return (
    <CONTAINER>
      <PAGEHEADER>
        <H1>구매한 이용권</H1>
        <LinkContainer to="/pass/buy">
          <STYLEDBUTTON>이용권 구매</STYLEDBUTTON>
        </LinkContainer>
      </PAGEHEADER>
      <main>
        <CONTAINER flex>
          <SUBSECTION>
            <h2>그룹레슨 120일 20회</h2>
            <h3>2022.02.19 - 2022.06.16</h3>
          </SUBSECTION>
          <SUBSECTION>
            <p>잔여 일수: <strong>106일</strong>/120일</p>
            <p>잔여 횟수: <strong>17회</strong>/20회</p>
          </SUBSECTION>
        </CONTAINER>
      </main>
    </CONTAINER>
  );
};

export default PayListPage;