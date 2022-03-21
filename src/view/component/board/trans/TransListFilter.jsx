import React from 'react';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import BoardBody from "../../../sampleData/BoardBody.json";

const TransListFilter = () => {
  
  const filterElements = BoardBody["trans"].listFilter.map(
    (filterTitle) => (
      <DropdownButton
        as={ButtonGroup}
        key={filterTitle}
        id={`dropdown-variants-${filterTitle}`}
        variant={filterTitle.toLowerCase()}
        title={filterTitle}
      >
        <Dropdown.Item eventKey="1">그룹 수업</Dropdown.Item>
        <Dropdown.Item eventKey="2" active>
          헬스장 이용권 
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

export default TransListFilter;