import React from 'react';
import {CONTAINER, PAGEHEADER, H1, BUTTON, TWOBUTTONS, GRIDCONTAINER, FORM, TEXTAREA} from '../../../../styles/BoardStyle';
import CommentForm from '../../../component/board/CommentForm';
import CommentList from '../../../component/board/CommentList';
import DetailPagination from '../../../component/board/DetailPagination'

const ReviewUpdatePage = () => {
  return (
    <CONTAINER>
      <PAGEHEADER center>
        <div>
          <h2>처음으로 운동에 흥미를 느끼게 해 준 바로짐</h2>
          <p>2022-03-18</p>
        </div>
        <GRIDCONTAINER>
          <p>수강과정: 필라테스</p>
          <p>작성자: 손혜미</p>
          <p>강사: 김사랑 강사</p>
          <p>별점: ★★★★★</p>
        </GRIDCONTAINER>
        
      </PAGEHEADER>
      <section>
        <FORM>
          <TEXTAREA 
            placeholder='글 내용'
            rows={5}
          />
          <TWOBUTTONS>
            <BUTTON forty>수정하기</BUTTON>
          </TWOBUTTONS>
        </FORM>
      </section>
      <CommentForm />
      <CommentList />
      <DetailPagination />
    </CONTAINER>
  );
};

export default ReviewUpdatePage;