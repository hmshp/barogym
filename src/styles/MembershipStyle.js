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
  width: 80%;
  max-width: 700px;
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