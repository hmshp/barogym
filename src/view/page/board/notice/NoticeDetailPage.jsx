import React from 'react';
import {CONTAINER, PAGEHEADER, H1, BUTTON, TWOBUTTONS, GRIDCONTAINER, FORM, TEXTAREA} from '../../../../styles/BoardStyle';
import CommentForm from '../../../component/board/CommentForm';
import CommentList from '../../../component/board/CommentList';
import DetailPagination from '../../../component/board/DetailPagination'
import { LinkContainer } from 'react-router-bootstrap';

const NoticeDetailPage = () => {
  return (
    <CONTAINER>
      <PAGEHEADER center>
        <div>
          <h2>코로나 사회적거리두기 개편안 관련 안내 / 영업시간 변경 안내</h2>
          <p>2022-03-18</p>
        </div>
        <GRIDCONTAINER>
          <p>작성자: 관리자</p>
        </GRIDCONTAINER>
        
      </PAGEHEADER>
      <section>
          <div>글 내용입니다.</div>
          <TWOBUTTONS>
            <BUTTON gray forty>삭제</BUTTON>
              <LinkContainer to={`/board/notice/update`}>
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