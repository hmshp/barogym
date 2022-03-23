import styled, {css} from 'styled-components';
import { Pagination } from 'react-bootstrap';

export const PAGEHEADER = styled.header`
  border-bottom: 1px solid gray;
  margin: 2em 0;
  padding-bottom: 1em;
  display: flex;
  justify-content: space-between;
  ${props => props.center && css`
    flex-direction: column;
    text-align: center;
    align-items: center;
  `}
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

export const H2 = styled.h2`
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

/* 양도하기 버튼 */
export const TRANSBUTTON = styled(BUTTON)`
  width: 100%;
  margin-bottom: 1em;
`

/* 글쓰기 페이지 */
export const TWOBUTTONS = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
  ${props => props.flexEnd && css`
    justify-content: flex-end;
  `}
`

/* 글 상세보기 페이지 */
export const GRIDCONTAINER = styled.article`
  width: 100%;
  font-size: 0.8rem;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  @media(min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const FORM = styled.form`
  /* display: grid;
  row-gap: 20px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2em;
`

export const TEXTAREA = styled.textarea`
  width: 100%;
`

/* 글 상세보기 - 댓글 */

/* 글쓰기 화면 폼 */
export const INPUT = styled.input`
  padding: 0.5em 1em;
  border-radius: 4px;
  border: 1px solid gray;
  ${props => props.seventy && css`
    width: 70%;
  `}
  ${props => props.sixty && css`
    width: 60%;
  `}
  ${props => props.full && css`
    width: 100%;
  `}
`

export const LABEL = styled.label`
  width: ${props => props.pwCheck ? "100%" : props.thirty ? "30%" : "50%"};
  margin-bottom: 1em;
  font-weight: 700;
  ${props => props.center && css`
    justify-self: center;
  `}
`

export const ERRORMSG = styled.p`
  color: gray;
  ${props => props.rightAlign && css`
    text-align: right;
  `}
`

/* FAQ 카테고리 선택 버튼 담는 div */
export const CATEGORY = styled.div`
  margin-bottom: 2em;
`

