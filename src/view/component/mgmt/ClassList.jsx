import React, { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';
import {BUTTON} from '../../../styles/BoardStyle';

const ClassList = () => {
  const [ classList, setClassList] = useState([]);
  console.log(classList)

  useEffect(() => {
    fetch(`http://localhost:9000/class/classList`)
      .then(res => res.json())
      .then(result => setClassList(result))
  }, [classList])

  const deleteClass = (event) => {
    const clsNo = event.target.name
    fetch(`http://localhost:9000/class/classDelete?cls_no=${clsNo}`, {
      method: "POST"
    })
    .then(res => res.json())
    .then(result => console.log(result))
  }

  const classElements = classList.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.CLS_NO}</td>
        <td>{item.CLS_TNAME}</td>
        <td>{item.CLS_INFO}</td>
        <td>{item.CLS_TIME}</td>
        <td>{item.CLS_STATUS === 0 ? "수업중" : "종료"}</td>
        <td><BUTTON name={item.CLS_NO} onClick={deleteClass} gray full>삭제</BUTTON></td>
      </tr>
    )
  })

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>수업번호</th>
          <th>강사명</th>
          <th>수업명</th>
          <th>수업 시간</th>
          <th>진행 상태</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {classElements}
      </tbody>
    </Table>
  );
};

export default ClassList;