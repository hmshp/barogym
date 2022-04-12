import React from 'react';
import NoticeDetailPage from '../../page/board/notice/NoticeDetailPage'
import QnADetailPage from '../../page/board/qna/QnADetailPage'
import FaqDetailPage from '../../page/board/faq/FaqDetailPage'

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
      {id === 'faq' && <FaqDetailPage id={id} bno={bno} />}
    </>
  );
};

export default BoardDetail;