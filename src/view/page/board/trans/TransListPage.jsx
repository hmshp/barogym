import React, {useState} from 'react';
import {Table} from 'react-bootstrap';
import {CONTAINER, PAGEHEADER, H1, BUTTON} from '../../../../styles/BoardStyle';
import { useLocation } from 'react-router-dom';
import BoardBody from '../../../sampleData/BoardBody.json'
import BoardHeader from '../../../sampleData/BoardHeader.json'
import BoardPagination from '../../../component/board/BoardPagination';
import BoardSearchBar from '../../../component/board/BoardSearchBar';
import TransListFilter from '../../../component/board/trans/TransListFilter';
import { LinkContainer } from 'react-router-bootstrap';

const TransListPage = () => {

  const listHeaders = BoardBody["trans"].listHeader
  const listItems = BoardBody["trans"].listBody

  const listHeadersElements = listHeaders.map(listHeader => <th>{listHeader}</th>)
  //nanoid를 key로 설정할까?

  const listItemsElements = listItems.map(listItem => {
    return (
      <tr key={listItem.title}>
        {Object.keys(listItem).map((key) => (
          <td>{listItem[key]}</td>
        )) }
      </tr>
    )
  })

  return (
    <CONTAINER>
      <PAGEHEADER>
        <H1>{BoardHeader["trans"]}</H1>
        <LinkContainer to={`/board/trans/write`}>
          <BUTTON>글쓰기</BUTTON>
        </LinkContainer>
      </PAGEHEADER>
      <TransListFilter />
      <Table striped bordered hover>
        <thead>
          <tr>
            {listHeadersElements}
          </tr>
        </thead>
        <tbody>
          {listItemsElements}
        </tbody>
      </Table>
      <BoardPagination />
      <BoardSearchBar />
    </CONTAINER>
  );
};

export default TransListPage;