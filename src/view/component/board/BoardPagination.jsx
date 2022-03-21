import React from 'react';
import {Pagination} from 'react-bootstrap';
import {CONTAINER, PAGINATION} from '../../../styles/BoardStyle'

const BoardPagination = () => {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
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
