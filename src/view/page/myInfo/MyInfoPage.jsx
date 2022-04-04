import {useState, React} from 'react';
import MyContactInfo from '../../component/myInfo/MyContactInfo';
import MyPasswordInfo from '../../component/myInfo/MyPasswordInfo';
import { useNavigate } from 'react-router-dom';
import {PAGEHEADER, CONTAINER, BUTTON, FORM, INPUT, H1} from '../../../styles/MyInfoStyle';
import { TWOBUTTONS } from '../../../styles/MyInfoStyle';
import { LinkContainer} from 'react-router-bootstrap';
import ResignMembershipModal from '../../component/login/ResignMembershipModal';


const MyInfoPage = () => {
  const [isPwChecked, setIsPwChecked] = useState(false);
  //올바른 비번 입력 후 나오는 화면에서 연락처 또는 비밀번호 수정 가능한지
  //(연락처나 비번 수정할 수 있는 input이 disabled 상태인지)를 나타내는 state
  const [isContactDisabled, setIsContactDisabled] = useState(true);
  const [isPwDisabled, setIsPwDisabled] = useState(true);
  const [pw, setPw] = useState("");

  const checkPassword = () => {
    //원래는 firebase로 보내서 비번이 일치하는지 확인하여야 함
    const tempPw = "1234";
    if(tempPw === pw){
      console.log("비밀번호 맞음")
      setIsPwChecked(true);
    } else {
      alert("비밀번호가 맞지않습니다.");
    }
  }

  const handleChange = (event) => {
    setPw(event.target.value)
  }

  const navigate = useNavigate();
  

  const activateContactInput = () => {
    setIsContactDisabled(false)
  }
  const activatePwInput = () => {
    setIsPwDisabled(false)
  }

  return (
    <CONTAINER>
    {/* {
      !isPwChecked?
      <> */}
        {/* <PAGEHEADER>
          <H1>비밀번호 확인(1234)</H1>
        </PAGEHEADER>
        <main>
          <FORM>
            <INPUT
              pwCheck
              onChange={handleChange}
              type="password"
              placeholder='비밀번호를 입력해 주세요.'
              id="password"
            />
            <TWOBUTTONS>
              <BUTTON
                forty gray thick
                onClick={()=>{ navigate('/'); window.location.reload();}} 
              >
                  취소
              </BUTTON>
              <BUTTON forty thick onClick={checkPassword}>확인</BUTTON>
            </TWOBUTTONS>
          </FORM>
        </main> */}
      {/* </>
      :
      <> */}
        <PAGEHEADER>
          <h1>내 정보</h1>
          <ResignMembershipModal />
        </PAGEHEADER>
        <main>
          <CONTAINER flex>
            <MyContactInfo
              isDisabled={isContactDisabled}
              activateInput={activateContactInput}
            />
            <MyPasswordInfo
              isDisabled={isPwDisabled}
              activateInput={activatePwInput}
            />
          </CONTAINER>
        </main>
      {/* </>
      
    } */}

    </CONTAINER>
  );
};

export default MyInfoPage;