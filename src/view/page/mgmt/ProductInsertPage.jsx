import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FORM, INPUT, LABEL, CONTAINER, BUTTON, TWOBUTTONS } from '../../../styles/MyInfoStyle';

const ProductInsertPage = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    prod_name: "",
    prod_price: 0,
    prod_amount: 0,
    prod_type: 0
  });

  console.log(product)

  const handleChange = (event) => {
    const name = event.target.name
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:9000/request/productInsert?prod_name=${product.prod_name}&prod_price=${product.prod_price}&prod_amount=${product.prod_amount}&prod_type=${product.prod_type}`)
    .then(res => res.json())
    .then(result => console.log(result))

    navigate('/mgmt/product/list')
  }

  return (
    <CONTAINER>
      <FORM>
        <LABEL htmlFor="prod_name">상품명</LABEL>
        <INPUT id="prod_name" name="prod_name" onChange={handleChange} margin />

        <LABEL htmlFor="prod_price">가격</LABEL>
        <INPUT id="prod_price" name="prod_price" onChange={handleChange} margin />

        <LABEL htmlFor="prod_amount">수량</LABEL>
        <INPUT id="prod_amount" name="prod_amount" onChange={handleChange} margin />

        <LABEL htmlFor="prod_type">상품 타입(0: 이용권 / 1:수강권)</LABEL>
        <INPUT id="prod_type" name="prod_type" onChange={handleChange} margin />
        <TWOBUTTONS>
          <BUTTON onClick={() => navigate('/mgmt/product/list')} forty gray>취소</BUTTON>
          <BUTTON onClick={handleSubmit} forty>추가</BUTTON>
        </TWOBUTTONS>
      </FORM>
    </CONTAINER>
  );
};

export default ProductInsertPage;