import styled, { css } from 'styled-components';
import { themeColor } from './GlobalStyle';

/* login 페이지 헤더 */

export const H1 = styled.h1`
  color: ${themeColor};
`

/* login form */

export const CONTAINER = styled.article`
  margin: 2em auto;
  width: 90%;
  max-width: 800px;
`

export const FORM = styled.form`
  /* display: grid;
  row-gap: 20px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2em;
`

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

export const RADIOINPUT = styled(INPUT)`
  margin-right: 0.75em;
`

export const BUTTON = styled.button`
  background-color: ${props =>
    props.gray ? "gray" : themeColor
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

/* 회원가입, Id, 비번 찾기로 연결되는 부분 */

export const LINKARTICLE = styled.article`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
`

export const P = styled.p`
  width: 50%;
  margin-bottom: 1em;
`

/* 이메일 찾기 폼 */

export const H2 = styled.h2`
  color: ${themeColor};
`

export const FORMHEADER = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
  padding-bottom: 1em;
  border-bottom: 1px solid gray;
`

export const FORMITEM = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1em;
`

export const LABEL = styled.label`
  width: ${props => props.pwCheck ? "100%" : props.thirty ? "30%" : "50%"};
  margin: 1em 0;
  font-weight: 700;
  ${props => props.center && css`
    justify-self: center;
  `}
`

export const TWOBUTTONS = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
`

/* 회원가입 페이지 */

export const PAGEHEADER = styled.header`
  margin: 2em 0;
  display: flex;
  justify-content: space-between;
  ${props => props.center && css`
    flex-direction: column;
    text-align: center;
    align-items: center;
  `}
`

export const ERRORMSG = styled.p`
  color: gray;
  ${props => props.rightAlign && css`
    text-align: right;
  `}
  margin: 0;
`

export const PWRESULT = styled(ERRORMSG)`
  margin: 2em 0;
  color: black;
  font-weight: 800;
`

export const FIELDSET = styled.fieldset`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 1em;
`

export const LEGEND = styled.legend`
  color: #5c5c5c;
  font-size: 1.2em;
`

export const RADIOITEM = styled.div`
  margin-right: 2em;
  color: #5c5c5c;

`