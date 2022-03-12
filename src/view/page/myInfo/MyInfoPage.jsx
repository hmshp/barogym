import {useState, React} from 'react';
import MyInfoModal from '../../component/myInfo/MyInfoModal';
import MyContactInfo from '../../component/myInfo/MyContactInfo';
import MyPasswordInfo from '../../component/myInfo/MyPasswordInfo';
import styled from 'styled-components'

const PAGEHEADER = styled.header`
  margin: 2em 0;
  display: flex;
  justify-content: space-between;
`

const STYLEDCONTAINER = styled.div`
  margin: 0 auto;
  width: 90%;
`

const STYLEDSECTION = styled.section`
  @media(min-width: 800px) {
    display: flex;
    justify-content: space-between;
  }

  margin-bottom: 5em;
  
`

const STYLEDBUTTON = styled.button`
  background-color: rgb(254, 139, 121);
  color: white;
  padding: 0.5em 1em;
  border-radius: 4px;
  border: none;
`

const MyInfoPage = () => {
  const [modalShow, setModalShow] = useState(true);
  const [isContactDisabled, setIsContactDisabled] = useState(true);
  const [isPwDisabled, setIsPwDisabled] = useState(true);

  const activateContactInput = () => {
    setIsContactDisabled(false)
  }
  const activatePwInput = () => {
    setIsPwDisabled(false)
  }

  return (
    <STYLEDCONTAINER>
      <PAGEHEADER>
        <h1>내 정보</h1>
        {/* <STYLEDBUTTON>회원 탈퇴</STYLEDBUTTON> */}
      </PAGEHEADER>
      <STYLEDSECTION>
        <MyContactInfo
          isDisabled={isContactDisabled}
          activateInput={activateContactInput}
        />
        <MyPasswordInfo
          isDisabled={isPwDisabled}
          activateInput={activatePwInput}
        />
      </STYLEDSECTION>
      <STYLEDBUTTON>회원 탈퇴</STYLEDBUTTON>
      <MyInfoModal
        onHide={() => setModalShow(false)}
        show={modalShow}
      />
    </STYLEDCONTAINER>
  );
};

export default MyInfoPage;