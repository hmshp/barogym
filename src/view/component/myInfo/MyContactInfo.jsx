import React, {useState} from "react";
import { useForm } from "react-hook-form";
import {CONTAINER, FORM, FORMTITLE, FORMITEM, LABEL, INPUT, BUTTON, ADDRSECTION} from '../../../styles/MyInfoStyle';

// 버그 있음!! defaultValue를 설정해 놓았음에도 불구하고, '회원정보 수정' 버튼 누르고 아무것도 바꾸지 않은 채(input에 커서를 두지 않은 채) '변경하기' 버튼을 누르면 input value가 undefined라고 출력된다(값 확인용으로 콘솔에 출력하면)
// 아마 uncontrolled form이라서 input에 커서를 대지 않으면 초기값이 적용이 안 되는 듯....? 

export default function MyContactInfo(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors)

  const [member,setMember] = useState({
    email:"abc@gmail.com",
    phone:"010-1234-5678",
    address:"서울시 강남구",
    zipcode: "06234"
  });

  return (
    <CONTAINER sidePadding relative>
        <FORMTITLE>
          <h2>회원 정보</h2>
          <BUTTON onClick={props.activateInput}>회원 정보 수정</BUTTON>
        </FORMTITLE>
        <FORM onSubmit={handleSubmit((data) => console.log(data))}>
          <FORMITEM>
            <LABEL htmlFor="email">이메일</LABEL>
            <INPUT
              {...register("email")}
              id="email"
              defaultValue={member.email}
              disabled={props.isDisabled}
              required
              type="email"
            />
            
          </FORMITEM>

          <FORMITEM>
            <LABEL htmlFor="phone">휴대폰</LABEL>
            <INPUT
              {...register("phone")}
              id="phone"
              defaultValue={member.phone}
              disabled={props.isDisabled}
              required
            />
          </FORMITEM>

          <FORMITEM>
            <LABEL htmlFor="address">주소</LABEL>
            <ADDRSECTION>
              <INPUT
                {...register("zipcode")}
                id="zipcode"
                defaultValue={member.zipcode}
                disabled={props.isDisabled}
                required
              />
              <INPUT
                {...register("address")}
                id="address"
                defaultValue={member.address}
                disabled={props.isDisabled}
                required
              />
              <BUTTON gray>우편번호 찾기</BUTTON>
            </ADDRSECTION>
          </FORMITEM>

          <BUTTON bottom>변경하기</BUTTON>
        </FORM>
    </CONTAINER>
  );
}