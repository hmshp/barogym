/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "./intro/style.css"
import { Route, Link } from 'react-router-dom';
import styled, {css} from 'styled-components';

export const STYLEDCONTAINER = styled.div`
  margin: 0 auto;
  @media(min-width: 800px) {
    ${props =>
    !props.pwCheck &&
    css`
      padding: 0 10em;
    `}
  }
  width: 100%;
  ${props =>
  props.relative &&
  css`
    position: relative;
  `}
`



const HomePage = () => {
  return (
    <STYLEDCONTAINER>
    <div style={{ textAlign: "center" }}>
      <Carousel>
        <Carousel.Item>
          <img className="homeImg"
            src="https://i.ibb.co/MndR7bt/gym-gcdd3176ab-1920.jpg"
            alt="First slide" />
          <Carousel.Caption>
            <h3>BAROGYM</h3>
            <p>송파구 최대규모의 피트니스 센터</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

<div className='button'>
  
      <Link to="/board/notice/list/*">
      <img  className="homeButton"
      src="https://i.ibb.co/hYsQnBq/11.png"
      alt="공지">
      </img>
      </Link>

      <Link to="/board/review/list/*">
      <img  className="homeButton"
      src="https://i.ibb.co/q9h4y0s/444.png"
      alt="수강후기">
      </img>
      </Link>

      <Link to="/board/qna/list/*">
      <img  className="homeButton"
      src="https://i.ibb.co/FYcKjFS/33.png"
      alt="1:1">
   </img>
      </Link>

      <Link to="/class/appointment">
      <img  className="homeButton"
      src="https://i.ibb.co/yNyG0tg/22.png" 
      alt="예약">
      </img>
      </Link>

</div>

<div>
        <Link to="./intro/gym">
      <img  className="homeImg2"
      src="https://i.ibb.co/JdtWhcb/image.png"
      alt="fitness">
      </img>
      </Link>
</div>

<div>
        <Link to="/intro/class">
      <img  className="homeImg2"
      src="https://i.ibb.co/9nmyfCM/image.png"
      alt="GX">
      </img>
      </Link>
</div>

<div>
        <Link to="./intro/teacher">
      <img  className="homeImg2"
      src="https://i.ibb.co/HqR1SWH/image.png" 
      alt="teacher">
      </img>
      </Link>
</div>


    </div>  
  </STYLEDCONTAINER>
     
  );
};

export default HomePage;