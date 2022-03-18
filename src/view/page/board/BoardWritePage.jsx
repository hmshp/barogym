import React from 'react';
import { CONTAINER, H1, PAGEHEADER, BUTTON, TWOBUTTONS } from '../../../styles/BoardStyle';
import { useLocation, useNavigate } from 'react-router-dom';
import BoardHeader from '../../sampleData/BoardHeader.json'

const BoardWritePage = () => {
  const boardName = useLocation().search.split("&")[0].slice(4);

  const navigate = useNavigate();

  return (
    <CONTAINER>
      <PAGEHEADER>
        <H1>{BoardHeader[boardName]}</H1>
      </PAGEHEADER>
      <TWOBUTTONS>
        <BUTTON
          gray forty thick
          onClick={()=>{ navigate(`/board/list?id=${boardName}`);}}
        >
          취소
        </BUTTON>
        <BUTTON forty thick>올리기</BUTTON>
      </TWOBUTTONS>
    </CONTAINER>
  );
};

export default BoardWritePage;