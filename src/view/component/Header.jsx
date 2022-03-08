import React from 'react';
import styled from 'styled-components';

const HeaderElement = styled.header`
  background: rgb(254, 139, 121);
  color: white;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  /* border: 1px solid green; */
  padding: 0.2em 0;
`

const SiteTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const H1 = styled.h1`
  margin: 0;
`

const Logo = styled.img`
  width: 50px;
  margin-right: 1em;
`


const Header = () => {
  return (
    <HeaderElement>
      <HeaderContainer>
        <SiteTitle>
          <Logo src="https://i.ibb.co/smK8dwT/Kakao-Talk-20220308-145706090.png" alt="바로짐 로고" border="0" />
          <H1>BAROGYM</H1>
        </SiteTitle>
        <div>
          <i className="fas fa-bars" aria-label="네비게이션 토글 아이콘"></i>
        </div>
      </HeaderContainer>
    </HeaderElement>
  );
};

export default Header;