import React from 'react';
import NoticeDetailPage from '../../page/board/notice/NoticeDetailPage'
import QnADetailPage from '../../page/board/qna/QnADetailPage'
import ReviewDetailPage from '../../page/board/classReview/ReviewDetailPage'
import FaqDetailPage from '../../page/board/faq/FaqDetailPage'
import TransDetailPage from '../../page/board/trans/TransDetailPage'

const BoardDetail = () => {
  console.log("BoardDetail입니다")

  const searchPath = window.location.search
  const id = searchPath.split('&')[0].split('=')[1]
  const bno = searchPath.split('&')[1].split('=')[1]
  console.log(id, bno)
  return (
    <>
      {id === 'notice' && <NoticeDetailPage id={id} bno={bno} />}
      {id === 'qna' && <QnADetailPage id={id} bno={bno} />}
      {id === 'review' && <ReviewDetailPage id={id} bno={bno} />}
      {id === 'faq' && <FaqDetailPage id={id} bno={bno} />}
      {id === 'trans' && <TransDetailPage id={id} bno={bno} />}
    </>
  );
};

export default BoardDetail;