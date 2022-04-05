import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FORM, INPUT, LABEL, CONTAINER, BUTTON, TWOBUTTONS, SELECT } from '../../../styles/MyInfoStyle';

const ClassInsertPage = () => {
  const navigate = useNavigate();

  const [classInfo, setClassInfo] = useState({
    cls_type: 0,
    cls_tname: "",
    cls_info: "",
    cls_time: "",
    cls_maxcnt: 0,
    cls_date: ""
  });

  console.log(classInfo)

  const handleChange = (event) => {
    const name = event.target.name
    setClassInfo(prevClass => ({
      ...prevClass,
      [name]: event.target.value
    }))
  }
  //cls_type, cls_tname, cls_info, cls_time,
//cls_maxcnt, cls_cnt, cls_date, cls_status
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:9000/class/classInsert?cls_type=${classInfo.cls_type}&cls_tname=${classInfo.cls_tname}&cls_info=${classInfo.cls_info}&cls_time=${classInfo.cls_time}&cls_maxcnt=${classInfo.cls_maxcnt}&cls_date=${classInfo.cls_date}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(result => console.log(result))

    navigate('/mgmt/class/list')
  }

  return (
    <CONTAINER>
      <FORM>
        <LABEL htmlFor="cls_type">종목명</LABEL>
        <SELECT name="cls_type" id="cls_type" onChange={handleChange}>
            <option value="">--종목명을 선택해 주세요--</option>
            <option value={0}>필라테스</option>
            <option value={1}>요가</option>
            <option value={2}>스피닝</option>
        </SELECT>

        <LABEL htmlFor="cls_tname">강사명</LABEL>
        <INPUT id="cls_tname" name="cls_tname" onChange={handleChange} margin />

        <LABEL htmlFor="cls_info">수업 정보</LABEL>
        <INPUT id="cls_info" name="cls_info" onChange={handleChange} margin />

        <LABEL htmlFor="cls_time">수업 시간</LABEL>
        <INPUT id="cls_time" name="cls_time" onChange={handleChange} placeholder="ex)09:00~09:50" margin />

        <LABEL htmlFor="cls_maxcnt">최대 인원</LABEL>
        <INPUT id="cls_maxcnt" name="cls_maxcnt" onChange={handleChange} placeholder="ex) 20" margin />

        <LABEL htmlFor="cls_date">수업 날짜</LABEL>
        <INPUT id="cls_date" name="cls_date" type="date" onChange={handleChange} margin />

        <TWOBUTTONS>
          <BUTTON onClick={() => navigate('/mgmt/class/list')} forty gray>취소</BUTTON>
          <BUTTON onClick={handleSubmit} forty>추가</BUTTON>
        </TWOBUTTONS>
      </FORM>
    </CONTAINER>
  );
};

export default ClassInsertPage;