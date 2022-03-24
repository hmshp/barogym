import React from 'react';
import styled from 'styled-components';

const footerStyles = {
  color :'rgb(117, 112, 112)'

}

const Logo = styled.img`
  width: 20px;
  margin: 10px;
`

const Footer = () => {
  return (
<div >
<footer style={footerStyles} expand="md" >
<Logo alt="인스타" src="https://cdn-icons-png.flaticon.com/512/1077/1077042.png" />  
<Logo alt="카카오톡" src="https://cdn-icons.flaticon.com/png/512/3114/premium/3114553.png?token=exp=1647339973~hmac=d321ebc89d4ce39cc38cab2528bd5a1d" />  
<Logo alt="전화" src="https://cdn-icons-png.flaticon.com/512/126/126509.png" /> 
<Logo alt="블로그" src="https://cdn-icons.flaticon.com/png/512/5836/premium/5836882.png?token=exp=1647340385~hmac=213e53b1ab658f1bfcfbd3251734dbf3" /> 
<br/>

<p>
<strong>바로짐
  이용약관
  개인정보
  처리방침
  사업자정보확인</strong> <br/>
상호:바로짐 | 대표:바로짐 | 개인정보관리책임자:바로짐 <br/>
전화:02-471-9706 | 이메일:barogym@gmail.com <br/>
주소: 서울 특별시 송파구 | 사업자등록번호: 123-1123-45678 |<br/>
통신판매: 미입력 | 호스팅제공자: (주)바로짐<br/>
© 2022 BAROGYM Co., Ltd 
</p>

</footer>
  </div>
  );
};


export default Footer;