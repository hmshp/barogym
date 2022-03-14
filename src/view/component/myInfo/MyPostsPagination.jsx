import React from 'react';
import {Pagination} from 'react-bootstrap';
import {STYLEDCONTAINER, PAGINATION} from '../../../styles/MyInfoStyle'

const MyPostsPagination = () => {
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
      <STYLEDCONTAINER>
        <PAGINATION>{items}</PAGINATION>
      </STYLEDCONTAINER>
  );
};

export default MyPostsPagination;
