import {useState, React, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {PAGEHEADER, CONTAINER, BUTTON, FORM, INPUT, FORMTITLE, FORMITEM, LABEL, ADDRSECTION} from '../../../styles/MyInfoStyle';
import ResignMembershipModal from '../../component/login/ResignMembershipModal';
import UserContext from '../../../userContext';


const MyInfoPage = () => {
  const { userId } = useContext(UserContext)

  const [isOnEditeMode, setIsOnEditeMode] = useState(false);
  //올바른 비번 입력 후 나오는 화면에서 연락처 또는 비밀번호 수정 가능한지
  //(연락처나 비번 수정할 수 있는 input이 disabled 상태인지)를 나타내는 state


  const [myInfo, setMyInfo] = useState({});

  console.log(myInfo)
  const handleChange = (event) => {
    const name = event.target.name
    console.log(name)
    setMyInfo(prevInfo => ({
      ...prevInfo,
      [name]: event.target.value
    }))
  }

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9000/member/detMem?mem_id=${userId}`)
      .then(res => res.json())
      .then(result => setMyInfo((prevInfo => ({//2개의 useEffect 실행되는 순서가 코드 순이 아닌 듯..? 그래서 pw 담는 fetch문 실행된 다음 수정 전 요 아래에 있던 코드(...operator 이용 안하고 그냥 대체하면서 냅다 담는 방식)가 myInfo를 덮어쓰기해 버려서 비밀번호가 입력이 안 됐던 것 같다.
        ...prevInfo,
        mem_email: result[0].MEM_EMAIL,
        mem_tel: result[0].MEM_TEL,
        mem_addr: result[0].MEM_ADDR,
        mem_addr_dtl: result[0].MEM_ADDR_DTL,
      }))))
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
                <BUTTON onClick={() => navigate('/myInfo/update')}>회원 정보 수정</BUTTON>
              </FORMTITLE>
              <FORM>
                <FORMITEM>
                  <LABEL htmlFor={myInfo.mem_email}>이메일</LABEL>
                  <INPUT
                    id={myInfo.mem_email}
                    name="mem_email"
                    disabled
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
                    disabled
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
                    disabled
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

export default MyInfoPage;