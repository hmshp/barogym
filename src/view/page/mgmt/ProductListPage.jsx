import React from 'react';
import {PAGEHEADER,H1, STYLEDCONTAINER,STYLEDBUTTON,STYLEDSECTION,SUBSECTION} from '../../../styles/ClassStyle'
import { Link } from 'react-router-dom';
import ProductList from '../../component/mgmt/ProductList';
const ProductListPage = () => {
  return (
    <STYLEDCONTAINER>
      <PAGEHEADER>
        <H1>상품 관리</H1>
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