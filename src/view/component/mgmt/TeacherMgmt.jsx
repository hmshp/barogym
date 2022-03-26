import React from 'react';
import {Table} from 'react-bootstrap';
import {BUTTON} from '../../../styles/BoardStyle';

const MemberMgmt = () => {

  const memberList = [
    {
      name: "손혜미",
      type: '스피닝',
      phone: "010-1234-5678",
      address: "서울시 강남구",
      nickname: '별명',
      email: 'abc@gmail.com',
      tel: '010-1234-5678',
      birthday: '3/25',
      gender: '여성',
      joinDate: '2022-03-24'
    },
    {
      name: "김사랑",
      type: '필라테스',
      phone: "010-1234-5678",
      address: "서울시 강남구",
      nickname: '별명',
      email: 'abc@gmail.com',
      tel: '010-1234-5678',
      birthday: '3/25',
      gender: '여성',
      joinDate: '2022-03-24'
    },
    {
      name: "지승완",
      type: '요가',
      phone: "010-1234-5678",
      address: "경기도 용인시",
      nickname: '별명',
      email: 'abc@gmail.com',
      tel: '010-1234-5678',
      birthday: '3/25',
      gender: '남성',
      joinDate: '2022-03-24'
    },
  ]

  const memberListElements = memberList.map((memberItem, index) => {
    return (
      <tr key={index}>
        <td>{memberItem.name}</td>
        <td>{memberItem.type}</td>
        <td>{memberItem.phone}</td>
        <td>{memberItem.address}</td>
        <td>{memberItem.nickname}</td>
        <td>{memberItem.email}</td>
        <td>{memberItem.tel}</td>
        <td>{memberItem.birthday}</td>
        <td>{memberItem.gender}</td>
        <td>{memberItem.joinDate}</td>
        <td><BUTTON gray full>삭제</BUTTON></td>
      </tr>
    )
  })

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>이름</th>
          <th>과목</th>
          <th>전화번호</th>
          <th>주소</th>
          <th>닉네임</th>
          <th>이메일</th>
          <th>전화번호</th>
          <th>생일</th>
          <th>성별</th>
          <th>가입일</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {memberListElements}
      </tbody>
    </Table>
  );
};

export default MemberMgmt;