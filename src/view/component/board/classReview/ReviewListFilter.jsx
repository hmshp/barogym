import React from 'react';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import BoardBody from "../../../sampleData/BoardBody.json";

const ReviewListFilter = () => {
  
  const filterElements = BoardBody["review"].listFilter.map(
    (filterTitle) => (
      <DropdownButton
        as={ButtonGroup}
        key={filterTitle}
        id={`dropdown-variants-${filterTitle}`}
        variant={filterTitle.toLowerCase()}
        title={filterTitle}
      >
        {(() => {
            switch (filterTitle) {
              case "수업 전체":
                return (
                  <>
                    <Dropdown.Item eventKey="1">요가</Dropdown.Item>
                    <Dropdown.Item eventKey="2">필라테스</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                      스피닝
                    </Dropdown.Item>
                  </>
                )
                break;
              case "강사명": 
                return (
                  <>
                    <Dropdown.Item eventKey="1">김사랑</Dropdown.Item>
                    <Dropdown.Item eventKey="2">손혜미</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                      나희도
                    </Dropdown.Item>
                  </> 
                )
              case "별점":
                return (
                  <>
                    <Dropdown.Item eventKey="1">★</Dropdown.Item>
                    <Dropdown.Item eventKey="2">★★</Dropdown.Item>
                    <Dropdown.Item eventKey="3">★★★</Dropdown.Item>
                    <Dropdown.Item eventKey="4">★★★★</Dropdown.Item>
                    <Dropdown.Item eventKey="5" active>
                      ★★★★★
                    </Dropdown.Item>
                  </>
                )
                break;
            }
            //함수는 react child가 될 수 없으므로 위에서 정의한 함수(switch문이 담긴)를 즉시실행해야 함수가 아닌 컴포넌트를 리턴할 수 있어서 아랫줄에 ()를 썼다. 그래서 함수가 즉시 실행된다.
          })()}
      </DropdownButton>
    ),
  )

  return (
    <>
      {filterElements}
    </>
  );
};

export default ReviewListFilter;