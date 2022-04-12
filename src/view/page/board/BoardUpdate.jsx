import React from 'react';
import NoticeUpdatePage from '../../page/board/notice/NoticeUpdatePage'
import QnAUpdatePage from '../../page/board/qna/QnAUpdatePage'
import FaqUpdatePage from '../../page/board/faq/FaqUpdatePage'

const BoardUpdate = () => {
  console.log("BoardUpdate입니다")

  const searchPath = window.location.search
  const id = searchPath.split('&')[0].split('=')[1]
  const bno = searchPath.split('&')[1].split('=')[1]
  return (
    <>
      {id === 'notice' && <NoticeUpdatePage id={id} bno={bno} />}
      {id === 'qna' && <QnAUpdatePage id={id} bno={bno} />}
      {id === 'faq' && <FaqUpdatePage id={id} bno={bno} />}
    </>
  );
};

export default BoardUpdate;