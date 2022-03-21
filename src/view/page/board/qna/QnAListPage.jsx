import React, {useState} from 'react';
import {Table} from 'react-bootstrap';
import {CONTAINER, PAGEHEADER, H1, BUTTON} from '../../../../styles/BoardStyle';
import { useLocation } from 'react-router-dom';
import BoardBody from '../../../sampleData/BoardBody.json'
import BoardHeader from '../../../sampleData/BoardHeader.json'
import BoardPagination from '../../../component/board/BoardPagination';
import BoardSearchBar from '../../../component/board/BoardSearchBar';
import ReviewListFilter from '../../../component/board/classReview/ReviewListFilter';
import { LinkContainer } from 'react-router-bootstrap';

const QnAListPage = () => {

  const listHeaders = BoardBody["qna"].listHeader
  const listItems = BoardBody["qna"].listBody

  const listHeadersElements = listHeaders.map((listHeader, index) => <th key={index}>{listHeader}</th>)

  const listItemsElements = listItems.map((listItem, index) => {
    return (
      <tr key={index}>
        {Object.keys(listItem).map((key, index) => (
          <td key={index}>{listItem[key]}</td>
        )) }
      </tr>
    )
  })

  return (
    <CONTAINER>
      <PAGEHEADER>
        <H1>{BoardHeader["qna"]}</H1>
        <LinkContainer to={`/board/qna/write`}>
          <BUTTON>글쓰기</BUTTON>
        </LinkContainer>
      </PAGEHEADER>
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

export default QnAListPage;