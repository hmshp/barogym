import styled, { css } from 'styled-components';

/* MyInfo 페이지 */

export const PAGEHEADER = styled.header`
  border-bottom: 1px solid gray;
  margin: 2em 0;
  padding-bottom: 1em;
  display: flex;
  justify-content: space-between;
`

export const STYLEDCONTAINER = styled.div`
  margin: 0 auto;
  @media(min-width: 800px) {
    ${props =>
    !props.pwCheck &&
    css`
      padding: 0 2em; // pwCheck(비번체크화면)가 아니고 너비 800px 이상일 때만 적용
    `}
  }
  width: 90%;
  ${props =>
  props.relative &&
  css`
    position: relative;
  `}
`

export const STYLEDSECTION = styled.section`
  @media(min-width: 800px) {
    display: flex;
    justify-content: space-between;
  }

  margin-bottom: 5em;
`

export const SUBSECTION = styled.section`
  margin-bottom: 3em;
`

export const STYLEDBUTTON = styled.button`
  background-color: ${props =>
    props.gray ? "gray" : "rgb(254, 139, 121)"
  };
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

export const FORMTITLE = styled.div`
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
  height: 40px;
  border-radius: 4px;
  border: 1px solid gray;
  ${props => props.pwCheck &&
    css`
      margin-bottom: 1em;
    `
  }
`

/* 주소 */

export const ADDRSECTION = styled.section`
  display: flex;
  flex-direction: column;
`