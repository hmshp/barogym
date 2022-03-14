import React from 'react';
import { PAGEHEADER, H1, STYLEDCONTAINER } from '../../../styles/MyInfoStyle';
import MyPostsPagination from "../../component/myInfo/MyPostsPagination"
import MyPostsSearchBar from '../../component/myInfo/MyPostsSearchBar';
import MyPosts from '../../component/myInfo/MyPostsList';

const MyPostsPage = () => {
  

  return (
    <STYLEDCONTAINER>
      <PAGEHEADER>
        <H1>내 게시글</H1>
      </PAGEHEADER>
      <MyPosts />
      <MyPostsPagination />
      <MyPostsSearchBar />
    </STYLEDCONTAINER>
  );
};

export default MyPostsPage;