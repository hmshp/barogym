import React, { useState, useContext } from 'react';
import {Modal, Button} from 'react-bootstrap'
import { BUTTON } from '../../../../styles/MembershipStyle';
import UserContext from '../../../../userContext'
import { useNavigate } from 'react-router-dom';

const DeleteCommentModal = (props) => {
  const { userId } = useContext(UserContext)
  const {bno, commentNo, showModal, setShowModal} = props;

  const navigate = useNavigate();

  const handleClose = () => setShowModal(false);
  
  const handleDelete = (event) => {
    fetch(`http://localhost:9000/board/qnaCommentDelete?bno=${bno}&qc_no=${commentNo}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(result => console.log(result))

      window.location.reload();
  }

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>댓글 삭제</Modal.Title>
        </Modal.Header>
        <Modal.Body>삭제하시겠습니까?</Modal.Body>
        <Modal.Footer>
          <BUTTON gray onClick={handleClose}>
            취소
          </BUTTON>
          <BUTTON onClick={handleDelete}>
            삭제
          </BUTTON>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default DeleteCommentModal;