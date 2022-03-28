import React, {useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {CONTAINER, PAGEHEADER, H1, BUTTON} from '../../../../styles/BoardStyle';
import BoardPagination from '../../../component/board/BoardPagination';
import BoardSearchBar from '../../../component/board/BoardSearchBar';
import FaqListFilter from '../../../component/board/faq/FaqListFilter';
import { useNavigate, useLocation } from 'react-router-dom';
import { boardListDB } from '../../../../service/dbLogic';

const FaqListPage = (props) => {
  const navigate = useNavigate();
  const { id } = props;

  const [title, setTitle] = useState({ //필터 클릭하기 전 or 클릭해서 드롭다운 메뉴 중 하나 선택했을 때 화면에 보이는 제목 3개
    category : '카테고리',
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

  const listHeaders = ["글 번호", "카테고리", "제목", "작성자", "등록일", "조회수"]

  const listHeadersElements = listHeaders.map((listHeader, index) => <th key={index}>{listHeader}</th>)

  const listItemsElements = listBody.map((listItem, index) => {
    return (
      <tr key={index} onClick={() => navigate(`/board/faq/detail?bno=${listItem.bno}&page=1`)}>
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
        <BUTTON onClick={()=>{navigate(`/board/write?id=${id}`)}}>글쓰기</BUTTON>
      </PAGEHEADER>
      <FaqListFilter title={title} setTitle={setTitle} />
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