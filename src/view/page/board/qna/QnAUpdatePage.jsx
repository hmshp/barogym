import React, { useEffect, useRef, useState }  from 'react';
import {CONTAINER, PAGEHEADER, H1, BUTTON, TWOBUTTONS, GRIDCONTAINER, FORM, TEXTAREA} from '../../../../styles/BoardStyle';
import CommentForm from '../../../component/board/CommentForm';
import CommentList from '../../../component/board/CommentList';
import DetailPagination from '../../../component/board/DetailPagination'
import { useNavigate, useLocation } from 'react-router-dom';
import { boardDetailDB, boardUpdateDB } from '../../../../service/dbLogic';
import QuillEditor from '../../../component/board/QuillEditor'
import {Button} from 'react-bootstrap'

const QnAUpdatePage = (props) => {
  const { id, bno } = props;
  const[title, setTitle]= useState('');
  const[content, setContent]= useState('');
  const[files, setFiles]= useState([]);
  const fileNames = [];

  console.log(title, content)
  
  const quillRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9000/board/boardDetail/?id=${id}&bno=${bno}`)
    .then(res => res.json())
    .then(result => {
        setTitle(result[0].QNA_TITLE)
        setContent(result[0].QNA_CONTENT)
        for(let i=result.length; i>1; i--) {
          console.log(i);
          fileNames.push(result[i-1].FILE_NAME);
        }
        if(fileNames){setFiles(fileNames);}
        console.log(result[0])
    })
  }, []) 

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
    setTitle(e);
  } 

  const boardUpdate = () => {
    fetch(`http://localhost:9000/board/boardUpdate`, {
      method: "POST",
      body: JSON.stringify({
        id : id,
        title : title,
        content : content,
        bno: bno,
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
            <BUTTON onClick={boardUpdate}>수정하기</BUTTON>
          </div>
          <input
            id="dataset-title"
            type="text"
            placeholder="제목을 입력하세요."
            style={{width:"100%",height:'40px' , border:'1px solid lightGray'}}
            value={title}
            onChange={(e)=>{handleTitle(e.target.value)}}
          />
          <hr />
          <div style={{textAlign:"left", marginBottom:'10px'}}>상세내용</div>
          <QuillEditor value={content || ''} handleContent={handleContent} quillRef={quillRef} files={files} handleFiles={handleFiles}/>
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

export default QnAUpdatePage;