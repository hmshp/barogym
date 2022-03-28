import React, {useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {CONTAINER, PAGEHEADER, H1, BUTTON} from '../../../../styles/BoardStyle';
import BoardBody from '../../../sampleData/BoardBody.json'
import BoardPagination from '../../../component/board/BoardPagination';
import BoardSearchBar from '../../../component/board/BoardSearchBar';
import TransListFilter from '../../../component/board/trans/TransListFilter';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { boardListDB } from '../../../../service/dbLogic';

const TransListPage = (props) => {
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

  const listHeaders = ["글 번호", "제목", "카테고리", "작성자", "등록일", "조회수"]

  const listHeadersElements = listHeaders.map((listHeader, index) => <th key={index}>{listHeader}</th>)

  const listItemsElements = listBody.map((listItem, index) => {
    return (
      <tr key={index} onClick={() => navigate(`/board/trans/detail?bno=${listItem.bno}&page=1`)}>
        {Object.keys(listItem).map((key, index) => (
          <td key={index}>{listItem[key]}</td>
        )) }
      </tr>
    )
  })

  return (
    <CONTAINER>
      <PAGEHEADER>
        <H1>양도게시판</H1>
        <BUTTON onClick={()=>{navigate(`/board/write?id=${id}`)}}>글쓰기</BUTTON>
      </PAGEHEADER>
      <TransListFilter title={title} setTitle={setTitle} />
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