import React from 'react';
import NoticeWritePage from '../../page/board/notice/NoticeWritePage'
import QnAWritePage from '../../page/board/qna/QnAWritePage'
import FaqWritePage from '../../page/board/faq/FaqWritePage'


const BoardWrite = () => {
  console.log("BoardWrite입니다.")

  const searchPath = window.location.search
  const id = searchPath.split('&')[0].split('=')[1]

  return (
    <>
      {id === 'notice' && <NoticeWritePage id={id} />}
      {id === 'qna' && <QnAWritePage id={id} />}
      {id === 'faq' && <FaqWritePage id={id} />}
    </>
  );
};

export default BoardWrite;