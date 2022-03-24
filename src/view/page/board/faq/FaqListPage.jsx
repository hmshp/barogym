import React, {useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {CONTAINER, PAGEHEADER, H1, BUTTON} from '../../../../styles/BoardStyle';
import BoardBody from '../../../sampleData/BoardBody.json'
import BoardPagination from '../../../component/board/BoardPagination';
import BoardSearchBar from '../../../component/board/BoardSearchBar';
import FaqListFilter from '../../../component/board/faq/FaqListFilter';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

const FaqListPage = () => {
  const [list, setList] = useState({});

  const listHeaders = ["글 번호", "카테고리", "제목", "작성자", "등록일", "조회수"]
  const listItems = BoardBody["faq"].listBody

  const bno = window.location.search.split('?')[1].split('&')[0].split('-')[1];

  useEffect(() => {
    // const ReviewList = async() => {
    //   const res = await FaqListDB(bno);
    //   console.log(res)
    //   setList(res.data);
    // }
  }, [list])

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
        <H1>자주 묻는 질문</H1>
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