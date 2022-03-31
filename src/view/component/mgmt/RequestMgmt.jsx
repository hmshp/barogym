import React, { useState } from 'react';
import {Table} from 'react-bootstrap';
import {BUTTON} from '../../../styles/BoardStyle';

const RequestMgmt = () => {
  const [requestmentList, setRequestmentList] = useState([
    {
      isChecked: false,
      name: '손혜미',
      product: 'GX 5회권',
      requestDate: '2022-03-29'
    },
    {
      isChecked: false,
      name: '김사랑',
      product: 'GX 10회권',
      requestDate: '2022-03-28'
    },
    {
      isChecked: false,
      name: '김지수',
      product: '헬스장 이용권',
      requestDate: '2022-03-27'
    },
  ]);

  console.log(requestList)

  const handleChange = (event) => {
    const name = event.target.name
    setRequestList(prevList => prevList.map(item => {
      return {
        ...item,
        isChecked: item.name === name ? !item.isChecked : item.isChecked
      }
    }))
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