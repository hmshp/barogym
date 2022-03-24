import React from 'react';
import { Pagination }  from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';

const DetailPagination = () => {
  const boardName = `${useLocation().pathname.split('/')[1]}/${useLocation().pathname.split('/')[2]}/list?page=1`
  console.log(boardName)

  return (
    <div>
      <Pagination size="lg" className="justify-content-center">
        <Pagination.Prev />
        <LinkContainer to={`/${boardName}`}>
          <Pagination.Item>목록으로</Pagination.Item>
        </LinkContainer>
        
        <Pagination.Next />
      </Pagination>
    </div>
  );
};

export default DetailPagination;