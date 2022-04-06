import React, { useState, useEffect, useContext } from 'react';
import {Table} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../../userContext';

const MyPosts = () => {
  const { userId } = useContext(UserContext);
  const navigate = useNavigate();

  const [posts, myPosts] = useState([]);
  
  console.log(posts)

  useEffect(() => {
    fetch(`http://localhost:9000/board/boardList?id=myInfo&mem_id=${userId}`)
    .then(res => res.json())
    .then(result => myPosts(result))
  }, [])

  const myPostsElements = posts.map((post, index) => {
    return (
      <tr key={post.QNA_BNO} onClick={() => navigate(`/board/detail?id=qna&bno=${post.QNA_BNO}`)}>
        <td>{post.QNA_BNO}</td>
        <td>{post.TITLE}</td>
        <td>{post.BOARD_DATE}</td>
      </tr>
    )
  })

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>글 번호</th>
          <th>제목</th>
          <th>등록일</th>
        </tr>
      </thead>
      <tbody>
        {myPostsElements}
      </tbody>
    </Table>
  );
};

export default MyPosts;