import React from 'react';
import {Table} from 'react-bootstrap';
import {BUTTON} from '../../../styles/BoardStyle';

const MemberMgmt = () => {

  const memberList = [
    {
      name: "손혜미",
      phone: "010-1234-5678",
      address: "서울시 강남구"
    },
    {
      name: "김사랑",
      phone: "010-1234-5678",
      address: "서울시 강남구"
    },
    {
      name: "지승완",
      phone: "010-1234-5678",
      address: "경기도 용인시"
    },
  ]

  const memberListElements = memberList.map((memberItem, index) => {
    return (
      <tr key={index}>
        <td>{memberItem.name}</td>
        <td>{memberItem.phone}</td>
        <td>{memberItem.address}</td>
        <td><BUTTON gray full>삭제</BUTTON></td>
      </tr>
    )
  })

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>이름</th>
          <th>전화번호</th>
          <th>주소</th>
        </tr>
      </thead>
      <tbody>
        {memberListElements}
      </tbody>
    </Table>
  );
};

export default MemberMgmt;