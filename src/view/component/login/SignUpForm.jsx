import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import {FORM, INPUT, BUTTON, ERRORMSG, TWOBUTTONS, RADIOINPUT, RADIOITEM, FIELDSET, LEGEND} from '../../../styles/MembershipStyle'


export default function SignUpForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors)

  const navigate = useNavigate();

  return (
      <main>
        <FORM onSubmit={handleSubmit((data) => console.log(data))}>
          <div>
            <INPUT
              {...register("email", { required: '필수 입력사항입니다.' })}
              placeholder="이메일"
              seventy
            />
            <BUTTON thirty gray>중복확인</BUTTON>
          </div>
          <ERRORMSG>{errors.email?.message}</ERRORMSG>
          <INPUT
            {...register("password", { required: '필수 입력사항입니다.' })}
            placeholder="비밀번호"
          />
          <ERRORMSG>{errors.password?.message}</ERRORMSG>
          <INPUT
            {...register("pwConfirmation", { required: '필수 입력사항입니다.' })}
            placeholder="비밀번호 확인"
          />
          <ERRORMSG>{errors.pwConfirmation?.message}</ERRORMSG>
          <INPUT
            {...register("name", { required: '필수 입력사항입니다.' })}
            placeholder="이름"
          />
          <ERRORMSG>{errors.name?.message}</ERRORMSG>
          <INPUT
            {...register("nickname")}
            placeholder="닉네임"
          />
          <ERRORMSG>{errors.nickname?.message}</ERRORMSG>
          <INPUT
            {...register("phone", { required: '필수 입력사항입니다.' })}
            placeholder="휴대폰 번호"
          />
          <ERRORMSG>{errors.phone?.message}</ERRORMSG>
          <div>
            <INPUT
              {...register("zipcode", { required: '필수 입력사항입니다.' })}
              placeholder="우편번호"
              sixty
            />
            <BUTTON forty gray>우편번호 찾기</BUTTON>
            <ERRORMSG>{errors.zipcode?.message}</ERRORMSG>
            <INPUT
              {...register("address", { required: '필수 입력사항입니다.' })}
              placeholder="주소"
              full
            />
          </div>
          <ERRORMSG>{errors.address?.message}</ERRORMSG>
          
          <FIELDSET>
            <LEGEND>성별을 선택해 주세요.</LEGEND>
              <RADIOITEM>
                <RADIOINPUT
                  {...register("gender", { required: '필수 입력사항입니다.' })}
                  type="radio"
                  id="woman"
                  value="여성"
                />
                <label htmlFor="woman">여성</label>
              </RADIOITEM>
              <RADIOITEM>
                <RADIOINPUT
                  {...register("gender", { required: '필수 입력사항입니다.' })}
                  type="radio"
                  id="man"
                  value="남성"
                />
                <label htmlFor="man">남성</label>
              </RADIOITEM>
              <RADIOITEM>
                <RADIOINPUT
                  {...register("gender", { required: '필수 입력사항입니다.' })}
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
      </main>
  );
}