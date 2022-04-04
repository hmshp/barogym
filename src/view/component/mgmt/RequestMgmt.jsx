import React, { useState,  useEffect } from 'react';
import {Table} from 'react-bootstrap';
import {BUTTON} from '../../../styles/BoardStyle';

const RequestMgmt = () => {
  const [requestList, setRequestList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9000/request/requestList`)//요청 목록 불러오기
      .then(res => res.json())
      .then(result => setRequestList(result))
  }, [])

  console.log(requestList)
  console.log(filteredList)

  const handleChange = (event) => {
    const isChecked = event.target.checked;

    //requestList 중 클릭한 것과 일치하는 목록만 필터링해서 가져오기
    const tempObj = requestList.filter(item => {
      return item.REQ_NO == event.target.name// === 비교 하니까 false처리됐는지 값이 안담겼는데 ==하니까 된다
    })[0]//객체를 filterList 안에 넣어야 되는데 filter 한 결과는 값이 1개 담긴 배열이라 0번째 인덱스 가져왔다

    if(isChecked) { //체크 시 목록에 추가
      setFilteredList(prevList => [...prevList, tempObj])
    } else { //체크 해제 시 목록에서 삭제
      const index = filteredList.indexOf(tempObj)
      const temp = [...filteredList]//state를 직접 바꾸면 안 되니 복사
      temp.splice(index, 1);
      setFilteredList(temp);
    }
  }

  const handleSubmit = () => {
    const arr = filteredList.map(item => {
      return ({
        MEM_ID: item.MEM_ID,
        REQ_NO: item.REQ_NO,
        PASS_SDAY: item.REQ_SDAY
      })
    })
    fetch(`http://localhost:9000/pass/passInsertAll`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        arr
      }
    })//요청 목록 불러오기
      .then(res => res.json())
      .then(result => setRequestList(result))
  }


  const requestListElements = requestList.map((item, index) => {
    return (
      <tr key={index}>
        <td>
          <input
            type="checkbox"
            name={item.REQ_NO}
            checked={item.isChecked}
            onChange={handleChange}
          />
        </td>
        <td>{item.MEM_ID}</td>
        <td>{item.PROD_NAME}</td>
        <td>{item.REQ_SDAY}</td>
        <td><BUTTON gray full>삭제</BUTTON></td>
      </tr>
    )
  })

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>선택</th>
            <th>회원 아이디</th>
            <th>상품명</th>
            <th>신청일</th>
          </tr>
        </thead>
        <tbody>
          {requestListElements}
        </tbody>
      </Table>
      <BUTTON onClick={handleSubmit}>승인하기</BUTTON>
    </>
  );
};

export default RequestMgmt;