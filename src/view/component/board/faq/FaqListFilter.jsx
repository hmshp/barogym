import React from 'react';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import BoardBody from "../../../sampleData/BoardBody.json";

const FaqListFilter = () => {
  
  const filterElements = BoardBody["faq"].listFilter.map(
    (filterTitle) => (
      <DropdownButton
        as={ButtonGroup}
        key={filterTitle}
        id={`dropdown-variants-${filterTitle}`}
        variant={filterTitle.toLowerCase()}
        title={filterTitle}
      >
        <Dropdown.Item eventKey="1">헬스장 이용 안내</Dropdown.Item>
        <Dropdown.Item eventKey="2">결제 안내</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          수업 안내
        </Dropdown.Item>
      </DropdownButton>
    ),
  )

  return (
    <>
      {filterElements}
    </>
  );
};

export default FaqListFilter;