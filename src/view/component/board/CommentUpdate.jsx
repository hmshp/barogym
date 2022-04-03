import React, { useState, useEffect, useContext } from 'react';
import {CONTAINER, PAGEHEADER, H1, H2, BUTTON, TWOBUTTONS, COMMENTWRITER, FORM, TEXTAREA} from '../../../styles/BoardStyle';
import UserContext from '../../../userContext';

const ReviewCommentList = (props) => {
  const { userId } = useContext(UserContext)
  const { bno } = props;
  const [commentList, setCommentList] = useState([]);
  console.log('userId:' + userId)

  useEffect(() => {
    fetch(`http://localhost:9000/board/qnaCommentList?bno=${bno}`)
      .then(res => res.json())
      .then(result => setCommentList(result))
  }, [])

  const commentElements = commentList.map(comment => {
    return (
      <article key={comment.QC_NO}>
        <p>{comment.QC_DATE}</p>
        <TEXTAREA 
          rows={3}
          value={comment.QC_CONTENT}
          disabled
        />
        {userId == "admin123" &&
          <TWOBUTTONS flexEnd>
            <BUTTON gray>수정</BUTTON>
            <BUTTON gray>삭제</BUTTON>
          </TWOBUTTONS>
        }
      </article>
    )
  })


  return (
    <section>
      <PAGEHEADER>
        <H2>등록된 댓글</H2>
      </PAGEHEADER>
      {commentElements}
    </section>
  );
};

export default ReviewCommentList;