/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "./intro/style.css"
import { Route, Link } from 'react-router-dom';
import styled, {css} from 'styled-components';
import KakaoMap from '../component/intro/KakaoMap';
import { height } from '@mui/system';
import Fade from 'react-reveal/Fade';

class FadeExample extends React.Component {
  render() {
  return (
    <div style={{ textAlign: "center" }}>


<div className="cropped">
<img src="https://pix6.agoda.net/hotelImages/984/984193/984193_16091415470046449754.jpg"
/>
</div>


<div className="Main">
<Fade top>  <h2>바로짐 피트니스</h2>
  <h1 className="a">BAROGYM <br/> FITNESS CENTER</h1>
    <span>활력 있는 생활을 추구하는 <br/>
     당신을 위한 맞춤 공간</span></Fade>
</div>


      <div className="img">        
      <div className="homeText"> 
        <Fade top>
            <h1>BAROGYM</h1>
            <h4>공지사항 및 프로모션</h4>
            </Fade>            
            <Link to="./board/list?id=notice&page=1"> 
            <button className="btn">더 알아보기</button>
            </Link>
 </div>
 </div>



    <div className="img2">
        <div className="content2">
        <Link className="textLink"
                        to="./intro/gym">   

<div className="two">   
<h1>피트니스 소개 <br/>
  <span>Fitness Introduction</span>
</h1>
</div>
</Link>
</div>
</div>


<div className="img3">
        <div className="content3">
        <Link className="textLink"
                        to="./intro/class">   
<div className="two">   
<h1>프로그램 소개<br/>
  <span>program Introduction</span>
</h1>
</div>
</Link>
</div>
</div>

<div className="img4">
        <div className="content4">
        <Link className="textLink"
                        to="./intro/teacher">   
<div className="two">   
<h1>트레이너 소개<br/>
  <span>trainer Introduction</span>
</h1>
</div>
</Link>
</div>
</div>


<div className="img5">
        <div className="content5">
          <Fade top>
             <h1>BAROGYM</h1>
            <h4>이용권 및 가격 안내</h4>                
          </Fade>
          <h5> <Link to="./pass/info"> 
            <button className="btn2" >
        더 알아보기
    </button> </Link> </h5> 
        </div>
        <div className="img-cover"></div>
    </div>
<br/>
<div>

<div className="img6">
        <h2 className="a">찾아오시는 길</h2>
      
        <h1 className="d"> 
        <span>잠실역 도보 5분거리의<br/>
      최다 기구 보유 대형 피트니스 센터<br/>
      바로짐
      </span></h1>
      <span className="map">
      <KakaoMap />
      </span>
        </div>
        </div>

</div>


     
  );
} }

export default FadeExample;