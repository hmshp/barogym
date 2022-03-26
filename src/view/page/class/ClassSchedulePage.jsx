/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../intro/style.css';
import { H1 } from '../../../styles/MyInfoStyle';
import {STYLEDBUTTON,STYLEDCONTAINER,STYLEDCONTAINER2,PAGEHEADER} from '../../../styles/ClassStyle'
import { Link } from 'react-router-dom';
import moment from 'moment';



function App() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [value, onChange] = useState(new Date());


  const divStyle = {
    marginTop:'10px', 
    display:'flex', 
    justifyContent: 'space-between', 
    borderBottom:"solid 1px gray"
  }


  return (
    <div className="app">
      <STYLEDCONTAINER>
      <PAGEHEADER>    <H1>수업 일정</H1></PAGEHEADER>
    
          
        <STYLEDCONTAINER2> 
        <p className="calendar">
          <span className="bold"></span>
          <Calendar 
          onChange={onChange} 
          value={value} 
          formatDay={(locale, date) => moment(date).format("DD")}
          />         
         
         < div className="SelectDate">
            <strong>{moment(value).format("YYYY년 MM월 DD일")} 
              </strong> </div>
       
          </p>
          <div className="classBox">
        <hr></hr>
        <div className="text-left">
          <div style={divStyle}>
            오전 09:00 - 09:50
            <br/>
            김민지 트레이너
          </div>
          
          <div style={divStyle}>
            <span>
              오전 10:00 - 10:50
              <br/>
              김사랑 트레이너
            </span>
            <Link to = "/board/review/write/*">
              <STYLEDBUTTON variant="info">리뷰작성</STYLEDBUTTON>{' '}
            </Link>
          </div>
          <div style={divStyle}>
            오전 11:00 - 11:50
            <br />
            김사랑 트레이너
          </div>
        </div>
        </div>
        </STYLEDCONTAINER2>
      </STYLEDCONTAINER>
    </div>
  );

}


export default App;