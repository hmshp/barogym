import {useState, React} from 'react';
import MyInfoModal from '../../component/myInfo/MyInfoModal';
import MyContactInfo from '../../component/myInfo/MyContactInfo';

const MyInfoPage = () => {
  const [modalShow, setModalShow] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  const activateInput = () => {
    setIsDisabled(false)
  }

  return (
    <div>
      <h1>내 정보</h1>
      <MyContactInfo
        isDisabled={isDisabled}
        activateInput={activateInput}
      />
      <MyInfoModal
        onHide={() => setModalShow(false)}
        show={modalShow}
      />
    </div>
  );
};

export default MyInfoPage;