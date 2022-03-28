import React from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';

const MyPostsSearchBar = () => {
  return (
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="제목을 입력해 주세요."
          className="me-2"
          aria-label="검색"
        />
        <Button variant="outline-secondary" style={{width: "100px"}}>검색</Button>
    </Form>
  );
};

export default MyPostsSearchBar;