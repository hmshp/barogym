import React from 'react';
import { H1 } from '../../../styles/MyInfoStyle';

const IntroClassPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <H1>프로그램 소개</H1>
      <hr></hr>
      <p>
        <img
          className="programProcess"
          src="https://i.ibb.co/6nrFBmx/program1.png"
          alt="program1"
        />
      </p>
      <hr></hr>
      <p>
        <img
          className="programimg"
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1
          &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="diet"
        />
      </p>
      <h1>퍼스널 트레이닝</h1>
      인바디 측정 후 알맞은 식단과 운동 프로그램 설계 후 <br />
      전문 트레이너와 함께 1:1 퍼스널 트레이닝으로
      <p>
        <img
          className="programimg"
          src="https://i.ibb.co/M5BMvM9/trust-tru-katsande-A-fts-Th53l-M-unsplash.jpg"
          alt="spinning"
        />
      </p>
      <h1>스피닝</h1>
      스피닝은 실내에서 자전거를 타며 강사의 리드에 따라진행되는 <br />
      고강도 유산소 운동으로, 다이어트에 좋은 유산소 운동입니다.
      <p>
        <img
          className="programimg"
          src="https://i.ibb.co/tJRXy8G/dylan-gillis-YJd-CZba0-TYE-unsplash.jpg"
          alt="yoga"
        />
      </p>
      <h1>요가</h1>
      요가는 명상과 호흡, 스트레칭이 결합된 심신 수련방법으로, <br />
      현대인의 스트레스 받은 몸을 안정시키는 치유목적의 운동입니다.
      <p>
        <img
          className="programimg"
          src="https://cdn.pixabay.com/photo/2017/01/03/07/52/weights-1948813_960_720.jpg"
          alt="pilates"
        />
      </p>
      <h1>필라테스</h1>
      리포머, 바렐, 체어 등 기구를 사용한 필라테스 운동 <br />
      코어근육 강화와 자세, 체형 교정에 좋은 운동입니다.
      <br />
      <br />
    </div>
  );
};

export default IntroClassPage;