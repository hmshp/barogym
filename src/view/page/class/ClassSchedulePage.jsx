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

  const divStyle = {
    marginTop:'10px', 
    display:'flex', 
    justifyContent: 'space-between', 
    borderBottom:"solid 1px gray"
  }


  return (

    <div className="app">
      <STYLEDCONTAINER relative>
        <H1 className="text-center">수업일정</H1>
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} />
        </div>

        <div className="text-center">
          <span className="bold"></span>
          <Badge pill bg="light" text="dark">
            {date.toDateString()}
          </Badge>{" "}
        </div>


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
  
      </STYLEDCONTAINER>
    </div>
  );

}


export default App;