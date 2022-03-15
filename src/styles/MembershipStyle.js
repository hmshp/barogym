import styled, { css } from 'styled-components';

/* login 페이지 헤더 */

export const CENTEREDSECTION = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 2em;
`

export const H1 = styled.h1`
  color: rgb(254, 139, 121);
`

/* login form */

export const CONTAINER = styled.div`
  margin: 2em auto;
  width: 90%;
  max-width: 800px;
`

export const FORM = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2em;
`

export const INPUT = styled.input`
  height: 40px;
  border-radius: 4px;
  border: 1px solid gray;
`

export const BUTTON = styled.button`
  background-color: ${props =>
    props.gray ? "gray" : "rgb(254, 139, 121)"
  };
  color: white;
  padding: 0.5em 1em;
  border-radius: 4px;
  border: none;
  ${props => props.small && css`
    width: 45%; //전체화면에서 버튼 너무 커서 50%로 줄임
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

export const ITEM = styled.div`
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
  color: rgb(254, 139, 121);
`

export const FORMTITLE = styled.div`
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
  width: ${props => props.pwCheck ? "100%" : "50%"};
  margin-bottom: 1em;
  font-weight: 700;
`

export const TWOBUTTONS = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
`