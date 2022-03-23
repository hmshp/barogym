/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "./intro/style.css"
import { Route, Link } from 'react-router-dom';

const HomePage = () => {
  return (
   <div>
      <Carousel class="opacity">
  <Carousel.Item>
    <img
      className="homeImg"
      src="https://i.ibb.co/MndR7bt/gym-gcdd3176ab-1920.jpg"
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="homeImg"
      src="https://i.ibb.co/9Wbf6yp/workout-g6445426c7-1920.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="homeImg"
      src="https://i.ibb.co/P9ySqz0/mark-bertulfo-XKim-W0pke6w-unsplash.jpg"
      alt="Third slide"
    />
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


      <Link to="./intro/gym">
      <img  className="homeImg2"
      src="https://i.ibb.co/JdtWhcb/image.png"
      alt="fitness">
      </img>
      </Link>

      <Link to="/intro/class">
      <img  className="homeImg2"
      src="https://i.ibb.co/9nmyfCM/image.png"
      alt="GX">
      </img>
      </Link>

      <Link to="./intro/teacher">
      <img  className="homeImg2"
      src="https://i.ibb.co/HqR1SWH/image.png" 
      alt="teacher">
      </img>
      </Link>


     
    </div>
  );
};

export default HomePage;