import styled, { css } from 'styled-components';
import { Pagination } from 'react-bootstrap';

/* MyInfo 페이지 */

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

export const TWOBUTTONS = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
`


export const SUBSECTION = styled.section`
  margin-bottom: 3em;
`

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

/* 연락처, 비밀번호 컴포넌트 */

// export const PWSECTION = styled.section`
//   margin: 0 auto;
//   width: 90%;
//   padding: 0 2em;
//   position: relative;
// ` 이거 지우고 STYLEDCONTAINER에 props 추가해서 사용하기로 했다(position:relative말고는 STYLEDCONTAINER랑 코드가 똑같아서)

export const FORM = styled.form`
  margin: 2em auto;
  /* width: 100%; */
  /* max-width: 500px; */
  display: flex;
  flex-direction: column;
`

export const FORMTITLE = styled.header`
  display: flex;
  justify-content: space-between;
`

export const FORMITEM = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1em;
`

export const LABEL = styled.label`
  width: ${props => props.pwCheck ? "100%" : "50%"};
  margin-bottom: 1em;
`

export const INPUT = styled.input`
  padding: 0.5em 1em;
  border-radius: 4px;
  border: 1px solid gray;
  ${props => props.pwCheck &&
    css`
      margin-bottom: 1em;
    `
  }
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

/* 주소 */

export const ADDRSECTION = styled.section`
  display: flex;
  flex-direction: column;
`

/* 글자 색 */
export const H1 = styled.h1`
  color: rgb(254, 139, 121);
`

/* pagination */

export const PAGINATION = styled(Pagination)`
  display: flex;
  justify-content: center;
`