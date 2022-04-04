import React from 'react';
import { PAGEHEADER, H1, CONTAINER, BUTTON } from '../../../styles/MyInfoStyle';
import MyPostsPagination from "../../component/myInfo/MyPostsPagination"
import MyPostsSearchBar from '../../component/myInfo/MyPostsSearchBar';
import RequestMgmt from '../../component/mgmt/RequestMgmt'

const RequestMgmtPage = () => {
  const handleAdmit = () => {

  }
  
  return (
    <CONTAINER>
      <PAGEHEADER>
        <H1>신청 관리</H1>
      </PAGEHEADER>
      <main>
        <RequestMgmt />
        <MyPostsPagination />
        <MyPostsSearchBar />
      </main>
    </CONTAINER>
  );
};

export default RequestMgmtPage;