<h1>바로짐 - 헬스장 관리 웹사이트 </h1>

## 목차
1. [사용한 기술](#사용한-기술)
2. [기능](#기능)
3. [담당한 파트](#담당한-파트)
4. [트러블 슈팅](#트러블-슈팅)




<h2>사용한 기술</h2>
<ul>
  <li>React</li>
  <li>Context API</li>
  <li>Styled Components</li>
  <li>React Bootstrap</li>
</ul>

<h2>기능</h2>

<h3><a href="https://youtu.be/4rc71JDMB3g" target="_blank">시연 영상</a></h3>

<h4>비회원 페이지</h4>
<ul>
  <li>로그인</li>
  <li>회원가입</li>
  <li>커뮤니티</li>
</ul>

<h4>회원 페이지</h4>
<ul>
  <li>로그인</li>
  <li>로그아웃</li>
  <li>마이페이지</li>
  <li>회원 탈퇴</li>
  <li>커뮤니티</li>
  <li>이용권(안내, 신청)</li>
  <li>예약</li>
</ul>

<h4>관리자 페이지</h4>
<ul>
  <li>커뮤니티</li>
  <li>회원 관리</li>
  <li>수업 관리</li>
  <li>상품 관리</li>
  <li>신청 관리(이용권 신청 내역 관리)</li>
</ul>

<h4>반응형</h4>
<div>
  <img width="500" src="https://user-images.githubusercontent.com/95236467/162682861-9793c262-c82f-4c1e-9b0f-c33416dd9d77.gif" alt="반응형 헤더" >
  <img width="500" src="https://user-images.githubusercontent.com/95236467/162683287-196f163d-3141-4fb3-9ef6-359ba51793fb.gif" alt="반응형 화면" >
</div>


<h2>담당한 파트</h2>
<h4>프론트 레이아웃 + 기능 모두 구현한 파트</h4>
<ul>
  <li>헤더</li>
  <li>로그인, 회원가입, 비밀번호 찾기, 이메일 찾기</li>
  <li>마이페이지</li>
  <li>관리자 페이지</li>
  <li>이용권 신청</li>
  <li>커뮤니티 메뉴(에디터 외 모든 부분)</li>
</ul>

<h4>프론트 기능(DB 연동)만 구현한 파트</h4>
<ul>
  <li>수업 예약</li>
</ul>

<h2>트러블 슈팅</h2>
<h3>1. 댓글 삭제 버튼을 클릭하고 handleDelete 함수를 호출해서 삭제 요청을 해도 댓글이 삭제되지 않는 문제</h3>
<h4>문제</h4>
<ul>
  <li>fetch 메소드가 실행되고 리렌더링이 일어날 때가 돼서야 commentNo가 업데이트 되어서, fetch 요청 시 전달되는 commentNo 값이 undefined임</li>
</ul>
<img width="530" alt="댓글 삭제 기능 버그" src="https://user-images.githubusercontent.com/95236467/162692643-4dfa1ea9-b34d-429a-b244-0d6d01200420.PNG">

<h4>해결</h4>
<ul>
  <li>함수 안에 setState가 들어 있을 때 state는 함수가 끝나고 리렌더링 될 때 업데이트 된다는 것을 학습</li>
  <li>state 업데이트가 먼저 될 수 있도록 함 - 댓글 삭제 버튼 클릭 시 state 업데이트 하고 모달창 띄움</li>
  <li>모달창에서 삭제 버튼을 클릭하면 DB에 삭제 요청</li>
</ul>
<img width="378" alt="댓글" src="https://user-images.githubusercontent.com/95236467/162694490-796177aa-93df-45d7-8534-f2909e50401b.PNG">

<h3>2. 페이지네이션 기능이 제대로 작동하지 않는 문제</h3>
<h4>문제</h4>
<ul>
  <li>처음 게시판에 들어가면 1페이지에 있어야 하는 게시물이 잘 렌더링되나, 2페이지를 눌러도 같은 게시물이 렌더링됨</li>
  <li>다시 1페이지를 누르면 2페이지에 있어야 하는 게시물이 렌더링되고, 2페이지를 다시 누르면 1페이지에 있어야 하는 게시물이 렌더링됨</li>
</ul>

```javascript
//버그 해결 전 소스 코드
const handleChange = (event) => {
    setStartIndex((currentPage - 1) * itemsPerPage)
    setCurrentPage(Number(event.target.id))
  }

  for (let number = 1; number <= pageCount; number++) {
    items.push(
      <Pagination.Item
        key={number} id={number}
        onClick={handleChange}
        active={number === currentPage}>
        {number}
      </Pagination.Item>,
    );
  }

```

<img width="700" src="https://user-images.githubusercontent.com/95236467/162699783-f1284cfc-1b9b-4bf8-8591-a9eadd3152f3.gif" alt="페이지네이션 버그">

<h4>해결</h4>
<ul>
  <li>state는 batch 작업으로 업데이트되므로 코드 라인 순서대로 업데이트되지 않는다는 것을 학습</li>
  <li>클릭 이벤트로는 setCurrentPage만 호출하여 currentPage state가 먼저 업데이트 되도록 하고</li>
  <li>setStartIndex는 useEffect 안에서 호출하여 currentPage가 바뀔 때마다 호출되도록 함</li>
</ul>

```javascript
//버그 해결 후 소스코드
useEffect(() => {
    setStartIndex((currentPage - 1) * itemsPerPage)
}, [currentPage])

  for (let number = 1; number <= pageCount; number++) {
    items.push(
      <Pagination.Item
        key={number} id={number}
        onClick={() => {setCurrentPage(number);}}
        active={number === currentPage}>
        {number}
      </Pagination.Item>,
    );
  }

```

<img width="700" src="https://user-images.githubusercontent.com/95236467/162703703-44bc590a-bb9f-4244-a17c-efe8853010a2.gif" alt="페이지네이션 버그">

