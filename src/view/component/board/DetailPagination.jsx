import React from 'react';
import { Pagination }  from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';

const DetailPagination = () => {
  const searchPath = window.location.search
  const id = searchPath.split('&')[0].split('=')[1]

  return (
    <div>
      <Pagination size="lg" className="justify-content-center">
        <Pagination.Prev />
        <LinkContainer to={`/board/list?id=${id}`}>
          <Pagination.Item>목록으로</Pagination.Item>
        </LinkContainer>
        
        <Pagination.Next />
      </Pagination>
    </div>
  );
};

export default DetailPagination;