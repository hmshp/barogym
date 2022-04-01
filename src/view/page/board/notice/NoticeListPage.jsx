import React, {useState, useEffect, useContext} from 'react';
import {Table} from 'react-bootstrap';
import {CONTAINER, PAGEHEADER, H1, BUTTON} from '../../../../styles/BoardStyle';
import BoardPagination from '../../../component/board/BoardPagination';
import BoardSearchBar from '../../../component/board/BoardSearchBar';
import { useNavigate } from 'react-router-dom';
import { boardListDB } from '../../../../service/dbLogic';
import UserContext from '../../../../userContext'

const NoticeListPage = (props) => {
  const userId = useContext(UserContext)

  const navigate = useNavigate();
  const { id } = props;

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
  },[setListBody, id]);

  const listHeaders = ["글 번호", "제목", "작성자", "등록일", "조회수"]

  const listHeadersElements = listHeaders.map((listHeader, index) => <th key={index}>{listHeader}</th>)

  const listItemsElements = listBody.map((listItem, index) => {
    return (
      <tr key={index} onClick={() => navigate(`/board/notice/detail?bno=${listItem.bno}&page=1`)}>
        {Object.keys(listItem).map((key, index) => (
          <td key={index}>{listItem[key]}</td>
        )) }
      </tr>
    )
  })

  return (
    <CONTAINER>
      <PAGEHEADER>
        <H1>공지사항</H1>
        { userId === "admin123" &&
          <BUTTON onClick={()=>{navigate(`/board/write?id=${id}`)}}>글쓰기</BUTTON>
        }
        
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

export default NoticeListPage;