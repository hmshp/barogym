import React from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
//참고한 사이트: https://medium.com/how-to-react/create-pagination-in-reactjs-e4326c1b9855

const BoardSearchBar = (props) => {
  const { searchText, setSearchText } = props;

  const handleChange = (event) => {
    setSearchText(event.target.value)
  }


  return (
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="제목을 입력해 주세요."
          className="me-2"
          aria-label="검색"
          onChange={handleChange}
          value={searchText}
        />
    </Form>
  );
};

export default BoardSearchBar;