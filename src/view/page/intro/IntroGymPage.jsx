import Carousel from 'react-bootstrap/Carousel'
import "./style.css";
import { H1 } from '../../../styles/MyInfoStyle';

const IntroGymPage = () => {

  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <H1>피트니스 소개</H1>
      <hr></hr>
      
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1561214078-f3247647fc5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>BAROGYM</h3>
            <p>송파구 최대규모의 피트니스 센터</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>BAROGYM</h3>
            <p>피트니스를 위한 최상의 환경을 제공합니다.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1596357395104-ba989e72b5ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>BAROGYM</h3>
            <p>첨단 헬스장비로 운동하는 피트니스 센터</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <h4>
        안녕하세요 송파구 최대규모의 피트니스 센터
        <br />
        바로짐에 오신것을 진심으로 환영합니다.{" "}
      </h4>
      <br />
      <br />

      <div className='intro'>
        <p>
          <img
            className="introImg"
            src="https://images.unsplash.com/photo-1596357395104-ba989e72b5ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="Third slide"
            align="left"
          />
          안녕하세요 송파구 최대규모의 피트니스 센터 바로짐에 오신것을 진심으로
          환영합니다. 바로짐은 최상의 환경을 제공하기 위해 첨단 헬스장비를
          구비해두었습니다. 많이 찾아주십시오.
        </p>
        <br />
        <br />

        <p>
          <img
            className="introImg"
            src="https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Third slide"
            align="right"
          />
          안녕하세요 송파구 최대규모의 피트니스 센터 바로짐에 오신것을 진심으로
          환영합니다. 바로짐은 최상의 환경을 제공하기 위해 첨단 헬스장비를
          구비해두었습니다. 또한 다양한 GX프로그램도 준비해 두었습니다. 이제
          바로짐 스포츠클럽에서 만나보세요! 환영합니다 반가워요
        </p>
        <br />
        <br />
        <br />
        <br />
        <hr></hr>
        <br />
      </div>
    </div>
  );
};

export default IntroGymPage;