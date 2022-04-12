import { useState } from 'react';
import Badge from 'react-bootstrap/Badge'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../intro/style.css';
import { H1 } from '../../../styles/MyInfoStyle';
import {STYLEDBUTTON,STYLEDCONTAINER,CLASSINFO} from '../../../styles/ClassStyle'
import { Link } from 'react-router-dom';

function App() {
  const [date, setDate] = useState(new Date());

  return (

    <div className="app">
          <STYLEDCONTAINER relative>
      <H1 className="text-center">수업 업로드, 수정</H1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>

      <p className="text-center">
        <span className="bold"></span>
        <Badge pill bg="light" text="dark">
          {date.toDateString()}
        </Badge>{" "}
      </p>
      <hr></hr>

      <CLASSINFO>
        오전 09:00 - 09:50
        <br />
        김사랑 트레이너
        <Link to = "/board/review/write/*">
          <STYLEDBUTTON>수정하기</STYLEDBUTTON>{' '}
          </Link>
       </CLASSINFO>
       <hr />

       <CLASSINFO>
        오전 10:00 - 10:50
        <br />
        김사랑 트레이너
        <Link to = "/board/review/write/*">
          <STYLEDBUTTON>수정하기</STYLEDBUTTON>{' '}
          </Link>
       </CLASSINFO>
       <hr />
       <CLASSINFO>
        오전 11:00 - 11:50
        <br />
        김사랑 트레이너
        <Link to = "/board/review/write/*">
          <STYLEDBUTTON>수정하기</STYLEDBUTTON>{' '}
          </Link>
       </CLASSINFO>
       
       <hr />
        </STYLEDCONTAINER>
    </div>
  );

}


export default App;