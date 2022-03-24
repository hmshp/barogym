import React, {useState} from 'react';
import {Table} from 'react-bootstrap';
import {CONTAINER, PAGEHEADER, H1, BUTTON} from '../../../../styles/BoardStyle';
import BoardBody from '../../../sampleData/BoardBody.json'
import BoardHeader from '../../../sampleData/BoardHeader.json'
import BoardPagination from '../../../component/board/BoardPagination';
import BoardSearchBar from '../../../component/board/BoardSearchBar';
import TransListFilter from '../../../component/board/trans/TransListFilter';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

const TransListPage = () => {
  const listHeaders = BoardBody["trans"].listHeader
  const listItems = BoardBody["trans"].listBody

  const navigate = useNavigate();

  const listHeadersElements = listHeaders.map((listHeader, index) => <th key={index}>{listHeader}</th>)

  const listItemsElements = listItems.map((listItem, index) => {
    return (
      <tr key={index} onClick={() => navigate(`/board/trans/detail?page=1&bno=${index}`)}>
        {Object.keys(listItem).map((key, index) => (
          <td key={index}>{listItem[key]}</td>
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