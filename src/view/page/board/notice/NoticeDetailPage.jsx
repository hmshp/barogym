import React, { useState, useEffect, useContext } from 'react';
import {CONTAINER, PAGEHEADER, H1, BUTTON, TWOBUTTONS, GRIDCONTAINER, FORM, TEXTAREA} from '../../../../styles/BoardStyle';
import CommentForm from '../../../component/board/CommentForm';
import CommentList from '../../../component/board/CommentList';
import DetailPagination from '../../../component/board/DetailPagination'
import { boardDeleteDB, boardDetailDB } from '../../../../service/dbLogic';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import UserContext from '../../../../userContext'

const NoticeDetailPage = (props) => {
  const { userName } = useContext(UserContext)
  const { id, bno } = props;
  const [isDisabled, setIsDisabled]  = useState(true);
  const [detail, setDetail] = useState({});
  const navigate = useNavigate();
  console.log(detail.MASTER_TITLE)

  useEffect(() => {
    fetch(`http://localhost:9000/board/boardDetail/?id=${id}&bno=${bno}`)
      .then(res => res.json())
      .then(result => setDetail(result[0]))
  },[id , bno])

  const boardDelete = () => {
    fetch(`http://localhost:9000/board/boardDelete`, {
      method: "POST",
      body: JSON.stringify({
        id: id,
        bno: bno
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(result => console.log(result))
    
    navigate(`/board/list?id=${id}&page=1`);
  } 
  



  return (
    <CONTAINER>
      <PAGEHEADER center>
        <div>
          <h2>{detail.MASTER_TITLE}</h2>
          <p>{detail.MASTER_DATE}</p>
        </div>
        <GRIDCONTAINER>
          <p>작성자: {detail.MEM_NAME}</p>
        </GRIDCONTAINER>
        
      </PAGEHEADER>
      <section>
        <div dangerouslySetInnerHTML={{__html:detail.MASTER_CONTENT}}></div>
        {
          userName === detail.MEM_NAME &&
          <TWOBUTTONS>
            <BUTTON gray forty onClick={boardDelete}>삭제</BUTTON>
            <LinkContainer to={`/board/update?id=${id}&bno=${bno}`}>
              <BUTTON footerStyles forty>수정</BUTTON>
            </LinkContainer>   
          </TWOBUTTONS>
        }
        
      </section>
      <DetailPagination />
    </CONTAINER>
  );
};

export default NoticeDetailPage;