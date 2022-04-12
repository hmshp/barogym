import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const TransListFilter = (props) => {
  const { title, setTitle } = props;

  const location = useLocation();
  const navigate = useNavigate();

  const path = decodeURIComponent(location.search).split('?')[1].split('&');


  //임시 데이터(DB에서 JSON 받아올 예정)
  const categoryItems = [
    '전체 카테고리',
    '헬스장 이용권',
    '그룹 수업',
  ];


  useEffect(() => {
    console.log(path)
    //대충 해당 파라미터로 DB에 게시판 불러오는 내용
  },[path]);


  const setPath = (key, oldItem, newItem) => {
    let path;
    console.log(key, oldItem, newItem);
    console.log(title);
    //location.search는 쿼리스트링 부분.
    //아래 코드: 쿼리스트링 안에 key가 들어 있다면
    if (decodeURIComponent(location.search).match(key)){
      path = location.pathname+decodeURIComponent(location.search).replace(`&${key}=${oldItem}`,`&${key}=${newItem}`)
      console.log(path)
    } else{
      // ??
      path = location.pathname+location.search+`&${key}=${newItem}`
      console.log(path)
    }
    return path;
  };


  return (
    <div>
      <div style={{display: 'flex', width: '250px', justifyContent: 'space-between'}}>
        <DropdownButton variant="outline-secondary"  title={title.category}>
          { 
            categoryItems.map((categoryItem, index)=>(
              <Dropdown.Item as="button" key={index} onClick={()=>{
                //navigate: path 지정하고 거기로 이동
                navigate(setPath('category', title.category, categoryItem));
                setTitle({category: categoryItem});
              }}>
                {categoryItem}
              </Dropdown.Item>
            )) 
          }
        </DropdownButton>
      </div>
      
    </div>
  );
};


export default TransListFilter;