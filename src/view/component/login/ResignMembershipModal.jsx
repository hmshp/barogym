import React, { useState, useContext } from 'react';
import {Modal, Button} from 'react-bootstrap'
import { BUTTON } from '../../../styles/MembershipStyle';
import UserContext from '../../../userContext'
import { useNavigate } from 'react-router-dom';

const ResignMembershipModal = (props) => {
  const { userId } = useContext(UserContext)
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteMember = () => {
    fetch(`http://localhost:9000/member/delMem?mem_id=${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(result => console.log(result))

    setShow(false)
    // navigate('/'); window.location.reload();
  }

  return (
    <>
      <BUTTON onClick={handleShow}>
        회원 탈퇴
      </BUTTON>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>회원 탈퇴</Modal.Title>
        </Modal.Header>
        <Modal.Body>정말로 탈퇴하시겠습니까?</Modal.Body>
        <Modal.Footer>
          <BUTTON gray onClick={handleClose}>
            취소
          </BUTTON>
          <BUTTON onClick={deleteMember}>
            탈퇴하기
          </BUTTON>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ResignMembershipModal;