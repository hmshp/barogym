import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import {CONTAINER, PAGEHEADER, SUBSECTION, H1, BUTTON} from '../../../styles/MyInfoStyle'
import { LinkContainer } from 'react-router-bootstrap';
import { themeColor } from '../../../styles/GlobalStyle';
import UserContext from '../../../userContext';

const MyPassPage = () => {
  const { userId } = useContext(UserContext)
  const [passInfo, setPassInfo] = useState([]);

  console.log(passInfo)

  useEffect(() => {
    fetch(`http://localhost:9000/pass/passList?mem_id=${userId}`)
    .then(res => res.json())
    .then(result => setPassInfo(result[0]))
  }, [])
  
  return (
    <CONTAINER>
      <PAGEHEADER>
        <H1>내 이용권</H1>
      </PAGEHEADER>
      <main>
        {
          passInfo ?
          <CONTAINER flex>
            <SUBSECTION>
              <h2>
                {passInfo.PROD_NAME}
              </h2>
              <h3>{passInfo.PASS_SDAY} ~ {passInfo.PASS_EDAY}</h3>
            </SUBSECTION>
            <SUBSECTION>
              <p>
                잔여 {passInfo.PROD_TYPE === 0 ? "일수: " : "횟수: "}
                &nbsp;<strong>{passInfo.PASS_CNT}</strong>&nbsp;/ {passInfo.PROD_AMOUNT}
              </p>
            </SUBSECTION>
        </CONTAINER>
        :
        <p>이용권이 없습니다.</p>
        }
        
      </main>
    </CONTAINER>
  );
};

export default MyPassPage;