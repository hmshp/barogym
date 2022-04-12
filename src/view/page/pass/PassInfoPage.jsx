import React from 'react';
import {STYLEDCONTAINER,PAGEHEADER} from '../../../styles/ClassStyle'
import { Link } from 'react-router-dom' 
import styled from 'styled-components';
import { H1 } from '../../../styles/MyInfoStyle';
import './pass.css';
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

const PassInfoPage = () => {
  return (
    <div className="pass" style={{ textAlign: "left" }}>
     <STYLEDCONTAINER relative>
        <PAGEHEADER>
          <H1>이용권 안내</H1>
        </PAGEHEADER>




<div className="PassImg">
          <img className="passImg"
          src="https://i.ibb.co/k41dQDC/003-3.png"
          alt="pass"
        />
</div>

<div className="button">
  <Link to="/pass/buy"> 
  <STYLEDBUTTON2> 이용권 신청</STYLEDBUTTON2>
</Link>
</div>


     </STYLEDCONTAINER>


    </div>
  );
};

export default PassInfoPage;