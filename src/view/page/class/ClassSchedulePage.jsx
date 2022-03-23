import { useState } from 'react';
import Badge from 'react-bootstrap/Badge'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../intro/style.css';
import { H1 } from '../../../styles/MyInfoStyle';
import {STYLEDBUTTON,STYLEDCONTAINER} from '../../../styles/ClassStyle'
import { Link } from 'react-router-dom';

function App() {
  const [date, setDate] = useState(new Date());

  return (

    <div className="app">
          <STYLEDCONTAINER relative>
      <H1 className="text-center">수업일정</H1>
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

      <p className="text-left">
        오전 09:00 - 09:50
        <br />
        김민지 트레이너
        
        <br /> <hr/>

        오전 10:00 - 10:50
        <br />
        김사랑 트레이너
        <Link to = "/board/review/write/*">
          
                <STYLEDBUTTON variant="info">리뷰작성</STYLEDBUTTON>{' '}
        </Link>

        <br /> <hr/>

        오전 11:00 - 11:50
        <br />
        김사랑 트레이너
        </p>
  
        </STYLEDCONTAINER>
    </div>
  );

}


export default App;