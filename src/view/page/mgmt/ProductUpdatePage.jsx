import React from 'react';
import {STYLEDBUTTON,PAGEHEADER,STYLEDCONTAINER,STYLEDSECTION,SUBSECTION} from '../../../styles/ClassStyle'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
const ProductListPage = () => {
  return (
    <div>
          <STYLEDCONTAINER relative>
         <PAGEHEADER>
          <h1>상품관리 - 편집모드</h1>
        </PAGEHEADER>     
        <STYLEDSECTION>
          <SUBSECTION> {/**상품명, 가격 */}
          <Card body>  <p> <h4> <strong>GX 5회권 패키지 </strong><br/> 70,000원 </h4> </p></Card> <br/>
          <Card body>  <p> <h4> <strong>GX 10회권 패키지 </strong><br/> 140,000원 </h4> </p> </Card> <br/>
          <Card body>  <p> <h4> <strong>GX 20회권 패키지 </strong><br/> 260,000원 </h4> </p> </Card> <br/>
          <Card body>  <p> <h4> <strong>GX 30회권 패키지 </strong><br/> 380,000원 </h4> </p></Card> <br/>
          <Card body>  <p> <h4> <strong>헬스장 이용권 1개월 </strong><br/> 50,000원 </h4> </p> </Card> <br/>
          <Card body>  <p> <h4> <strong>헬스장 이용권 3개월 </strong><br/> 140,000원 </h4> </p> </Card> <br/>
          <Card body>  <p> <h4> <strong>헬스장 이용권 6개월 </strong><br/> 250,000원 </h4> </p> </Card> <br/>
          <Card body>  <p> <h4> <strong>헬스장 이용권 12개월 </strong><br/> 480,000원 </h4> </p> </Card> <br/>
          <Card body>  <p> <h4> <strong>양도비 </strong><br/> 30,000원 </h4> </p> </Card>

          </SUBSECTION>
          
          <Link to="/mgmt/product/list">
          <STYLEDBUTTON> 수정 완료 </STYLEDBUTTON>
        </Link>
      </STYLEDSECTION>
         </STYLEDCONTAINER>
    </div>
  );
};

export default ProductListPage;