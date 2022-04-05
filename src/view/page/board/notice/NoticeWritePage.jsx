import React, { useEffect, useRef, useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import QuillEditor from '../../../component/board/QuillEditor'
import UserContext from '../../../../userContext'

const NoticeWritePage = (props) => {
  const { id } = props;
  const { userId } = useContext(UserContext)
  const[title, setTitle]= useState('');
  const[content, setContent]= useState('');
  const[files, setFiles]= useState([]);
  
  const quillRef = useRef();
  const navigate = useNavigate();

  console.log(id, title, content, userId)
  
  useEffect(() => {
    for(let i=0; i<files.length; i++){
      if(!content.match(files[i].split(' | ')[0])){
        console.log(files);
        setFiles(files.filter(file=>file!==files[i]));
      }
    }
    
  },[content, setFiles, files]);
  


  const handleContent = (value) => {
    console.log(value);
    setContent(value);
  };


  const handleFiles = (value) => {
    setFiles([...files, value]);
  };


  const handleTitle = (e) => {
    console.log(e)
    setTitle(e);

  } 

  const boardWrite = () => {
    fetch(`http://localhost:9000/board/boardInsert`, {
      method: "POST",
      body: JSON.stringify({
        mem_id : userId,
        title : title,
        content : content,
        id : id,
        fileNames : files
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(result => console.log(result))

    navigate(`/board/list?id=${id}`)
  }

  return (
    <>
      게시판 글쓰기 페이지
      <div style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
        <div style={{width:"80%", maxWidth:"2000px"}}>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom:'10px'}}>
            <span style={{alignSelf: 'flex-end'}}>제목</span> 
            <Button onClick={boardWrite}>글쓰기</Button>
          </div>
          <input
            id="dataset-title"
            type="text"
            placeholder="제목을 입력하세요."
            style={{width:"100%",height:'40px' , border:'1px solid lightGray'}}
            //value={noticeTitle}
            onChange={(e)=>{handleTitle(e.target.value)}}
          />
          <hr />
          <div style={{textAlign:"left", marginBottom:'10px'}}>상세내용</div>
          <QuillEditor value={content} handleContent={handleContent} quillRef={quillRef} files={files} handleFiles={handleFiles}/>
          <hr />
          <div style={{textAlign:"left", marginBottom:'10px'}}>첨부사진</div>
          <div style={{display:'block', border:'1px solid lightGray', minHeight:'60px'}}>
            {
              files.map((item, index)=>(
                <div type='text' id='fileUpload' style={{padding:"5px"}} key={index}>{item}</div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticeWritePage;