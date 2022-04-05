import React, {useState, useEffect, useContext} from 'react';
import {Table} from 'react-bootstrap';
import {CONTAINER, PAGEHEADER, H1, BUTTON} from '../../../../styles/BoardStyle';
import BoardPagination from '../../../component/board/BoardPagination';
import BoardSearchBar from '../../../component/board/BoardSearchBar';
import FaqListFilter from '../../../component/board/faq/FaqListFilter';
import { useNavigate, useLocation } from 'react-router-dom';
import { boardListDB } from '../../../../service/dbLogic';
import UserContext from '../../../../userContext'

const FaqListPage = (props) => {
  const { userId } = useContext(UserContext)
  const navigate = useNavigate();
  const { id } = props;
  const [postList,setPostList] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(10);
  const [startIndex, setStartIndex] = useState(0);
  const [pageCount, setPageCount] = useState();

  const [searchText, setSearchText] = useState("");
  const filteredPostList = postList.filter(post => {
    return post.title.includes(searchText)
  })

  console.log(postList)

  const [title, setTitle] = useState({ //필터 클릭하기 전 or 클릭해서 드롭다운 메뉴 중 하나 선택했을 때 화면에 보이는 제목 3개
    category : '카테고리',
  });

  useEffect(() => {
    fetch(`http://localhost:9000/board/boardList?id=${id}`)
      .then(res => res.json())
      .then(result => (() => {
        const list = [];
        const slice = result.slice(startIndex, startIndex + itemsPerPage)//한 페이지에 담을 수 있는 개수만큼만
        slice.forEach((item) => {
          const obj = {
            bno : item.MASTER_BNO,
            title: item.MASTER_TITLE,
            writer: item.MEM_NAME,
            date: item.MASTER_DATE,
            hit: item.MASTER_HIT
          };
          console.log('obj:' + obj)
          list.push(obj);
        })
        setPageCount(Math.ceil(result.length / itemsPerPage));
        setPostList(list);
      })())
  },[startIndex]);

  const listHeaders = ["글 번호", "제목", "작성자", "등록일", "조회수"]

  const listHeadersElements = listHeaders.map((listHeader, index) => <th key={index}>{listHeader}</th>)

  const listItemsElements = filteredPostList.map((listItem, index) => {
    return (
      <tr key={index} onClick={() => navigate(`/board/detail?id=${id}&bno=${listItem.bno}`)}>
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
        {userId === "admin123" && <BUTTON onClick={()=>{navigate(`/board/write?id=${id}`)}}>글쓰기</BUTTON>}
        
      </PAGEHEADER>
      {/* <FaqListFilter title={title} setTitle={setTitle} /> */}
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
      <BoardPagination pageCount={pageCount} currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage} startIndex={startIndex} setStartIndex={setStartIndex} />
      <BoardSearchBar searchText={searchText} setSearchText={setSearchText} />
    </CONTAINER>
  );
};

export default FaqListPage;