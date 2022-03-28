import React from 'react';
import NoticeListPage from '../../page/board/notice/NoticeListPage'
import QnAListPage from '../../page/board/qna/QnAListPage'
import ReviewListPage from '../../page/board/classReview/ReviewListPage'
import FaqListPage from '../../page/board/faq/FaqListPage'
import TransListPage from '../../page/board/trans/TransListPage'

const BoardList = () => {
  console.log("BoardList입니다")

  const searchPath = window.location.search
  const id = searchPath.split('&')[0].split('=')[1]
  console.log(id)
  return (
    <>
      {id === 'notice' && <NoticeListPage id={id} />}
      {id === 'qna' && <QnAListPage id={id} />}
      {id === 'review' && <ReviewListPage id={id} />}
      {id === 'faq' && <FaqListPage id={id} />}
      {id === 'trans' && <TransListPage id={id} />}
    </>
  );
};

export default BoardList;