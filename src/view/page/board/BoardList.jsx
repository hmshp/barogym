import React from 'react';
import NoticeListPage from '../../page/board/notice/NoticeListPage'
import QnAListPage from '../../page/board/qna/QnAListPage'
import FaqListPage from '../../page/board/faq/FaqListPage'

const BoardList = () => {
  console.log("BoardList입니다")

  const searchPath = window.location.search
  const id = searchPath.split('&')[0].split('=')[1]
  console.log(id)
  return (
    <>
      {id === 'notice' && <NoticeListPage id={id} />}
      {id === 'qna' && <QnAListPage id={id} />}
      {id === 'faq' && <FaqListPage id={id} />}
    </>
  );
};

export default BoardList;