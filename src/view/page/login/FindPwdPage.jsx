import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import {CONTAINER, FORM, FORMHEADER, FORMITEM, LABEL, INPUT, BUTTON, TWOBUTTONS, H1, PWRESULT} from '../../../styles/MembershipStyle';

const FindPwdPage = () => {
  const navigate = useNavigate();

  const [memberInfo, setMemberInfo] = useState({
    id: "",
    email: ""
  });

  const [pwResult, setPwResult] = useState();

  console.log(memberInfo)

  const handleChange = (event) => {
    const { name, value } = event.target
    setMemberInfo(prevInfo => ({...prevInfo, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:9000/member/findPw?mem_id=${memberInfo.id}&mem_email=${memberInfo.email}`)
      .then(res => res.json())
      .then(result => setPwResult(`비밀번호: ${result[0].MEM_PW}`))
    typeof pwResult == "undefined" && setPwResult("입력하신 정보와 일치하는 비밀번호가 없습니다.")
  }

  return (
    <CONTAINER>
        <FORMHEADER>
          <H1>비밀번호 찾기</H1>
        </FORMHEADER>
        <main>
          <FORM onSubmit={handleSubmit}>
            <div>
              <LABEL thirty htmlFor="id">아이디</LABEL>
              <INPUT
                id="id"
                name="id"
                onChange={handleChange}
                value={memberInfo.id}
                seventy
              />
            </div>
            <div>
              <LABEL thirty htmlFor="email">이메일</LABEL>
              <INPUT
                id="email"
                name="email"
                onChange={handleChange}
                value={memberInfo.email}
                type="email" //@ 안붙이면 안내 메시지 뜸
                seventy
              />
            </div>

            <TWOBUTTONS>
              <BUTTON
                onClick={()=>{ navigate('/login');}}
                forty gray
              >
                취소
              </BUTTON>
              <BUTTON forty>확인</BUTTON>
            </TWOBUTTONS>
            {
              pwResult && <PWRESULT>{pwResult}</PWRESULT>
            }
          </FORM>
        </main>
    </CONTAINER>
  );
};

export default FindPwdPage;