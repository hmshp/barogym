import React, { useState, useEffect, useContext } from 'react';
import {CONTAINER, PAGEHEADER, H1, H2, BUTTON, TWOBUTTONS, COMMENTWRITER, FORM, TEXTAREA} from '../../../styles/BoardStyle';
import UserContext from '../../../userContext';

const CommentList = (props) => {
  const { userId } = useContext(UserContext)
  const [isDisabled, setIsDisabled]  = useState(true);
  const { bno } = props;
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment]  = useState({
    no: 0,
    content: ""
  });


  const handleChange = (event) => {
    setComment(prevComment => ({...prevComment, content: event.target.value}))
  }

  const onEditMode = (event) => {
    console.log(event.target.name)
    setIsDisabled(false)
    setComment(prevComment => ({...prevComment, no: event.target.name}))
  }

  useEffect(() => {
    fetch(`http://localhost:9000/board/qnaCommentList?bno=${bno}`)
      .then(res => res.json())
      .then(result => setCommentList(result))
  }, [])

  // commentList.filter(comment => comment.QC_NO === )

  //배열로 받으니 댓글 개수가 1개라도 map 썼다
  const commentElements = commentList.map(comment => {
    return (
      <article key={comment.QC_NO}>
        {
          isDisabled &&//관리자든 아니든 누구에게나 보이는 요소(관리자 입장에선 수정 버튼 클릭 전)
            <>
              <p>{comment.QC_DATE}</p>
              <TEXTAREA 
                rows={3}
                value={comment.QC_CONTENT}
                disabled={isDisabled}
                onChange={handleChange}
              />
            </>
        }
        {
          !isDisabled && //수정 버튼 클릭 후(관리자만 클릭 가능. 관리자에게만 수정 버튼이 보이니까)
          <>
            <p>{comment.QC_DATE}</p>
            <TEXTAREA 
              rows={3}
              value={comment.QC_CONTENT}
              disabled={isDisabled}
              onChange={handleChange}
            />
            <TWOBUTTONS flexEnd>
              <BUTTON onClick={onEditMode}>변경</BUTTON>
              <BUTTON gray>취소</BUTTON>
            </TWOBUTTONS>
          </>
        }
        {
          isDisabled && userId === "admin123" &&//관리자가 수정 버튼 클릭하기 전
          <TWOBUTTONS flexEnd>
            <BUTTON name={comment.QC_NO} onClick={onEditMode} gray>수정</BUTTON>
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

export default CommentList;