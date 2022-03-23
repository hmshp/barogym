import React from 'react';
import { CONTAINER, PAGEHEADER, H1, TWOBUTTONS, BUTTON, FORM, INPUT, LABEL, ERRORMSG, TEXTAREA, CATEGORY } from '../../../../styles/BoardStyle';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import BoardHeader from '../../../sampleData/BoardHeader.json'
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';

const FaqWritePage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();

  return (
    <CONTAINER>
      <PAGEHEADER>
        <H1>{BoardHeader["faq"]}</H1>
      </PAGEHEADER>
      <FORM onSubmit={handleSubmit((data) => console.log(data))}>
        <CATEGORY>
          <DropdownButton variant="secondary" id="dropdown-basic-button" title="카테고리">
            <Dropdown.Item href="#/action-1">헬스장 이용 안내</Dropdown.Item>
            <Dropdown.Item href="#/action-2">결제 안내</Dropdown.Item>
            <Dropdown.Item href="#/action-3">수업 안내</Dropdown.Item>
          </DropdownButton>
        </CATEGORY>

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

        <TWOBUTTONS>
          <BUTTON
            gray forty thick
            onClick={()=>{ navigate(`/board/faq/list?page=1`);}}
          >
            취소
          </BUTTON>
          <BUTTON forty thick>올리기</BUTTON>
        </TWOBUTTONS>
      </FORM>
    </CONTAINER>
  );
};

export default FaqWritePage;