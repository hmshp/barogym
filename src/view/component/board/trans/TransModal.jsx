import React from 'react';
import {Modal, Button} from 'react-bootstrap'
import { BUTTON, GRIDCONTAINER } from '../../../../styles/BoardStyle';

const TransModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          댓글 작성자 목록
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <GRIDCONTAINER>
          <BUTTON>손혜미</BUTTON>
          <BUTTON>김사랑</BUTTON>
          <BUTTON>손혜미</BUTTON>
          <BUTTON>김사랑</BUTTON>
        </GRIDCONTAINER>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>취소</Button>
        <Button onClick={props.onHide}>양도하기</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TransModal;