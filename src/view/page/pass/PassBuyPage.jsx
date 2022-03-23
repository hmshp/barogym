import React from 'react';
import {PAGEHEADER,STYLEDBUTTON,STYLEDCONTAINER} from '../../../styles/ClassStyle'
import { Link } from 'react-router-dom' 

const PassBuyPage = () => {
  return (
    <div>
      <STYLEDCONTAINER>
    <PAGEHEADER>
          <h1>이용권 구매</h1>
        </PAGEHEADER>
        <form name="orderform" id="orderform" method="post"
          class="orderform" action="/Order" >

          <div class="basket" id="basket">
            <div class="PassPrice">
            <input type="checkbox" className="checkbox" />
            <strong> GX 패키지 5회 </strong>70,000원
              <span> <i class="fas fa-arrow-alt-circle-down down"></i></span>
                <input
                  type="text" name="p_num1"
                  id="p_num1" size="2"
                  maxlength="4" class="p_num" value="1"
                />
                <span> <i class="fas fa-arrow-alt-circle-up up"></i></span>
            </div>
            <div class="PassPrice">
            <input type="checkbox" className="checkbox" />
            <strong> GX 패키지 10회 </strong>140,000원
              <span> <i class="fas fa-arrow-alt-circle-down down"></i></span>
                <input
                  type="text" name="p_num1"
                  id="p_num1" size="2"
                  maxlength="4" class="p_num" value="1"
                />
                <span> <i class="fas fa-arrow-alt-circle-up up"></i></span>
            </div>
            <div class="PassPrice">
            <input type="checkbox" className="checkbox" />
              <strong> GX 패키지 20회 </strong>260,000원
              <span> <i class="fas fa-arrow-alt-circle-down down"></i></span>
                <input
                  type="text" name="p_num1"
                  id="p_num1" size="2"
                  maxlength="4" class="p_num" value="1"
                />
                <span> <i class="fas fa-arrow-alt-circle-up up"></i></span>
            </div>
            <div class="PassPrice">
            <input type="checkbox" className="checkbox" />
            <strong> GX 패키지 30회 </strong>380,000원
              <span> <i class="fas fa-arrow-alt-circle-down down"></i></span>
                <input
                  type="text" name="p_num1"
                  id="p_num1" size="2"
                  maxlength="4" class="p_num" value="1"
                />
                <span> <i class="fas fa-arrow-alt-circle-up up"></i></span>
            </div>
            <div class="PassPrice">
            <input type="checkbox" className="checkbox" />
            <strong> 헬스장 이용권 1개월 </strong>50,000원
              <span> <i class="fas fa-arrow-alt-circle-down down"></i></span>
                <input type="text" name="p_num1"
                  id="p_num1" size="2"
                  maxlength="4" class="p_num" value="1" />
              <span> <i class="fas fa-arrow-alt-circle-up up"></i></span>
            </div>
            <div class="PassPrice">
            <input type="checkbox" className="checkbox" />
            <strong> 헬스장 이용권 3개월 </strong>140,000원
              <span> <i class="fas fa-arrow-alt-circle-down down"></i></span>
                <input type="text" name="p_num1"
                  id="p_num1" size="2"
                  maxlength="4" class="p_num" value="1" />
              <span> <i class="fas fa-arrow-alt-circle-up up"></i></span>
            </div>
            <div class="PassPrice">
            <input type="checkbox" className="checkbox" />
              
              <strong> 헬스장 이용권 6개월 </strong>250,000원
              <span> <i class="fas fa-arrow-alt-circle-down down"></i></span>
                <input type="text" name="p_num1"
                  id="p_num1" size="2"
                  maxlength="4" class="p_num" value="1" />
              <span> <i class="fas fa-arrow-alt-circle-up up"></i></span>
            </div>
            <div class="PassPrice">
            <input type="checkbox" className="checkbox" />
            <strong> 헬스장 이용권 12개월 </strong>480,000원
     
              <span> <i class="fas fa-arrow-alt-circle-down down"></i></span>
                <input type="text" name="p_num1"
                  id="p_num1" size="2"
                  maxlength="4" class="p_num" value="1" />
              <span> <i class="fas fa-arrow-alt-circle-up up"></i></span>
            </div>

            </div>
            <br/>
            <p><strong>총 합계 : 70,000원</strong></p>

            <Link to="/pass/buyComplete">
<STYLEDBUTTON> 결제하기 </STYLEDBUTTON>
</Link>





        </form>



      </STYLEDCONTAINER>
    
    </div>
  );
};

export default PassBuyPage;