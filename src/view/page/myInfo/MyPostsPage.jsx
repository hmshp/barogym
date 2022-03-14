import React from 'react';
import { PAGEHEADER, H1, STYLEDCONTAINER } from '../../../styles/MyInfoStyle';
import {Table} from 'react-bootstrap';
import MyPostsPagination from "../../component/myInfo/MyPostsPagination"
import MyPostsSearchBar from '../../component/myInfo/MyPostsSearchBar';

const MyPostsPage = () => {
  const posts = [
    {
      title: "이용권 양도합니다",
      date: "2022-03-11",
      boardType: "양도게시판"
    },
    {
      title: "주차 이용시간 문의",
      date: "2022-03-02",
      boardType: "1:1 문의"
    },
    {
      title: "스피닝 관련 문의",
      date: "2022-02-01",
      boardType: "1:1 문의"
    },
  ]

  const myPostsElements = posts.map(post => {
    return (
      <tr key={post.title}>
        <td>{post.title}</td>
        <td>{post.date}</td>
        <td>{post.boardType}</td>
      </tr>
    )
  })

  return (
    <STYLEDCONTAINER>
      <PAGEHEADER>
        <H1>내 게시글</H1>
      </PAGEHEADER>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>제목</th>
            <th>등록일</th>
            <th>게시판명</th>
          </tr>
        </thead>
        <tbody>
          {myPostsElements}
        </tbody>
      </Table>
      <MyPostsPagination />
      <MyPostsSearchBar />
    </STYLEDCONTAINER>
  );
};

export default MyPostsPage;