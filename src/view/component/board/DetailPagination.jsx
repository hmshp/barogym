import React from 'react';
import { Pagination }  from 'react-bootstrap';

const DetailPagination = () => {
  return (
    <div>
      <Pagination size="lg" className="justify-content-center">
        <Pagination.Prev />
        <Pagination.Item>목록으로</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </div>
  );
};

export default DetailPagination;