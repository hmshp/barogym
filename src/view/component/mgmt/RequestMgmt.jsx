import React, { useState,  useEffect } from 'react';
import {Table} from 'react-bootstrap';
import {BUTTON} from '../../../styles/BoardStyle';

const RequestMgmt = () => {
  const [requestList, setRequestList] = useState([]);
  const [selectedList, setSelectedList] = useState([]);

  console.log(requestList)

  useEffect(() => {
    fetch(`http://localhost:9000/request/productList`)//상품목록이 아닌 요청 목록 불러와야 함
      .then(res => res.json())
      .then(result => setRequestList(result))
  }, [])

  const handleChange = (event) => {
    const isChecked = event.target.checked;
    if(isChecked) { //체크 시 목록에 추가
      setSelectedList(prevList => [...prevList, event.target.name])
    } else { //체크 해제 시 목록에서 삭제
      const index = selectedList.indexOf(event.target.name)
      const temp = [...selectedList]//state를 직접 바꾸면 안 되니 복사
      temp.splice(index, 1);
      setSelectedList(temp);
    }
  }


  const requestListElements = requestList.map((item, index) => {
    return (
      <tr key={index}>
        <td>
          <input
            type="checkbox"
            name={item.name}
            checked={item.isChecked}
            onChange={handleChange}
          />
        </td>
        <td>{item.name}</td>
        <td>{item.product}</td>
        <td>{item.requestDate}</td>
        <td><BUTTON gray full>삭제</BUTTON></td>
      </tr>
    )
  })

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>선택</th>
          <th>회원명</th>
          <th>상품명</th>
          <th>신청일</th>
        </tr>
      </thead>
      <tbody>
        {requestListElements}
      </tbody>
    </Table>
  );
};

export default RequestMgmt;