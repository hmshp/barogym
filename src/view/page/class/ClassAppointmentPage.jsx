/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../intro/style.css';
import { H1 } from '../../../styles/MyInfoStyle';
import {STYLEDBUTTON,STYLEDCONTAINER,BLACKBUTTON,PINKBUTTON, CLASSINFO} from '../../../styles/ClassStyle'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


function App() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [smShow, setSmShow] = useState(false);
  const [value, onChange] = useState(new Date());


  return (
    <div className="app">
      <STYLEDCONTAINER relative>
        <H1 className="text-center">수업예약</H1>


        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} />
          
        </div>


        <p className="text-center">
          <span className="bold"></span>
          <Badge pill bg="light" text="dark">
            {date.toDateString()}
          </Badge>
        </p>
        <hr></hr>
        <CLASSINFO>
            오전 09:00 - 09:50
            <br /> 김민지 트레이너
          <PINKBUTTON variant="info" onClick={handleShow}>
            예약가능
          </PINKBUTTON>
        </CLASSINFO>
          <>
            <Modal show={show} onHide={handleClose}>
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
            </Modal>
          </>
 
        <hr />
        <CLASSINFO>
          오전 10:00 - 10:50<br />
          김사랑 트레이너
          <STYLEDBUTTON onClick={() => setSmShow(true)}>예약완료</STYLEDBUTTON>{' '}
          </CLASSINFO>
    <>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            수업 예약
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> 이미 예약된 수업입니다.
        </Modal.Body>
      </Modal>    </>
      <hr />

      <CLASSINFO>
        오전 11:00 - 11:50
        <br />
        김사랑 트레이너
          <BLACKBUTTON>마감</BLACKBUTTON>{' '}
       </CLASSINFO>
       <hr />
   
    </STYLEDCONTAINER>
    </div>
  );

}


export default App;