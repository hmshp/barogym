import Carousel from 'react-bootstrap/Carousel'
import "./style.css";
import { H1 } from '../../../styles/MyInfoStyle';


const IntroGymPage = () => {

  return (

      
    <div style={{ textAlign: "center" }}>
      <br />
      <H1>피트니스 소개</H1>
      <hr></hr>   

      <div className="gymInt">       <div className="Gymcontent">
         <h2>BAROGYM 바로짐 소개 
           </h2>

바로짐 피트니스 센터는 스포츠 의학과, 물리치료사, <br/>
체육학과 등 전공자들로 구성된 전문 피트니스입니다.<br/>
보다 많은 사람이 운동 통하여 건강하고 아름다워질 수 있도록<br/>
전공자로서 책임감과 의무감을 가지고 운동을 지도합니다.<br/>
<br/>
GX프로그램으로 스피닝, 필라테스, 요가 등 6명 정원의<br/>
규모 수업을 통하여 회원님들에게 세심한 코칭을 지도하는 동시에,<br/>
재미와 운동 효과를 느낄 수 있게 수업을 설계하였으며,<br/>
고급수업을 합리적인 가격으로 바로짐 피트니스 센터에서<br/>
이용하실 수 있도록 하였습니다.
        </div>

</div>



<div className="gymInt2">       <div className="Gymcontent2">
무용수나 프로운동선수들에게나 적용되어왔던 전문적인<br/>
테스트를 통하여 몸상태를 파악하고, 이에 맞춰 회원님의<br/>
목적성에 맞는 운동을 지도하여 가장 빠르고 효율적으로<br/>
원하는 결과를 만들어드립니다.<br/>
<br/>
2016년의 처음 마음을 끝까지 가져가 회원님들께는 믿고<br/>
다닐 수 있는센터가 되겠습니다. 감사합니다.<br/>
<br/>
<br/>

<div className="ten">
  <h1>바로짐 피트니스 임직원 일동<br/></h1>
</div>

        </div>

</div>

    </div>

  );
};

export default IntroGymPage;