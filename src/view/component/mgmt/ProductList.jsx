import React, { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';
import {BUTTON} from '../../../styles/BoardStyle';

const ProductList = () => {

  const [ productList, setProductList] = useState([]);
  console.log(productList)

  useEffect(() => {
    fetch(`http://localhost:9000/request/productList`)
      .then(res => res.json())
      .then(result => setProductList(result))
  }, [])

  const deleteProduct = (event) => {
    const prodNo = event.target.name
    fetch(`http://localhost:9000/request/productDelete?prod_no=${prodNo}`)
    .then(res => res.json())
    .then(result => console.log(result))
  }

  const ProductElements = productList.map((product, index) => {
    return (
      <tr key={index}>
        <td>{product.PROD_NO}</td>
        <td>{product.PROD_NAME}</td>
        <td>{product.PROD_PRICE}원</td>
        <td>{product.PROD_STATUS === 0 ? "판매중" : "판매 종료"}</td>
        <td><BUTTON name={product.PROD_NO} onClick={deleteProduct} gray full>삭제</BUTTON></td>
      </tr>
    )
  })

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>상품번호</th>
          <th>상품명</th>
          <th>가격</th>
          <th>판매 여부</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {ProductElements}
      </tbody>
    </Table>
  );
};

export default ProductList;