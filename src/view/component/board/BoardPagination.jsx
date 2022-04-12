import React, { useState, useEffect } from 'react';
import {Pagination} from 'react-bootstrap';
import {CONTAINER, PAGINATION} from '../../../styles/BoardStyle'
import '../../../styles/boardStyle.css'
//참고한 사이트:
//1. https://dev.to/codebucks/create-pagination-component-from-scratch-in-reactjs-45j5
//2. https://dev.to/codebucks/create-pagination-component-from-scratch-in-reactjs-45j5

const BoardPagination = (props) => {
  const { pageCount, currentPage, setCurrentPage, startIndex, setStartIndex, itemsPerPage } = props;
  let items = [];
  console.log('현재 페이지:' + currentPage)

  useEffect(() => {
    setStartIndex((currentPage - 1) * itemsPerPage)//렌더링할 배열 시작지점(StartIndex) 설정
    //관찰해 보니 StartIndex, currentPage 중에 currentPage state가 먼저 바뀜(useState는 비동기 함수라서 이벤트 핸들러 함수 종료 후 react에 의해 state값이 갱신됨. 순서 바뀌는 부작용 방지하기 위해 useEffect 써 줌(두 state가 연관 있으므로))
  }, [currentPage])

  for (let number = 1; number <= pageCount; number++) {
    items.push(
      <Pagination.Item
        key={number} id={number}
        onClick={() => {setCurrentPage(number);}}
        active={number === currentPage}>
        {number}
      </Pagination.Item>,
    );
  }



  return (
      <CONTAINER>
        <PAGINATION>{items}</PAGINATION>
      </CONTAINER>
  );
};

export default BoardPagination;
