import React, {useState, useEffect, useContext} from 'react';
import {Table} from 'react-bootstrap';
import {CONTAINER, PAGEHEADER, H1, BUTTON} from '../../../../styles/BoardStyle';
import BoardPagination from '../../../component/board/BoardPagination';
import BoardSearchBar from '../../../component/board/BoardSearchBar';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../../../userContext'

const NoticeListPage = (props) => {
  const { userId } = useContext(UserContext)
  const navigate = useNavigate();
  const { id } = props;
  const [postList, setPostList] = useState([]);


  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(10);
  const [startIndex, setStartIndex] = useState(0);
  const [pageCount, setPageCount] = useState();

  console.log(startIndex)

  const [searchText, setSearchText] = useState("");
  const filteredPostList = postList.filter(post => {
    return post.title.includes(searchText)
  })


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
          // console.log('obj:' + obj)
          list.push(obj);
        })
        setPageCount(Math.ceil(result.length / itemsPerPage));
        setPostList(list);
      })())
  },[startIndex]);//startIndex 바뀔 때마다 useEffect 실행

  const listHeaders = ["글 번호", "제목", "작성자", "등록일", "조회수"]

  const listHeadersElements = listHeaders.map((listHeader, index) => <th key={index}>{listHeader}</th>)

  //검색어 필터링한 목록으로 map
  const listItemsElements = filteredPostList.map((listItem, index) => {
    return (
      <tr key={index} onClick={() => navigate(`/board/detail?id=${id}&bno=${listItem.bno}`)}>
        {Object.keys(listItem).map((key, index) => (
          <td key={index}>{listItem[key]}</td>
        )) }
      </tr>
    )
  })
  //어차피 검색바 input change 이벤트 일어날 때마다 state값 바뀌고 리렌더링되니(검색 버튼 사용하든 안 하든) 검색어 입력할 때마다 실시간으로 필터링해주는 방식이 편리할듯.

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
      <BoardPagination pageCount={pageCount} currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage} startIndex={startIndex} setStartIndex={setStartIndex} />
      <BoardSearchBar searchText={searchText} setSearchText={setSearchText} />
    </CONTAINER>
  );
};

export default NoticeListPage;