import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {FORM, INPUT, BUTTON} from '../../../styles/MembershipStyle'
import { getCookie, setCookie } from "./cookie";

export default function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [cmemName, setMemName] = useState('');//useState 사용하여 40, 41번에도 쿠키에 저장된 값이 동기화 되도록 
  const [cmemUid, setMemUid] = useState('');//useState 사용하여 40, 41번에도 쿠키에 저장된 값이 동기화 되도록 

  console.log(cmemName, cmemUid)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted!"+formData.email+", "+formData.password);
    //onLogin(formData.email,formData.password);
    
    fetch(`http://localhost:9000/member/memberLogin?email=${formData.email}&password=${formData.password}`)//톰캣에게 로그인 해달라고 요청. 우선 get 방식으로 해 둠
    .then(res => res.json())
    .then(result => {
      //console.log(result);
      console.log(result[0].MEM_ID+", "+result[0].MEM_NAME);
      setCookie('cmem_uid', result[0].MEM_ID);//쿠키에 값을 담는 코드. //DB연동에서 insert할때 필요한 값들이 담겨 있어야 한다
      setCookie('cmem_name', result[0].MEM_NAME);//쿠키에 값을 담는 코드 //DB연동에서 insert할때 필요한 값들이 담겨 있어야 한다
      setMemName(result[0].MEM_NAME);
      setMemUid(result[0].MEM_ID);
    });

    console.log(`getCookie : ${cmemUid} , ${cmemName}`); //쿠키에 담긴 아이디와 이름을 출력해 두었으니 수업신청시나 관리자 메뉴에서 필요할 때 꺼내 쓰면 된다.
    navigate('/');//로그인 시 Home으로 이동
    //수동으로 새로고침해야 쿠키 값 반영됨

/*
Can't perform a React state update on an unmounted component. 
This is a no-op, but it indicates a memory leak in your application
*/
  }

  return (
      <main>
        <FORM onSubmit={handleSubmit}>
          <INPUT
            name="email" type="email" placeholder="이메일" required value={formData.email} onChange={handleChange}
          />
          <INPUT
            name="password" type="password" placeholder="비밀번호" required value={formData.password} onChange={handleChange}
          />
          <BUTTON>로그인</BUTTON>
        </FORM>
      </main>
  );
}