import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import {CONTAINER, FORM, FORMHEADER, FORMITEM, LABEL, INPUT, BUTTON, TWOBUTTONS, H1, ERRORMSG} from '../../../styles/MembershipStyle';
const FindEmailPage = () => {
  const [memberInfo, setMemberInfo] = useState({
    name: "",
    tel: ""
  });
  const navigate = useNavigate();

  console.log(memberInfo)

  const handleChange = (event) => {
    const { name, value } = event.target
    setMemberInfo(prevInfo => ({...prevInfo, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:9000`)
      .then(res => res.json())
      .then(result => console.log(result))
  }

  return (
    <CONTAINER>
        <FORMHEADER>
          <H1>이메일 찾기</H1>
        </FORMHEADER>
        <main>
          <FORM onSubmit={handleSubmit}>
            <div>
              <LABEL thirty htmlFor="name">이름</LABEL>
              <INPUT
                id="name"
                value={memberInfo.name}
                name="name"
                onChange={handleChange}
                seventy
              />
              <ERRORMSG rightAlign></ERRORMSG>
            </div>
            <div>
              <LABEL thirty htmlFor="tel">휴대폰</LABEL>
              <INPUT
                id="tel"
                value={memberInfo.tel}
                name="tel"
                onChange={handleChange}
                seventy
              />
              <ERRORMSG rightAlign></ERRORMSG>
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
          </FORM>
        </main>
    </CONTAINER>
  );
};

export default FindEmailPage;