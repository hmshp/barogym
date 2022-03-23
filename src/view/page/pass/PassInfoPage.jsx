import React from 'react';
import {PAGEHEADER,STYLEDBUTTON,STYLEDCONTAINER} from '../../../styles/ClassStyle'
import { Link } from 'react-router-dom' 


const PassInfoPage = () => {
  return (
    <div className="pass" style={{ textAlign: "center" }}>
     <STYLEDCONTAINER relative>
        <PAGEHEADER>
          <h1>이용권 안내</h1>
        </PAGEHEADER>
        <img
          className="pass"
          src="https://i.ibb.co/L5rPqKc/2.png"
          alt="pass"
        />

<Link to="/pass/buy"> 
  <STYLEDBUTTON> 이용권 구매 </STYLEDBUTTON>
</Link>





     </STYLEDCONTAINER>

    </div>
  );
};

export default PassInfoPage;