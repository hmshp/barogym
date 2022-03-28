import React, { useState, useEffect } from 'react';
import { CONTAINER, PAGEHEADER, H1, BUTTON, TRANSBUTTON, TWOBUTTONS, GRIDCONTAINER, FORM, TEXTAREA, RIGHTDIV } from '../../../../styles/BoardStyle';
import CommentForm from '../../../component/board/CommentForm';
import CommentList from '../../../component/board/CommentList';
import { boardDeleteDB, boardDetailDB } from '../../../../service/dbLogic';
import DetailPagination from '../../../component/board/DetailPagination';
import TransModal from '../../../component/board/trans/TransModal'
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

const TransDetailPage = (props) => {
  const { id, bno } = props;
  const [detail, setDetail] = useState({});
  const navigate = useNavigate();

  const [modalShow, setModalShow] = React.useState(false);

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
    navigate(`/board/trans/list?page=1`);
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
      <TRANSBUTTON onClick={() => setModalShow(true)} thick>양도하기</TRANSBUTTON>
      <TransModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <section>
        <div dangerouslySetInnerHTML={{__html:detail.MASTER_CONTENT}}></div>
        <TWOBUTTONS>
          <BUTTON gray forty onClick={()=>{boardDelete()}}>삭제</BUTTON>
          <LinkContainer to={`/board/trans/update?bno=${bno}`}>
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

export default TransDetailPage;