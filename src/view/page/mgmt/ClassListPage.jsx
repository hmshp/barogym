import React from 'react';
import {PAGEHEADER,H1, STYLEDCONTAINER,STYLEDBUTTON,STYLEDSECTION,SUBSECTION} from '../../../styles/ClassStyle'
import { useNavigate } from 'react-router-dom';
import ProductList from '../../component/mgmt/ProductList';
import { BUTTON } from '../../../styles/MyInfoStyle';
import ClassList from '../../component/mgmt/ClassList';
const ClassListPage = () => {
  const navigate = useNavigate();
  return (
    <STYLEDCONTAINER>
      <PAGEHEADER>
        <H1>수업 관리</H1>
        <BUTTON onClick={() => navigate('/mgmt/class/insert')}>수업 추가</BUTTON>
        {/* <Link to="/mgmt/product/update"> 
          <STYLEDBUTTON >편집모드 </STYLEDBUTTON>
        </Link> */}
      </PAGEHEADER>

      <STYLEDSECTION>
        <ClassList />
      </STYLEDSECTION>
    </STYLEDCONTAINER>
  );
};

export default ClassListPage;