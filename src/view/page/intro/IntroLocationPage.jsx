import React from 'react';
import { H1 } from '../../../styles/MyInfoStyle';
import KakaoMap from '../../component/intro/KakaoMap';

const IntroLocationPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <H1>매장위치</H1>
      <hr></hr>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center" }}>
        <KakaoMap />
      </div>
      <img
        className="location"
        src="https://i.ibb.co/MDTXm7W/2.png"
        alt="subway-bus"
      />
      <img
        className="location"
        src="https://i.ibb.co/JFNGRZP/44.png"
        alt="time"
      />
    </div>
  );
};

export default IntroLocationPage;