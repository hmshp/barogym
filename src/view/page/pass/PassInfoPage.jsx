import React from 'react';
import {PAGEHEADER,STYLEDBUTTON,STYLEDCONTAINER} from '../../../styles/ClassStyle'
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

const PassInfoPage = () => {
  return (
    <div className="pass" style={{ textAlign: "left" }}>
     <STYLEDCONTAINER relative>
        <PAGEHEADER>
          <h1>이용권 안내</h1>
        </PAGEHEADER>
        <img
          className="pass"
          src="https://i.ibb.co/L5rPqKc/2.png"
          alt="pass"
        />

<div>
  <Link to="/pass/buy"> 
  <STYLEDBUTTON2> 이용권 구매 </STYLEDBUTTON2>
</Link>
</div>






     </STYLEDCONTAINER>

    </div>
  );
};

export default PassInfoPage;