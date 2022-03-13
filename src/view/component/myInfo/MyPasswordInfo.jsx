import React from "react";
import { useForm } from "react-hook-form";
import {STYLEDCONTAINER, FORM, FORMTITLE, FORMITEM, STYLEDBUTTON, LABEL, INPUT} from '../../../styles/MyInfoStyle';

// 버그 있음!! defaultValue를 설정해 놓았음에도 불구하고, '비밀번호수정' 버튼 누르고 아무것도 바꾸지 않은 채(input에 커서를 두지 않은 채) '변경하기' 버튼을 누르면 input value가 undefined라고 출력된다(값 확인용으로 콘솔에 출력하면)
// 아마 uncontrolled form이라서 input에 커서를 대지 않으면 초기값이 적용이 안 되는 듯....? 

export default function MyPasswordInfo(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors)

  return (
    <STYLEDCONTAINER relative>
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
    </STYLEDCONTAINER>
  );
}