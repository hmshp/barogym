import React, {useState} from 'react';
import {Table} from 'react-bootstrap';
import {CONTAINER, PAGEHEADER, H1} from '../../../styles/BoardStyle';
import { useLocation } from 'react-router-dom';
import BoardBody from '../../sampleData/BoardBody.json'
import BoardHeader from '../../sampleData/BoardHeader.json'
import BoardPagination from '../../component/board/BoardPagination';
import BoardSearchBar from '../../component/board/BoardSearchBar';
import BoardFilter from '../../component/board/BoardFilter';

const BoardListPage = () => {
  const boardName = useLocation().search.split("&")[0].slice(4);
  console.log(boardName)//inquire, notice, ask, review, trans 출력(어느 게시판인지 구분)

  let listHeaders = []
  let listItems = []

  switch (boardName) {
    case "inquire":
      listHeaders = BoardBody.inquire.listHeader
      listItems = BoardBody.inquire.listBody
      break;
    case "notice":
      listHeaders = BoardBody.notice.listHeader
      listItems = BoardBody.notice.listBody
      break;
    case "review":
      listHeaders = BoardBody.review.listHeader
      listItems = BoardBody.review.listBody
      break;
    case "ask":
      listHeaders = BoardBody.ask.listHeader
      listItems = BoardBody.ask.listBody
      break;
    case "trans":
    listHeaders = BoardBody.trans.listHeader
    listItems = BoardBody.trans.listBody
    break;
  }


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
        <H1>{BoardHeader[boardName]}</H1>
      </PAGEHEADER>
      <BoardFilter boardName={boardName} />
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

export default BoardListPage;