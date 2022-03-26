import React, { useState, useEffect } from 'react';
import {CONTAINER, PAGEHEADER, H1, BUTTON, TWOBUTTONS, GRIDCONTAINER, FORM, TEXTAREA} from '../../../../styles/BoardStyle';
import CommentForm from '../../../component/board/CommentForm';
import CommentList from '../../../component/board/CommentList';
import DetailPagination from '../../../component/board/DetailPagination'
import { boardDeleteDB, boardDetailDB } from '../../../../service/dbLogic';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

const NoticeDetailPage = () => {
  const id = `${useLocation().pathname.split('/')[1]}/${useLocation().pathname.split('/')[2]}`.slice(6)
  const bno = window.location.search.split('&')[1].split('=')[1]
  console.log(id, bno)
  
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
    navigate(`/board/notice/list?page=1`);
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
          <LinkContainer to={`/board/notice/update?bno=${bno}`}>
            <BUTTON forty>수정</BUTTON>
          </LinkContainer>   
        </TWOBUTTONS>
      </section>
      <CommentForm />
      <CommentList />
      <DetailPagination />
    </CONTAINER>
  );
};

export default NoticeDetailPage;