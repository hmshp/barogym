import React from 'react';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import BoardBody from "../../sampleData/BoardBody.json";

const BoardFilter = (props) => {
  const {boardName} = props;
  // console.log(boardName)
  return (
    <>
      {BoardBody[boardName].listFilter && 
        BoardBody[boardName].listFilter.map(
          (variant) => (
            <DropdownButton
              as={ButtonGroup}
              key={variant}
              id={`dropdown-variants-${variant}`}
              variant={variant.toLowerCase()}
              title={variant}
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3" active>
                Active Item
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
          ),
        )
      }
    </>
  );
};

export default BoardFilter;