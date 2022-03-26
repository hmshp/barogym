import React, {useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {CONTAINER, PAGEHEADER, H1, BUTTON} from '../../../../styles/BoardStyle';
import { useLocation, useNavigate } from 'react-router-dom';
import BoardPagination from '../../../component/board/BoardPagination';
import BoardSearchBar from '../../../component/board/BoardSearchBar';
import ReviewListFilter from '../../../component/board/classReview/ReviewListFilter';
import { boardListDB } from '../../../../service/dbLogic';

const ReviewListPage = () => {
  const navigate = useNavigate();
  const id = `${useLocation().pathname.split('/')[1]}/${useLocation().pathname.split('/')[2]}`.slice(6)

  const [title, setTitle] = useState({ //필터 클릭하기 전 or 클릭해서 드롭다운 메뉴 중 하나 선택했을 때 화면에 보이는 제목 3개
    class : '수업',
    teacher : '강사',
    rating : '별점'
  });

  const [listBody,setListBody] = useState([]);

  useEffect(() => {
    const boardList = async() =>{
      const res = await boardListDB(id);
      const list = [];
      console.log(res)
      res.data.forEach((item) => {
        const obj = {
          bno : item.MASTER_BNO,
          title: item.MASTER_TITLE,
          writer: item.MEM_NAME,
          date: item.MASTER_DATE,
          hit: item.MASTER_HIT
        };
        list.push(obj);
      })
      setListBody(list);
    }
    boardList();
  },[title,setListBody, id]);

  const listHeaders = ["글 번호", "카테고리", "강사", "제목", "별점", "작성자", "등록일", "조회수"]
  
  const listHeadersElements = listHeaders.map((listHeader, index) => <th key={index}>{listHeader}</th>)

  const listItemsElements = listBody.map((listItem, index) => {
    return (
      <tr key={index} onClick={() => navigate(`/board/review/detail?bno=${listItem.bno}&page=1`)}>
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
        <BUTTON onClick={()=>{navigate(`/board/review/write`)}}>글쓰기</BUTTON>
      </PAGEHEADER>
      <ReviewListFilter title={title} setTitle={setTitle} />
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