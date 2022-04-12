import React from 'react';
import { PAGEHEADER, H1, CONTAINER } from '../../../styles/MyInfoStyle';
import MyPostsPagination from "../../component/myInfo/MyPostsPagination"
import MyPostsSearchBar from '../../component/myInfo/MyPostsSearchBar';
import MyPosts from '../../component/myInfo/MyPostsList';

const MyPostsPage = () => {

  
  return (
    <CONTAINER>
      <PAGEHEADER>
        <H1>내 문의글</H1>
      </PAGEHEADER>
      <main>
        <MyPosts />
        <MyPostsPagination />
        <MyPostsSearchBar />
      </main>
    </CONTAINER>
  );
};

export default MyPostsPage;