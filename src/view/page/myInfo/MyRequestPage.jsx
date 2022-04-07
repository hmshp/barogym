import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import {CONTAINER, PAGEHEADER, SUBSECTION, H1, BUTTON} from '../../../styles/MyInfoStyle'
import { LinkContainer } from 'react-router-bootstrap';
import { themeColor } from '../../../styles/GlobalStyle';
import UserContext from '../../../userContext';

const MyRequestPage = () => {
  const { userId } = useContext(UserContext)
  const [ requestInfo, setRequestInfo ] = useState({});

  console.log(requestInfo)

  useEffect(() => {
    fetch(`http://localhost:9000/request/myRequestList?mem_id=${userId}`)
    .then(res => res.json())
    .then(result => setRequestInfo(result[0]))
  }, [])
  
  return (
    <CONTAINER>
      <PAGEHEADER>
        <H1>이용권 신청 내역</H1>
      </PAGEHEADER>
      <main>
        {
          requestInfo ?
          <CONTAINER flex>
            <SUBSECTION>
              <h2>
                {requestInfo.PROD_NAME}
              </h2>
              <h3>시작 날짜: {requestInfo.REQ_DATE}</h3>
            </SUBSECTION>
        </CONTAINER>
        :
        <p>신청 내역이 없습니다.</p>
        }
        
      </main>
    </CONTAINER>
  );
};

export default MyRequestPage;