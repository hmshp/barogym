import styled, {css} from 'styled-components';
import { Pagination } from 'react-bootstrap';

export const PAGEHEADER = styled.header`
  border-bottom: 1px solid gray;
  margin: 2em 0;
  padding-bottom: 1em;
  display: flex;
  justify-content: space-between;
`

export const CONTAINER = styled.article`
  margin: 0 auto;
  width: 90%;
  @media(min-width: 800px) {
    ${props => props.flex && css`
      display: flex;
      justify-content: space-between;
      margin-bottom: 5em;
    `}
    ${props => props.sidePadding && css`
      padding: 0 2em;
    `}
  }
  ${props => props.pwCheck &&
      css`
        margin-top: 5em;
        width: 70%;
         //
      `}
  ${props =>
  props.relative &&
  css`
    position: relative;
  `}
`

/* 글자 색 */
export const H1 = styled.h1`
  color: rgb(254, 139, 121);
`

/* 글 목록 페이지 */
export const PAGINATION = styled(Pagination)`
  display: flex;
  justify-content: center;
`

/* 버튼 */
export const BUTTON = styled.button`
  background-color: ${props =>
    props.gray ? "gray" : "rgb(254, 139, 121)"
  };
  color: white;
  padding: ${props => props.thick ? "1em" : "0.5em 1em"};
  border-radius: 4px;
  border: none;
  
  ${props => props.forty && css`
    width: 40%; //전체화면에서 버튼 너무 커서 40%로 줄임
  `}
  ${props => props.thirty && css`
    width: 30%;
  `}
  
  
  @media(min-width: 800px) {
    ${props =>
    props.bottom &&
    css`
      position: absolute;
      bottom: 0;
    `}
  }
`