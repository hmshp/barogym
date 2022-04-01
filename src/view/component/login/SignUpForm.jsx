import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {FORM, INPUT, BUTTON, TWOBUTTONS, RADIOINPUT, RADIOITEM, FIELDSET, LEGEND, ERRORMSG} from '../../../styles/MembershipStyle'
import Zipcode from './Zipcode';

export default function SignUpForm() {
  const navigate = useNavigate();

  const [signUpFormData, setSignUpFormData] = useState({//회원가입에 필요한 컬럼 좀 더 추가
    mem_email: "",
    mem_pw: "",
    mem_id: "",
    mem_name: "",
    mem_nickname: "",
    mem_zipcode: "",
    mem_addr: "",
    mem_addr_dtl: "",
    mem_gender: "",
    mem_tel: "",
    mem_birthday: "",
  });

  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");

  console.log(emailErrorMsg)
  console.log('이메일 체크 여부: ' + isEmailChecked)

  console.log(signUpFormData)

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`제출됨!${signUpFormData.mem_email}${signUpFormData.mem_pw}${signUpFormData.mem_id}${signUpFormData.mem_name}${signUpFormData.mem_nickname}${signUpFormData.mem_zipcode}${signUpFormData.mem_addr}${signUpFormData.mem_addr_dtl}
    ${signUpFormData.mem_gender}${signUpFormData.mem_tel}${signUpFormData.mem_birthday}
    `);
    //onLogin(formData.email,formData.password);
    
    fetch(`http://localhost:9000/member/memberInsert?mem_id=${signUpFormData.mem_id}&mem_email=${signUpFormData.mem_email}&mem_pw=${signUpFormData.mem_pw}&mem_name=${signUpFormData.mem_name}&mem_nickname=${signUpFormData.mem_nickname}&mem_zipcode=${signUpFormData.mem_zipcode}&mem_addr=${signUpFormData.mem_addr}&mem_addr_dtl=${signUpFormData.mem_addr_dtl}&mem_tel=${signUpFormData.mem_tel}&mem_birthday=${signUpFormData.mem_birthday}`)
    .then(res => res.json())
    .then(result => {
      console.log('회원가입 여부 : '+result);
      navigate('/');
    });    
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setSignUpFormData(prevFormData => {
      let genderNum
      if(name === "mem_gender") {
        switch (value) {
          case "남성":
            genderNum = 0
            break;
          case "여성":
            genderNum = 1
            break;
          case "공개 안 함":
            genderNum = 2
            break;
        }
        return {
          ...prevFormData,
          [name]: genderNum
        }
      } else {
        return {
          ...prevFormData,
          [name]: value
        }
      }
    })

  }

  const checkAvailability = () => {
    fetch(`http://localhost:9000/member/emailCheck?email=${signUpFormData.mem_email}`)
      .then(res => res.json())
      .then(result => {
        result === 1 ? setEmailErrorMsg("이미 다른 사용자가 사용 중입니다.")
        : setIsEmailChecked(true) 
      })
  }

  // const idCheck = () => {
  //   fetch(`http://localhost:9000`)

  // }

  return (
      <main>
          <FORM onSubmit={handleSubmit}>
            <div>
              <INPUT type="email" name="mem_email" value={signUpFormData.mem_email} onChange={handleChange}
                placeholder="이메일"
                seventy
              />
              <BUTTON thirty gray onClick={checkAvailability} type="button">중복확인</BUTTON>
            </div>
            {!isEmailChecked && <ERRORMSG>{emailErrorMsg}</ERRORMSG>}
            <INPUT name="mem_pw" value={signUpFormData.mem_pw} onChange={handleChange} 
              placeholder="비밀번호"
            />
            <INPUT
              placeholder="비밀번호 확인"
            />
            <INPUT onChange={handleChange} name="mem_name" value={signUpFormData.mem_name}
              placeholder="이름"
            />
            <INPUT onChange={handleChange} name="mem_id" value={signUpFormData.mem_id}
              placeholder="아이디"
            />
            <INPUT onChange={handleChange} name="mem_nickname" value={signUpFormData.mem_nickname}
              placeholder="닉네임"
            />
            <INPUT onChange={handleChange} name="mem_tel" value={signUpFormData.mem_tel}
              placeholder="휴대폰 번호"
            />
            <INPUT onChange={handleChange} name="mem_birthday" value={signUpFormData.mem_birthday}
              placeholder="생년월일"
            />
            <Zipcode
              signUpFormData={signUpFormData}
              setSignUpFormData={setSignUpFormData}
              handleChange={handleChange}
              />
            <FIELDSET>
              <LEGEND>성별을 선택해 주세요.</LEGEND>
                <RADIOITEM>
                  <RADIOINPUT
                    type="radio"
                    id="woman"
                    name="mem_gender"
                    value="여성"
                    checked={signUpFormData.mem_gender === 1}
                    onChange={handleChange}
                  />
                  <label htmlFor="woman">여성</label>
                </RADIOITEM>
                <RADIOITEM>
                  <RADIOINPUT
                    type="radio"
                    id="man"
                    name="mem_gender"
                    value="남성"
                    checked={signUpFormData.mem_gender === 0}
                    onChange={handleChange}
                  />
                  <label htmlFor="man">남성</label>
                </RADIOITEM>
                <RADIOITEM>
                  <RADIOINPUT
                    type="radio"
                    id="notToSay"
                    name="mem_gender"
                    value="공개 안 함"
                    checked={signUpFormData.mem_gender === 2}
                    onChange={handleChange}
                  />
                  <label htmlFor="notToSay">공개 안 함</label>
                </RADIOITEM>
            </FIELDSET>

            <TWOBUTTONS>
              <BUTTON
                forty
                thick
                gray
                onClick={()=>{ navigate('/');}} 
              >
                취소
              </BUTTON>
              <BUTTON
                forty
                thick
              >
                회원가입
              </BUTTON>
            </TWOBUTTONS>
          </FORM>  
      </main>
  );
}