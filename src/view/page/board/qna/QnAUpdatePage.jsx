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
  
  const quillRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    for(let i=0; i<files.length; i++){
      if(!content.match(files[i].split(' | ')[0])){
        console.log(files);
        setFiles(files.filter(file=>file!==files[i]));
      }
    }
    
  },[content, setFiles, files]);

  useEffect(() => {
    const boardDetail = async() => {
      const res = await boardDetailDB(id, bno);
      console.log(res);
      const datas = res.data;
      const fileNames = [];
      datas.forEach((data, index) => {
        if(index===0){ 
          setTitle(data.MASTER_TITLE); 
          setContent(data.MASTER_CONTENT);  
        } else {
          fileNames.push(data.FILE_NAME);
        }        
      })
      if(fileNames){setFiles(fileNames);}
    }
    boardDetail();
  },[setFiles, setTitle, setContent, id, bno]);

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

  const boardUpdate = async() => {
    if(title.trim()===''||content.trim()===''||!id) return alert("게시글이 작성되지 않았습니다.");
    const board = {
      id : id,
      bno : bno,
      title : title,
      content : content,
      fileNames : files,
      mem_no : '123'
    }
    const res = await boardUpdateDB(board);
    if(!res.data) return alert("게시판 업로드에 실패했습니다.");
    navigate(`/board/list?id=${id}&page=1`);
  }

  return (
    <>
    게시판 글쓰기 페이지
    <div style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
      <div style={{width:"80%", maxWidth:"2000px"}}>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom:'10px'}}>
          <span style={{alignSelf: 'flex-end'}}>제목</span> 
          <Button onClick={()=>{boardUpdate()}}>글수정</Button>
        </div>
        <input
          id="dataset-title"
          type="text"
          placeholder="제목을 입력하세요."
          style={{width:"100%",height:'40px' , border:'1px solid lightGray'}}
          defaultValue={title}
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

export default QnAUpdatePage;