import React from "react";
import { useForm } from "react-hook-form";
import styled from 'styled-components'

const SECTION = styled.section`
  width: 80%;
  margin: 0 auto;
`

const FORMCONTAINER = styled.div`
  max-width: 500px;
  margin: 0 auto;
`

const FORM = styled.form`
  margin: 2em auto;
  /* width: 100%; */
  /* max-width: 500px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FORMTITLE = styled.div`
  display: flex;
  justify-content: space-between;
`

const FORMITEM = styled.div`
  display: flex;
  justify-content: space-around;
`

const LABEL = styled.label`
  width: 100px;
`

const INPUT = styled.input`
  height: 40px;
  border-radius: 4px;
  border: 1px solid gray;
`

const STYLEDBUTTON = styled.button`
  background-color: rgb(254, 139, 121);
  color: white;
  padding: 0.5em 1em;
  border-radius: 4px;
  border: none;
`

export default function MyContactInfo(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors)

  return (
    <SECTION>
      <FORMCONTAINER>
        <FORMTITLE>
          <h2>회원 정보</h2>
          <STYLEDBUTTON onClick={props.activateInput}>회원 정보 수정</STYLEDBUTTON>
        </FORMTITLE>
        <FORM onSubmit={handleSubmit((data) => console.log(data))}>
          <FORMITEM>
            <LABEL htmlFor="email">이메일</LABEL>
            <INPUT
              {...register("email", { required: '필수 입력사항입니다.' })}
              id="email"
              defaultValue="abc@gmail.com"
              disabled={props.isDisabled}
            />
            <p>{errors.email?.message}</p>
          </FORMITEM>

          <FORMITEM>
            <LABEL htmlFor="phone">휴대폰</LABEL>
            <INPUT
              {...register("phone", { required: '필수 입력사항입니다.' })}
              id="phone"
              defaultValue="010-1234-5678"
              disabled={props.isDisabled}
            />
            <p>{errors.phone?.message}</p>
          </FORMITEM>

          <FORMITEM>
            <LABEL htmlFor="address">주소</LABEL>
            <INPUT
              {...register("address", { required: '필수 입력사항입니다.' })}
              id="address"
              defaultValue="서울시 강남구"
              disabled={props.isDisabled}
            />
            <p>{errors.address?.message}</p>
          </FORMITEM>

          <STYLEDBUTTON>변경하기</STYLEDBUTTON>
        </FORM>
      </FORMCONTAINER>
    </SECTION>
  );
}