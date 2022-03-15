import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import {CONTAINER, FORM, FORMTITLE, FORMITEM, LABEL, INPUT, BUTTON, TWOBUTTONS, H1} from '../../../styles/MembershipStyle';
const FindEmailPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors)

  const navigate = useNavigate();

  return (
    <CONTAINER>
        <FORMTITLE>
          <H1>이메일 찾기</H1>
        </FORMTITLE>
        <FORM onSubmit={handleSubmit((data) => console.log(data))}>
          <FORMITEM>
            <LABEL htmlFor="name">이름</LABEL>
            <INPUT
              {...register("name")}
              id="name"
              required
            />
          </FORMITEM>
          <FORMITEM>
            <LABEL htmlFor="phone">휴대폰</LABEL>
            <INPUT
              {...register("phone")}
              id="phone"
              required
            />
          </FORMITEM>
          <TWOBUTTONS>
            <BUTTON
              onClick={()=>{ navigate('/login'); window.location.reload();}}
              small gray
            >
              취소
            </BUTTON>
            <BUTTON small>확인</BUTTON>
          </TWOBUTTONS>
        </FORM>
    </CONTAINER>
  );
};

export default FindEmailPage;