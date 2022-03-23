import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const ReviewListFilter = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const path = decodeURIComponent(location.search).split('?')[1].split('&');


  //임시 데이터(DB에서 JSON 받아올 예정)
  const classInfo = {
    크로스핏 : ['감강찬', '유재석', '이승기'],
    필라테스 : ['현세훈', '이제근', '박찬민', '유승범'],
    요가 : ['김나리', '박수정', '박나래']
  }

  const [title, setTitle] = useState({ //필터 클릭하기 전 or 클릭해서 드롭다운 메뉴 중 하나 선택했을 때 화면에 보이는 제목 3개
    class : '수업',
    teacher : '강사',
    rating : '별점'
  });

  const classItems = [
    '수업',
    '크로스핏',
    '필라테스',
    '요가'
  ];

  const ratingItems = [
    '별점','1점','2점','3점','4점','5점'
  ];

  const [teacherItems, setTeacherItems] = useState([]);


  useEffect(() => {
    //항목이 고정된 수업, 별점과는 달리 강사 필터는 어떤 수업을 선택했는지에 따라 항목이 달라져서
    //전역 범위에 배열로 저장하는 게 아니라 여기서 아래와 같이 push해서 쓰는 듯
    const items = ['강사'];//임시 배열임. 나중에 teacherItems state에 넣을 것임
    //대충 DB에서 classJson 받아오는 내용
    Object.keys(classInfo).map((key)=>{
      // iterate 하다가 현재 내가 선택한 수업 항목과 일치할 때만 item 배열에 push
      // '수업' 클릭했을 땐 모든 강사 다 보여줘야 함(수업 전체니까)
      // 그래서 '수업' 선택했을 땐 항상 title.class==='수업' map 안에서 if문 3번 돌 때
      // 매번 items 배열에 push 함 -> 모든 과목 강사들이 items 배열에 들어감
      if(key===title.class||title.class==='수업'){
        classInfo[key].map((item)=>{
          items.push(item)
        })
      }
    })
    setTeacherItems(items);
  },[title,setTeacherItems]);


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
    if(key==='class'&&decodeURIComponent(location.search).match(key)){
      //location.pathname은 쿼리스트링 이전 부분이다
      path = location.pathname+decodeURIComponent(location.search)
              //이전 key를 새 key로. 예시) class='수업'을 class='필라테스'로 대체
              .replace(`&${key}=${oldItem}`,`&${key}=${newItem}`)
              //쿼리스트링 강사 부분 없애기. 수업이 달라지면 강사도 다시 선택하도록
              //'강사명'으로 초기화해야 되니까
              .replace(`&teacher=${title.teacher}`,'')
              //쿼리스트링 별점 부분 없애기. 수업이 달라지면 강사를 다시 선택해야 되니
              //그에 따라 별점도 다시 선택하도록 '별점'으로 초기화해야 되니까
              .replace(`&rating=${title.rating}`,'')
      console.log(path);
      // key가 class가 아닐 때(수업 선택할 땐 강사, 별점도 초기화해야 하므로 특별한 경우라 위에서 if문을 따로 써줬음.)
    } else if(decodeURIComponent(location.search).match(key)){
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
        <DropdownButton variant="outline-secondary"  title={title.class}>
          { 
            classItems.map((classItem, index)=>(
              <Dropdown.Item as="button" key={index} onClick={()=>{
                //navigate: path 지정하고 거기로 이동
                navigate(setPath('class', title.class, classItem));
                //수업은 강사나 별점과는 달리, 항목 선택 시 강사와 별점 필터를 초기화(맨~처음 상태로)해야 하므로 spread operator? 안 쓰고 직접 초기화해 줌
                setTitle({class: classItem, teacher: '강사', rating: '별점'});
              }}>
                {classItem}
              </Dropdown.Item>
            )) 
          }
        </DropdownButton>
        <DropdownButton variant="outline-secondary" title={title.teacher}>
          { 
            teacherItems.map((teacherItem, index)=>(
              <Dropdown.Item as="button" key={index} onClick={()=>{
                navigate(setPath('teacher', title.teacher, teacherItem));
                setTitle({...title, teacher: teacherItem});
              }}>
                {teacherItem}
              </Dropdown.Item>
            )) 
          }
        </DropdownButton>
        <DropdownButton variant="outline-secondary"  title={title.rating}>
          { 
            ratingItems.map((ratingItem, index)=>(
              <Dropdown.Item as="button" key={index} onClick={()=>{
                navigate(setPath('rating', title.rating, ratingItem));
                setTitle({...title, rating: ratingItem});
              }}>
                {ratingItem}
              </Dropdown.Item>
            )) 
          }
        </DropdownButton>
      </div>
      
    </div>
  );
};

export default ReviewListFilter;