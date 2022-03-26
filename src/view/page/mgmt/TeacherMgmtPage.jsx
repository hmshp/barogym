import React from 'react';
import { PAGEHEADER, H1, CONTAINER } from '../../../styles/MyInfoStyle';
import MyPostsPagination from "../../component/myInfo/MyPostsPagination"
import MyPostsSearchBar from '../../component/myInfo/MyPostsSearchBar';
import TeacherMgmt from '../../component/mgmt/TeacherMgmt';

const TeacherMgmtPage = () => {
  
  return (
    <CONTAINER>
      <PAGEHEADER>
        <H1>강사 관리</H1>
      </PAGEHEADER>
      <main>
        <TeacherMgmt />
        <MyPostsPagination />
        <MyPostsSearchBar />
      </main>
    </CONTAINER>
  );
};

export default TeacherMgmtPage;