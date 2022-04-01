import React, { useState, useEffect, useContext } from 'react';
import {CONTAINER, PAGEHEADER, H1, BUTTON, TWOBUTTONS, GRIDCONTAINER, FORM, TEXTAREA} from '../../../../styles/BoardStyle';
import CommentForm from '../../../component/board/CommentForm';
import CommentList from '../../../component/board/CommentList';
import { boardDeleteDB, boardDetailDB } from '../../../../service/dbLogic';
import DetailPagination from '../../../component/board/DetailPagination'
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import UserContext from '../../../../userContext'

const QnADetailPage = (props) => {
  const userId = useContext(UserContext)

  const { id, bno } = props;
  const [detail, setDetail] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const boardDetail = async() => {
      const res = await boardDetailDB(id ,bno);
      console.log(res);
      setDetail(res.data[0]);
    }
    boardDetail();
  },[setDetail, id , bno])

  const boardDelete = async() => {
    const board = {
      id: id,
      bno : bno
    }
    boardDeleteDB(board);
    navigate(`/board/qna/list?page=1`);
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
        <TWOBUTTONS>
          <BUTTON gray forty onClick={()=>{boardDelete()}}>삭제</BUTTON>
          <LinkContainer to={`/board/qna/update?bno=${bno}`}>
            <BUTTON forty>수정</BUTTON>
          </LinkContainer>
        </TWOBUTTONS>
      </section>
      {userId === "admin123" && <CommentForm />}
      <CommentList />
      <DetailPagination />
    </CONTAINER>
  );
};

export default QnADetailPage;