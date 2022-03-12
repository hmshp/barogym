import {useState, React} from 'react';
import MyContactInfo from '../../component/myInfo/MyContactInfo';
import MyPasswordInfo from '../../component/myInfo/MyPasswordInfo';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap'

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
    <STYLEDCONTAINER>
    {
      !isPwChecked?
      <form>
        <label> 
          비밀번호 확인(1234)
        </label>
        <input 
          onChange={handleChange}
          type="password"
          placeholder='비밀번호를 입력해 주세요.'
        />
        <Button onClick={checkPassword}>확인</Button>
        <Button 
          onClick={()=>{ navigate('/'); window.location.reload();}} 
          variant="secondary">
            취소
        </Button>
      </form>
      :
      <>
        <PAGEHEADER>
          <h1>내 정보</h1>
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
      </>
      
    }
      
      
    </STYLEDCONTAINER>
  );
};

export default MyInfoPage;