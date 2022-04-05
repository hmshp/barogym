import React, { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap';
import {BUTTON} from '../../../styles/BoardStyle';

const MemberMgmt = () => {
  const [memberList, setMemberList] = useState([]);
  console.log(memberList)

  useEffect(() => {
    fetch(`http://localhost:9000/member/memList`)
      .then(res => res.json())
      .then(result => setMemberList(result))
  }, [])

  const memberListElements = memberList.map((memberItem, index) => {
    return (
      <tr key={index}>
        <td>{memberItem.MEM_NAME}</td>
        <td>{memberItem.MEM_TEL}</td>
        <td>{memberItem.MEM_NICKNAME}</td>
        <td>{memberItem.MEM_EMAIL}</td>
        <td>{memberItem.MEM_BIRTHDAY}</td>
        <td>
          {
            memberItem.MEM_GENDER === 0 ? "남" :
            memberItem.MEM_GENDER === 1 ? "여" :
            "비공개"
          }
        </td>
        <td>{memberItem.MEM_JOINDATE}</td>
        {/* <td><BUTTON gray full>삭제</BUTTON></td> */}
      </tr>
    )
  })

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>이름</th>
          <th>전화번호</th>
          <th>닉네임</th>
          <th>이메일</th>
          <th>생일</th>
          <th>성별</th>
          <th>가입일</th>
          {/* <th>삭제</th> */}
        </tr>
      </thead>
      <tbody>
        {memberListElements}
      </tbody>
    </Table>
  );
};

export default MemberMgmt;