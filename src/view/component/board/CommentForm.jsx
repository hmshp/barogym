import React, { useState, useContext } from 'react';
import {CONTAINER, PAGEHEADER, H1, H2, BUTTON, TWOBUTTONS, GRIDCONTAINER, FORM, TEXTAREA} from '../../../styles/BoardStyle';
import UserContext from '../../../userContext';

const CommentForm = (props) => {
  const { userId } = useContext(UserContext)
  const { bno } = props;
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:9000/board/qnaCommentInsert`, {
      method: "POST",
      body: JSON.stringify({
        bno: bno,
        mem_id: userId,
        content: comment
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(result => console.log(result))//제대로 반영됐는데 result는 출력이 아예 안된다;
      .catch(err => {
        console.log(err)
    })
    setComment("")
  }


  return (
    <FORM onSubmit={handleSubmit}>
      <PAGEHEADER>
        <H2>댓글 쓰기</H2>
        <BUTTON>등록</BUTTON>
      </PAGEHEADER>
      <TEXTAREA 
        placeholder='댓글 내용'
        rows={3}
        onChange={handleChange}
      />
    </FORM>
  );
};

export default CommentForm;