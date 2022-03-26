import React from 'react';
import {Table} from 'react-bootstrap';
import {BUTTON} from '../../../styles/BoardStyle';

const ProductList = () => {

  const products = [
    {
      name: 'GX 5회권 패키지',
      price: '70000'
    },
    {
      name: 'GX 10회권 패키지',
      price: '140000'
    },
    {
      name: 'GX 20회권 패키지',
      price: '200000'
    },
    {
      name: 'GX 30회권 패키지',
      price: '380000'
    },
    {
      name: '헬스장 이용권 1개월',
      price: '50000'
    },
    {
      name: '헬스장 이용권 3개월',
      price: '140000'
    },
    {
      name: '헬스장 이용권 6개월',
      price: '250000'
    },
    {
      name: '헬스장 이용권 12개월',
      price: '480000'
    },
  ]

  const ProductElements = products.map((product, index) => {
    return (
      <tr key={index}>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td><BUTTON gray full>삭제</BUTTON></td>
      </tr>
    )
  })

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>이름</th>
          <th>가격</th>
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