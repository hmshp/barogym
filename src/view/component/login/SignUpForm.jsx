import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {FORM, INPUT, BUTTON, TWOBUTTONS, RADIOINPUT, RADIOITEM, FIELDSET, LEGEND} from '../../../styles/MembershipStyle'
import Zipcode from './Zipcode';

export default function SignUpForm() {
  const navigate = useNavigate();

  const [isSelected, setIsSelected] = useState(false);
  const [signUpFormData, setSignUpFormData] = useState({//회원가입에 필요한 컬럼 좀 더 추가
    mem_email: "",
    mem_pw: "",
    mem_id: "",
    mem_name: "",
    mem_nickname: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted!"+signUpFormData.mem_email+", "+signUpFormData.mem_pw+", "+signUpFormData.mem_name+", "+signUpFormData.mem_nickname);
    //onLogin(formData.email,formData.password);
    
    fetch(`http://localhost:9000/member/memberInsert?mem_id=${signUpFormData.mem_id}&mem_email=${signUpFormData.mem_email}&mem_pw=${signUpFormData.mem_pw}&mem_name=${signUpFormData.mem_name}&mem_nickname=${signUpFormData.mem_nickname}`)
    .then(res => res.json())
    .then(result => {
      console.log('회원가입 여부 : '+result);
      navigate('/');
    });    
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setSignUpFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  // const idCheck = () => {
  //   fetch(`http://localhost:9000`)

  // }

  return (
      <main>
        {
          !isSelected ?
          <TWOBUTTONS>
            <BUTTON forty thick onClick={() => setIsSelected(true)}>회원</BUTTON>
            <BUTTON forty thick onClick={() => setIsSelected(true)}>강사</BUTTON>
          </TWOBUTTONS>
          :
          <FORM onSubmit={handleSubmit}>
            <div>
              <INPUT type="email" name="mem_email" value={signUpFormData.mem_email} onChange={handleChange}
                placeholder="이메일"
                seventy
              />
              <BUTTON thirty gray onClick={idCheck} type="button">중복확인</BUTTON>
            </div>
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
            <INPUT onChange={handleChange}
              placeholder="휴대폰 번호"
            />
            <Zipcode />
            <FIELDSET>
              <LEGEND>성별을 선택해 주세요.</LEGEND>
                <RADIOITEM>
                  <RADIOINPUT
                    type="radio"
                    id="woman"
                    value="여성"
                  />
                  <label htmlFor="woman">여성</label>
                </RADIOITEM>
                <RADIOITEM>
                  <RADIOINPUT
                    type="radio"
                    id="man"
                    value="남성"
                  />
                  <label htmlFor="man">남성</label>
                </RADIOITEM>
                <RADIOITEM>
                  <RADIOINPUT
                    type="radio"
                    id="notToSay"
                    value="공개 안 함"
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
        }
        
      </main>
  );
}