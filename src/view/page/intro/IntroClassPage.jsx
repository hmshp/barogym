import Carousel from 'react-bootstrap/Carousel'
import "./style.css";
import { H1 } from '../../../styles/MyInfoStyle';


const IntroClassPage = () => {

  return (

      
    <div style={{ textAlign: "center" }}>
      <br />
      <H1>프로그램 소개</H1>
      <hr></hr>   
{/*스피닝 */}
      <div className="Spinnig">
        <h2 className="a">스피닝  <span className="b">SPINNING</span></h2>
        
        <span className="c">실내에서 하는 가장 강력한 유산소 운동<br/>
                        폭발적인 칼로리 소모, 스피닝!</span>

        <h1 className="d"> 
        <span>실내고정식바이크에서 페달링을 하며 재미난 <br/>
        여러가지 안무들과 함께 재미있게 운동하는 스피닝!<br />
        스피닝은 실내에서 자전거를 타며 강사의 리드에 따라진행되는 <br />
      고강도 유산소 운동으로, 다이어트에 좋은 유산소 운동입니다.
</span></h1>
</div>

{/*필라테스 */}
<div className="Pila">
        <h2 className="a">필라테스  <span className="b">PILATES</span></h2>
        
        <span className="c">
        소규모 그룹레슨으로 전문강사가 그룹회원의 동작과<br/>
움직임을 티칭하는 레슨 프로그램</span>

        <h1 className="d"> 
        <span>필라테스 운동은 다른 운동들과 달리 고강도 트레이닝이라는 <br />
개념보다는 동작을 학습하며 인지하고,  <br />신체를 단련하며 가꿔나가는 과정입니다. <br />
리포머, 바렐, 체어 등 기구를 사용한 필라테스 <br />
      코어근육 강화와 자세, 체형 교정에 좋은 운동입니다. <br />
</span></h1>

        </div>
{/*요가 */}
<div className="Yoga">
        <h2 className="a">요가  <span className="b">YOGA</span></h2>
        
        <span className="c">
마음의 수련 + 몸의 수련<br/>
남녀노소 누구나 편안한 마음으로 건강을 만들 수 있는 YOGA!</span>

        <h1 className="d"> 
        <span>
      명상과 호흡, 스트레칭등이 결합된 복합적인 몸과 마음<br />
수련 방법을 요가 라고 합니다.<br />
몸의 관절과 근육을 자극시켜, 유연하게 하는 것이므로<br />
유연하지 않아도, 남녀노소 모두가 하기에 좋은 운동입니다.<br />
</span></h1>

        </div>




    </div>

  );
};

export default IntroClassPage;