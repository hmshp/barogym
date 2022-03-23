import React from 'react';
import {PAGEHEADER,STYLEDCONTAINER} from '../../../styles/ClassStyle'
import Table from 'react-bootstrap/Table'

const IncomeListPage = () => {
  return (
    <div>
          <STYLEDCONTAINER relative>
    <PAGEHEADER>
      <h1>매장관리 - 수익</h1>
      </PAGEHEADER>

      <div>
  <Table responsive="sm">
    <thead>
      <tr>
        <th>상품번호</th>
        <th>상품명</th>
        <th>구매 횟수</th>
        <th>금액 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>GX 5회권 패키지</td>
        <td>16</td>
        <td>840,000</td>
      </tr>
      <tr>
        <td>2</td>
        <td>GX 10회권 패키지</td>
        <td>24</td>
        <td>3,360,000</td>
      </tr>
      <tr>
        <td>3</td>
        <td>GX 20회권 패키지</td>
        <td>34</td>
        <td>4,260,000</td>
      </tr>
      <tr>
        <td>4</td>
        <td>GX 30회권 패키지</td>
        <td>31</td>
        <td>5,270,000</td>
      </tr>
      <tr>
        <td>5</td>
        <td>헬스장 이용권 1개월</td>
        <td>58</td>
        <td>1,280,000</td>
      </tr>
      <tr>
        <td>6</td>
        <td>헬스장 이용권 3개월</td>
        <td>21</td>
        <td>5,360,000</td>
      </tr>
      <tr>
        <td>7</td>
        <td>헬스장 이용권 6개월</td>
        <td>62</td>
        <td>1,380,000</td>
      </tr>
      <tr>
        <td>8</td>
        <td>헬스장 이용권 12개월</td>
        <td>72</td>
        <td>34,560,000</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th> </th>
        <th> </th>
        <th> </th>
        <th>총 금액 </th>
      </tr>
          </thead>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>54,510,000원</td>
      </tr>

  </Table>      </div>
</STYLEDCONTAINER>

    </div>
  );
};

export default IncomeListPage;