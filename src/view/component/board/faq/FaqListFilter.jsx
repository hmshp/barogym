import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const FaqListFilter = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const path = decodeURIComponent(location.search).split('?')[1].split('&');


  //임시 데이터(DB에서 JSON 받아올 예정)
  const categoryItems = [
    '전체 카테고리',
    '헬스장 이용 안내',
    '결제 안내',
    '수업 안내',
  ];

  const [title, setTitle] = useState({ //필터 클릭하기 전 or 클릭해서 드롭다운 메뉴 중 하나 선택했을 때 화면에 보이는 제목 3개
    category : '카테고리',
  });

  useEffect(() => {
    console.log(path)
    //대충 해당 파라미터로 DB에 게시판 불러오는 내용
  },[path]);


  const setPath = (key, oldItem, newItem) => {
    let path;
    console.log(key, oldItem, newItem);
    console.log(title);
    //location.search는 쿼리스트링 부분.
    //아래 코드: 쿼리스트링 안에 key(class)가 들어 있다면
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

export default FaqListFilter;