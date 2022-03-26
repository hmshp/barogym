/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../intro/style.css';
import { H1 } from '../../../styles/MyInfoStyle';
import {STYLEDBUTTON,STYLEDCONTAINER,STYLEDCONTAINER2,BLACKBUTTON,PINKBUTTON, PAGEHEADER} from '../../../styles/ClassStyle'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import moment from 'moment';
import './Cal.css';

const divStyle = {
  marginTop:'10px', 
  display:'flex', 
  justifyContent: 'space-between', 
  borderBottom:"solid 1px gray"
}

function App() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [smShow, setSmShow] = useState(false);
  const [value, onChange] = useState(new Date());
  const [mark, setMark] = useState([]);


  return (
    <div className="app">
      <STYLEDCONTAINER relative>
      <PAGEHEADER>
        <H1>수업 예약</H1>
        </PAGEHEADER>
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
            <br /> 김민지 트레이너
          <PINKBUTTON variant="info" onClick={handleShow}>
            예약가능
          </PINKBUTTON>
        </div>
          <> <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>수업 예약</Modal.Title>
              </Modal.Header>
              <Modal.Body>수업을 예약 하시겠습니까?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  취소
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  예약
                </Button>
              </Modal.Footer>
            </Modal> </>

            <div className="text-left">
          <div style={divStyle}>
          오전 10:00 - 10:50<br />
          김사랑 트레이너
          <STYLEDBUTTON onClick={() => setSmShow(true)}>예약완료</STYLEDBUTTON>
          </div>
           <> <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} aria-labelledby="example-modal-sizes-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            수업 예약
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> 이미 예약된 수업입니다.
        </Modal.Body>
      </Modal>    </>
      </div>


      <div className="text-left">
          <div style={divStyle}>
        오전 11:00 - 11:50
        <br />
        김사랑 트레이너
          <BLACKBUTTON>마감</BLACKBUTTON>{' '}
        </div>
</div>     
</div>


       <hr />
  </div>
          </STYLEDCONTAINER2> 
   </STYLEDCONTAINER>
    </div>
  

  );

}


export default App;