import React from "react";
import { useForm } from "react-hook-form";
import styled, {css} from 'styled-components'

// 버그 있음!! defaultValue를 설정해 놓았음에도 불구하고, '비밀번호수정' 버튼 누르고 아무것도 바꾸지 않은 채(input에 커서를 두지 않은 채) '변경하기' 버튼을 누르면 input value가 undefined라고 출력된다(값 확인용으로 콘솔에 출력하면)
// 아마 uncontrolled form이라서 input에 커서를 대지 않으면 초기값이 적용이 안 되는 듯....? 

const SECTION = styled.section`
  margin: 0 auto;
  width: 90%;
  padding: 0 2em;
  position: relative;
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
  justify-content: space-between;
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
  @media(min-width: 800px) {
    ${props =>
    props.bottom &&
    css`
      position: absolute;
      bottom: 0;
    `}
  }
`

export default function MyPasswordInfo(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors)

  return (
    <SECTION>
        <FORMTITLE>
          <h2>비밀번호</h2>
          <STYLEDBUTTON onClick={props.activateInput}>비밀번호 수정</STYLEDBUTTON>
        </FORMTITLE>
        <FORM onSubmit={handleSubmit((data) => console.log(data))}>
          <FORMITEM>
            <LABEL htmlFor="password">비밀번호</LABEL>
            <INPUT
              {...register("password")}
              id="password"
              defaultValue="1234"
              disabled={props.isDisabled}
              required
              type="password"
            />
          </FORMITEM>

          <STYLEDBUTTON bottom>변경하기</STYLEDBUTTON>
        </FORM>
    </SECTION>
  );
}