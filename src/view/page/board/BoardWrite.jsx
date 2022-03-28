import React from 'react';
import NoticeWritePage from '../../page/board/notice/NoticeWritePage'
import QnAWritePage from '../../page/board/qna/QnAWritePage'
import ReviewWritePage from '../../page/board/classReview/ReviewWritePage'
import FaqWritePage from '../../page/board/faq/FaqWritePage'
import TransWritePage from '../../page/board/trans/TransWritePage'


const BoardWrite = () => {
  console.log("BoardWrite입니다.")

  const searchPath = window.location.search
  const id = searchPath.split('&')[0].split('=')[1]

  return (
    <>
      {id === 'notice' && <NoticeWritePage id={id} />}
      {id === 'qna' && <QnAWritePage id={id} />}
      {id === 'review' && <ReviewWritePage id={id} />}
      {id === 'faq' && <FaqWritePage id={id} />}
      {id === 'trans' && <TransWritePage id={id} />}
    </>
  );
};

export default BoardWrite;