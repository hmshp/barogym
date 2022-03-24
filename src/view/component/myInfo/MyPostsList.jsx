import React from 'react';
import {Table} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MyPosts = () => {

  const navigate = useNavigate();

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

  const myPostsElements = posts.map((post, index) => {
    return (
      <tr key={post.title} onClick={() => navigate(`/board/trans/detail?page=1&bno=${index}`)}>
        <td>{post.title}</td>
        <td>{post.date}</td>
        <td>{post.boardType}</td>
      </tr>
    )
  })

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>제목</th>
          <th>등록일</th>
          <th>카테고리</th>
        </tr>
      </thead>
      <tbody>
        {myPostsElements}
      </tbody>
    </Table>
  );
};

export default MyPosts;