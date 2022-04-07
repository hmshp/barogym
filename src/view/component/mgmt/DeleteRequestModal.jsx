import React, { useState, useContext } from 'react';
import {Modal, Button} from 'react-bootstrap'
import { BUTTON } from '../../../styles/MembershipStyle';
import UserContext from '../../../userContext'
import { useNavigate } from 'react-router-dom';

const DeleteRequestModal = (props) => {
  const { userId } = useContext(UserContext)
  const { showModal, setShowModal, reqNo } = props;

  const navigate = useNavigate();

  console.log(reqNo)

  const handleClose = () => setShowModal(false);
  const deleteRequest = () => {
    fetch(`http://localhost:9000/request/requestDelete?req_no=${reqNo}`)
      .then(res => res.json())
      .then(result => console.log(result))

    setShowModal(false)
    // navigate('/'); window.location.reload();
  }

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>요청 내역 삭제</Modal.Title>
        </Modal.Header>
        <Modal.Body>삭제하시겠습니까?</Modal.Body>
        <Modal.Footer>
          <BUTTON gray onClick={handleClose}>
            취소
          </BUTTON>
          <BUTTON onClick={deleteRequest}>
            삭제
          </BUTTON>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default DeleteRequestModal;