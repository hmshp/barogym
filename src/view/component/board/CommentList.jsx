import React, { useState, useEffect, useContext } from 'react';
import {CONTAINER, PAGEHEADER, H1, H2, BUTTON, TWOBUTTONS, COMMENTWRITER, FORM, TEXTAREA} from '../../../styles/BoardStyle';
import UserContext from '../../../userContext';

const CommentList = (props) => {
  const { userId } = useContext(UserContext)
  const [isDisabled, setIsDisabled]  = useState(true);
  const [comment, setComment]  = useState();
  const [commentNo, setCommentNo] = useState();//댓글 번호
  const { bno } = props;
  const [commentList, setCommentList] = useState([]);

  console.log(bno, comment, commentNo)

  const handleChange = (event) => {
    setComment(event.target.value)
  }

  const onEditMode = (event) => {
    setIsDisabled(false)//textarea 수정할 수 있도록 disabled 속성 해제
    setCommentNo(event.target.name)//현재 어떤 댓글 아래 있는 수정 버튼을 클릭했는지 알 수 있도록
  }

  const handleSubmit = () => {
    fetch(`http://localhost:9000/board/qnaCommentUpdate`, {
      method: "POST",
      body: JSON.stringify({
        bno: bno,
        content: comment,
        qc_no: commentNo
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(result => console.log(result))

      window.location.reload();
  }

  const handleDelete = (event) => {
    setCommentNo(event.target.name)

    fetch(`http://localhost:9000/board/qnaCommentDelete?bno=${bno}&qc_no=${commentNo}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(result => console.log(result))

      window.location.reload();
  }

  useEffect(() => {
    fetch(`http://localhost:9000/board/qnaCommentList?bno=${bno}`)
      .then(res => res.json())
      .then(result => setCommentList(result))
  }, [])

  //배열로 받으니 댓글 개수가 1개라도 map 썼다
  const commentElements = commentList.map(item => {
    return (
      <article key={item.QC_NO}>
        <p>{item.QC_DATE}</p>
        <TEXTAREA 
          rows={3}
          value={isDisabled ? item.QC_CONTENT : comment}//수정모드 아닐 땐 DB에서 불러온 댓글 내용, 수정모드일 땐 현재 textarea 안에 있는 값을 담기
          disabled={isDisabled}
          onChange={handleChange}
        />
        {
          !isDisabled &&//수정모드 활성화 후(관리자모드에서만 가능. 관리자모드에서만 수정 버튼이 보이니까)
          //취소 버튼 누르면 수정모드 비활성화
          <TWOBUTTONS flexEnd>
            <BUTTON onClick={handleSubmit}>변경</BUTTON>
            <BUTTON gray onClick={() => setIsDisabled(true)}>취소</BUTTON>
          </TWOBUTTONS>
        }
        {isDisabled && userId === "admin123" &&//관리자모드이고 수정모드 활성화 전
          <TWOBUTTONS flexEnd>
            <BUTTON name={item.QC_NO} onClick={onEditMode} gray>수정</BUTTON>
            <BUTTON gray name={item.QC_NO} onClick={handleDelete}>삭제</BUTTON>
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