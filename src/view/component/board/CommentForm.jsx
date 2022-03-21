import React from 'react';
import {CONTAINER, PAGEHEADER, H1, H2, BUTTON, TWOBUTTONS, GRIDCONTAINER, FORM, TEXTAREA} from '../../../styles/BoardStyle';
const ReviewCommentForm = () => {
  return (
    <FORM>
      <PAGEHEADER>
        <H2>댓글 쓰기</H2>
        <BUTTON>등록</BUTTON>
      </PAGEHEADER>
      <TEXTAREA 
        placeholder='댓글 내용'
        rows={3}
      />
    </FORM>
  );
};

export default ReviewCommentForm;