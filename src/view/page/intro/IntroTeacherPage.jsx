import React from 'react';
import { H1 } from '../../../styles/MyInfoStyle';
import "./style.css";


const IntroTeacherPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
    <br />
      <H1>강사 소개</H1>
      <hr></hr>

      <img
        className="teacher"
        src="https://i.ibb.co/KKmDRyC/11111.png"
        alt="Third slide"
      />
      <img
        className="teacher"
        src="https://i.ibb.co/kmfZx00/2222222.png" 
        alt="Third slide"
      />


    </div>
  );
};

export default IntroTeacherPage;