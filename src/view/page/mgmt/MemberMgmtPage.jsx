import React from 'react';
import { PAGEHEADER, H1, CONTAINER } from '../../../styles/MyInfoStyle';
import MyPostsPagination from "../../component/myInfo/MyPostsPagination"
import MyPostsSearchBar from '../../component/myInfo/MyPostsSearchBar';
import MemberMgmt from '../../component/mgmt/MemberMgmt'

const MemberMgmtPage = () => {
  
  return (
    <CONTAINER>
      <PAGEHEADER>
        <H1>회원 관리</H1>
      </PAGEHEADER>
      <main>
        <MemberMgmt />
        <MyPostsPagination />
        <MyPostsSearchBar />
      </main>
    </CONTAINER>
  );
};

export default MemberMgmtPage;