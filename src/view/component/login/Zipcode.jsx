/* global daum */
import React from 'react';
import { BUTTON, INPUT, LABEL } from '../../../styles/MembershipStyle';

const Zipcode = (props) => {
  const { signUpFormData, setSignUpFormData, handleChange } = props;

  const openZipcode = () => {
    new daum.Postcode({
      oncomplete: function(data) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
        // 각 주소의 노출 규칙에 따라 주소를 조합한다.
        // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
        let addr = ''; // 주소 변수
        //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
        if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
          addr = data.roadAddress;
        } else { // 사용자가 지번 주소를 선택했을 경우(J)
          addr = data.jibunAddress;
        }
        // 우편번호와 주소 정보를 해당 필드에 넣는다.
        setSignUpFormData(prevFormData => {
          return {
            ...prevFormData,
            mem_zipcode: data.zonecode,
            mem_addr: addr
          }
        })
        // 커서를 상세주소 필드로 이동한다.
        document.getElementById("detailAddress").focus();
      }
    }).open();
  }

  return (
    <>
      <div>
        <LABEL htmlFor="address">주소</LABEL>
        <INPUT sixty type="text" id="zipcode" value={signUpFormData.mem_zipcode} onChange={handleChange} placeholder="우편번호"/>
        <BUTTON forty gray type="button" onClick={()=>{openZipcode()}}>우편번호 찾기</BUTTON>
          <br/>
        <INPUT full type="text" id="address" name="mem_addr" placeholder="주소" value={signUpFormData.mem_addr} onChange={handleChange}/>
          <br/>
        <INPUT full type="text" id="detailAddress" name="mem_addr_dtl" placeholder="상세주소" value={signUpFormData.mem_addr_dtl} onChange={handleChange}/>
      </div>
    </>
  );
};

export default Zipcode;