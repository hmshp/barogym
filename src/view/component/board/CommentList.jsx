import React, { useContext } from 'react';
import {CONTAINER, PAGEHEADER, H1, H2, BUTTON, TWOBUTTONS, COMMENTWRITER, FORM, TEXTAREA} from '../../../styles/BoardStyle';
import UserContext from '../../../userContext';

const ReviewCommentList = () => {
  const userId = useContext(UserContext)
  return (
    <FORM>
      <PAGEHEADER>
        <H2>등록된 댓글</H2>
      </PAGEHEADER>
      <article>
        <p>손혜미 | 2022-03-04</p>
        <TEXTAREA 
          placeholder='댓글 내용'
          rows={3}
          value="좋은 글 감사합니다."
          disabled
        />
        {userId == "admin123" &&
          <TWOBUTTONS flexEnd>
            <BUTTON gray>수정</BUTTON>
            <BUTTON gray>삭제</BUTTON>
          </TWOBUTTONS>
        }
        
      </article>
      <article>
        <p>김사랑 | 2022-03-04</p>
        <TEXTAREA 
          placeholder='안녕하세요.'
          rows={3}
          disabled
        />
        {userId == "admin123" &&
          <TWOBUTTONS flexEnd>
            <BUTTON gray>수정</BUTTON>
            <BUTTON gray>삭제</BUTTON>
          </TWOBUTTONS>
        }
      </article>
    </FORM>
  );
};

export default ReviewCommentList;