import React, {useState} from 'react';
import {Table} from 'react-bootstrap';
import {CONTAINER, PAGEHEADER, H1, BUTTON} from '../../../../styles/BoardStyle';
import BoardBody from '../../../sampleData/BoardBody.json'
import BoardHeader from '../../../sampleData/BoardHeader.json'
import BoardPagination from '../../../component/board/BoardPagination';
import BoardSearchBar from '../../../component/board/BoardSearchBar';
import FaqListFilter from '../../../component/board/faq/FaqListFilter';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

const FaqListPage = () => {
  const listHeaders = BoardBody["faq"].listHeader
  const listItems = BoardBody["faq"].listBody

  const navigate = useNavigate();

  const listHeadersElements = listHeaders.map((listHeader, index) => <th key={index}>{listHeader}</th>)

  const listItemsElements = listItems.map((listItem, index) => {
    return (
      <tr key={index} onClick={() => navigate(`/board/faq/detail?page=1&bno=${index}`)}>
        {Object.keys(listItem).map((key, index) => (
          <td key={index}>{listItem[key]}</td>
        )) }
      </tr>
    )
  })

  return (
    <CONTAINER>
      <PAGEHEADER>
        <H1>{BoardHeader["faq"]}</H1>
        <LinkContainer to={`/board/faq/write`}>
          <BUTTON>글쓰기</BUTTON>
        </LinkContainer>
      </PAGEHEADER>
      <FaqListFilter />
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

export default FaqListPage;