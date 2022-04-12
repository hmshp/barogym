import React from 'react';
import {PAGEHEADER,H1, STYLEDCONTAINER,STYLEDBUTTON,STYLEDSECTION,SUBSECTION} from '../../../styles/ClassStyle'
import { useNavigate } from 'react-router-dom';
import ProductList from '../../component/mgmt/ProductList';
import { BUTTON } from '../../../styles/MyInfoStyle';
const ProductListPage = () => {
  const navigate = useNavigate();
  return (
    <STYLEDCONTAINER>
      <PAGEHEADER>
        <H1>상품 관리</H1>
        <BUTTON onClick={() => navigate('/mgmt/product/insert')}>상품 추가</BUTTON>
        {/* <Link to="/mgmt/product/update"> 
          <STYLEDBUTTON >편집모드 </STYLEDBUTTON>
        </Link> */}
      </PAGEHEADER>

      <STYLEDSECTION>
        <ProductList />
      </STYLEDSECTION>
    </STYLEDCONTAINER>
  );
};

export default ProductListPage;