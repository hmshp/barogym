import {useState, React, useEffect, useContext} from 'react';
import MyContactInfo from '../../component/myInfo/MyContactInfo';
import MyPasswordInfo from '../../component/myInfo/MyPasswordInfo';
import { useNavigate } from 'react-router-dom';
import {PAGEHEADER, CONTAINER, BUTTON, FORM, INPUT, H1, FORMTITLE, FORMITEM, LABEL, ADDRSECTION} from '../../../styles/MyInfoStyle';
import { TWOBUTTONS } from '../../../styles/MyInfoStyle';
import { LinkContainer} from 'react-router-bootstrap';
import ResignMembershipModal from '../../component/login/ResignMembershipModal';
import UserContext from '../../../userContext';


const MyInfoUpdatePage = () => {
  //input disabled 속성만 없앤 페이지다
  const { userId } = useContext(UserContext)

  const [isPwChecked, setIsPwChecked] = useState(false);
  //올바른 비번 입력 후 나오는 화면에서 연락처 또는 비밀번호 수정 가능한지
  //(연락처나 비번 수정할 수 있는 input이 disabled 상태인지)를 나타내는 state
  const [isContactDisabled, setIsContactDisabled] = useState(true);
  const [isPwDisabled, setIsPwDisabled] = useState(true);

  const [myInfo, setMyInfo] = useState({
    // mem_email: "",
    // mem_tel: "",
    // mem_addr: "",
    // mem_addr_dtl: "",
    // mem_pw: ""
  });

  console.log(myInfo)
  const handleChange = (event) => {
    const name = event.target.name
    console.log(name)
    setMyInfo(prevInfo => ({
      ...prevInfo,
      [name]: event.target.value
    }))
  }

  const handleSubmit = () => {
    fetch(`http://localhost:9000/member/updMem`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          mem_email: myInfo.mem_email,
          mem_tel: myInfo.mem_tel,
          mem_pw: myInfo.mem_pw,
          mem_id: userId,
        }
      )
    })
      .then(res => res.json())
      .then(result => console.log(result))

      navigate('/myInfo')
    }

  const navigate = useNavigate();

  useEffect(() => {//두 개의 useEffect 순서가 꼭 코드 라인대로 실행되는 게 아니라 어떤 떄는 두번째꺼(비번 불러오기) 먼저 실행된 다음 첫 번째께(처음엔 ...operator 안 쓰고 fetch 응답 받은 값을 그냥 대입(기존 state 대체)하는 방식이었다) myInfo를 덮어버린다. 그래서 기존 myInfo 값은 그대로 두고 새로운 값을 추가하는 ...연산자 방식으로 바꿨다.
    fetch(`http://localhost:9000/member/detMem?mem_id=${userId}`)
      .then(res => res.json())
      .then(result => setMyInfo(prevInfo => ({
        ...prevInfo,
        mem_email: result[0].MEM_EMAIL,
        mem_tel: result[0].MEM_TEL,
        mem_addr: result[0].MEM_ADDR,
        mem_addr_dtl: result[0].MEM_ADDR_DTL,
      })))
  }, [])

  useEffect(() => {
    fetch(`http://localhost:9000/member/checkPw?id=${userId}`)
    .then(res => res.json())
    .then(result => setMyInfo(prevInfo => ({
      ...prevInfo,
      mem_pw: result
    })))
  }, [])
  

  return (
    <CONTAINER>
        <PAGEHEADER>
          <h1>내 정보</h1>
          <ResignMembershipModal />
        </PAGEHEADER>
        <main>
          <CONTAINER flex>
            <CONTAINER sidePadding relative>
              <FORMTITLE>
                <h2>회원 정보</h2>
                <BUTTON onClick={handleSubmit}>변경하기</BUTTON>
              </FORMTITLE>
              <FORM>
                <FORMITEM>
                  <LABEL htmlFor={myInfo.mem_email}>이메일</LABEL>
                  <INPUT
                    id={myInfo.mem_email}
                    name="mem_email"
                    value={myInfo.mem_email || ''}//controlled input을 uncontrolled로 하려고 한다는 에러가 나와서 || ''를 넣었다. undefined 방지용으로
                    onChange={handleChange}
                    required
                    type="email"
                  />
                </FORMITEM>
                <FORMITEM>
                  <LABEL htmlFor={myInfo.mem_tel}>휴대폰</LABEL>
                  <INPUT
                    id={myInfo.mem_tel}
                    name="mem_tel"
                    value={myInfo.mem_tel || ''}
                    onChange={handleChange}
                    required
                  />
                </FORMITEM>
                <FORMITEM>
                  <LABEL htmlFor={myInfo.mem_pw}>비밀번호</LABEL>
                  <INPUT
                    id={myInfo.mem_pw}
                    name="mem_pw"
                    value={myInfo.mem_pw || ''}
                    onChange={handleChange}
                    required
                    type="password"
                  />
                </FORMITEM>
              </FORM>
            </CONTAINER>
          </CONTAINER>
        </main>
      {/* </>
      
    } */}

    </CONTAINER>
  );
};

export default MyInfoUpdatePage;