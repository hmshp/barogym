import React, {useState, useEffect} from 'react';
import {PAGEHEADER,STYLEDBUTTON,STYLEDCONTAINER, INPUT, LABEL} from '../../../styles/ClassStyle'
import { Link } from 'react-router-dom' 
import styled from 'styled-components';
import { FORM, H1 } from '../../../styles/MyInfoStyle';
import { themeColor } from '../../../styles/GlobalStyle';
import PassDateModal from '../../component/pass/PassDateModal';
//참고한 링크: https://medium.com/codex/handling-checkboxes-in-react-3a2514b140d2
//https://stackoverflow.com/questions/57341541/removing-object-from-array-using-hooks-usestate

//라디오버튼으로 바꿔야 되는데 시간이 없어서 우선 체크박스로 했다..

const PassBuyPage = () => {
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");//체크된 상품의 PROD_NO 넣음

  console.log('선택된 상품: ' + selectedProduct)

  const handleChange = (event) => {
    const isChecked = event.target.checked;
    if(isChecked) { //체크 시 목록에 추가
      setSelectedProduct(event.target.name)
    } else { //체크 해제 시 목록에서 삭제
      const temp = selectedProduct//state를 직접 바꾸면 안 되니 복사
      setSelectedProduct(temp);
    }
  }

  const handleSubmit = () => {
    fetch(`http://localhost:9000/request/requsetInsert`)
  }

  console.log(productList)

  useEffect(() => {
    fetch(`http://localhost:9000/request/productList`)
      .then(res => res.json())
      .then(result => setProductList(result))
  }, [])
  
  const productListElements = productList.map(product => {
    return (
      <div key={product.PROD_NO}>
        <INPUT type="checkbox" name={product.PROD_NO} id={product.PROD_NO} onChange={handleChange} />
        <LABEL htmlFor={product.PROD_NO} seventy>{product.PROD_NAME}</LABEL>
      </div>
    )
  })

  return (
    <FORM onSubmit={(event) => event.preventDefault()}>
      <STYLEDCONTAINER>
        <PAGEHEADER>
          <H1>이용권 신청</H1>
        </PAGEHEADER>
        <section>
          {productListElements}
        </section>
        <br />
        <PassDateModal selectedProduct={selectedProduct} />
      </STYLEDCONTAINER>
    </FORM>
  );
};

export default PassBuyPage;