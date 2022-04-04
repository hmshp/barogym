import React, { useState, useContext } from 'react';
import {Modal, Button} from 'react-bootstrap'
import { BUTTON } from '../../../styles/MembershipStyle';
import UserContext from '../../../userContext';
import { useNavigate } from 'react-router-dom';

const PassDateModal = (props) => {
  const { userId } = useContext(UserContext)
  const { selectedProduct } = props;
  const [show, setShow] = useState(false);
  const [date, setDate] = useState();

  const navigate = useNavigate();

  console.log(userId, selectedProduct, date)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    setDate(event.target.value)
  }
  const handleSubmit = () => {
    fetch(`http://localhost:9000/request/requestInsert?mem_id=${userId}&prod_no=${selectedProduct}&req_sday=${date}`)
      .then(res => res.json())
      .then(result => console.log(result))

    setShow(false)
    // navigate('/'); window.location.reload();
  }

  return (
    <>
      <BUTTON onClick={handleShow}>
        신청하기
      </BUTTON>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>날짜를 입력해 주세요(ex)20220404)</Modal.Title>
        </Modal.Header>
        <Modal.Body><input type="date" onChange={handleChange} /></Modal.Body>
        <Modal.Footer>
          <BUTTON gray onClick={handleClose}>
            취소
          </BUTTON>
          <BUTTON onClick={handleSubmit}>
            신청
          </BUTTON>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default PassDateModal;