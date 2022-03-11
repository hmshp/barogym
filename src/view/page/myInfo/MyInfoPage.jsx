import React from 'react';
import MyInfoModal from '../../component/myInfo/MyInfoModal';

const MyInfoPage = () => {
  const [modalShow, setModalShow] = React.useState(true);

  return (
    <div>
      <h1>내 정보</h1>
      <MyInfoModal
        onHide={() => setModalShow(false)}
        show={modalShow}
      />
    </div>
  );
};

export default MyInfoPage;