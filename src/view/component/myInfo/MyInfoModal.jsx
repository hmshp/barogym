import React from 'react';
import {Modal, Button} from 'react-bootstrap'

const MyInfoModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          비밀번호 확인
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <input
            type="password"
            placeholder='비밀번호를 입력해 주세요.'
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyInfoModal;