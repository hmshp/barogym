import React, {useState} from 'react';
import { CONTAINER, PAGEHEADER, H1, TWOBUTTONS, BUTTON, FORM, INPUT, LABEL, ERRORMSG, TEXTAREA } from '../../../../styles/BoardStyle';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import BoardHeader from '../../../sampleData/BoardHeader.json'

const TransWritePage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();

  return (
    <CONTAINER>
      <PAGEHEADER>
        <H1>{BoardHeader["trans"]}</H1>
      </PAGEHEADER>
      <FORM onSubmit={handleSubmit((data) => console.log(data))}>
        <LABEL htmlFor="title">제목</LABEL>
        <INPUT
          {...register("title", { required: '필수 입력사항입니다.' })}
          placeholder="제목을 입력해 주세요."
          id="title"
        />
        <ERRORMSG>{errors.password?.message}</ERRORMSG>

        <LABEL htmlFor="content">내용</LABEL>
        <TEXTAREA
          {...register("content", { required: '필수 입력사항입니다.' })}
          placeholder="글 내용을 입력해 주세요."
          id="content"
          rows={5}
        />
        <ERRORMSG>{errors.password?.message}</ERRORMSG>

        <LABEL htmlFor="pass">이용권 정보</LABEL>
        <BUTTON>불러오기</BUTTON>
        <TEXTAREA
          {...register("pass", { required: '필수 입력사항입니다.' })}
          placeholder="글 내용을 입력해 주세요."
          id="pass"
          rows={5}
        />
        <ERRORMSG>{errors.password?.message}</ERRORMSG>

        <TWOBUTTONS>
          <BUTTON
            gray forty thick
            onClick={()=>{ navigate(`/board/trans/list?page=1`);}}
          >
            취소
          </BUTTON>
          <BUTTON forty thick>올리기</BUTTON>
        </TWOBUTTONS>
      </FORM>
    </CONTAINER>
  );
};

export default TransWritePage;