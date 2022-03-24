import React, {useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {CONTAINER, PAGEHEADER, H1, BUTTON} from '../../../../styles/BoardStyle';
import { useLocation } from 'react-router-dom';
import BoardBody from '../../../sampleData/BoardBody.json'
import BoardPagination from '../../../component/board/BoardPagination';
import BoardSearchBar from '../../../component/board/BoardSearchBar';
import ReviewListFilter from '../../../component/board/classReview/ReviewListFilter';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom'

const ReviewListPage = () => {
  const [list, setList] = useState({});

  const listHeader = ["글 번호", "카테고리", "강사", "제목", "별점", "작성자", "등록일", "조회수"]
  const listItems = BoardBody["review"].listBody

  const bno = window.location.search.split('?')[1].split('&')[0].split('-')[1];

  useEffect(() => {
    // const ReviewList = async() => {
    //   const res = await ReviewListDB(bno);
    //   console.log(res)
    //   setList(res.data);
    // }
  }, [list])

  const navigate = useNavigate();

  const listHeadersElements = listHeader.map((listHeader, index) => <th key={index}>{listHeader}</th>)

  const listItemsElements = listItems.map((listItem, index) => {
    return (
      <tr key={index} onClick={() => navigate(`/board/review/detail?page=1&bno=${index}`)}>
        {Object.keys(listItem).map((key, index) => (
          <td key={index}>{listItem[key]}</td>
        )) }
      </tr>
    )
  })

  return (
    <CONTAINER>
      <PAGEHEADER>
        <H1>수강 후기</H1>
        <LinkContainer to={`/board/review/write`}>
          <BUTTON>글쓰기</BUTTON>
        </LinkContainer>
      </PAGEHEADER>
      <ReviewListFilter />
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

export default ReviewListPage;