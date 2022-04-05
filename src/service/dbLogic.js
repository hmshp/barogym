import axios from "axios";

export const memberListDB = (uid) => {
  return new Promise((resolve) => {
    const response = axios({
      method: 'get',
      url: process.env.REACT_APP_SPRING_IP+'member/memberList',
      params: {

      }
    });
    console.log(response);
    resolve(response);
  });
}

export const kakaoPayReadyDB = (list) => {
  return new Promise((resolve) => {
    const response = axios({
      method: 'post',
      url: process.env.REACT_APP_SPRING_IP+'orders/payReady',
      data: list
    });
    console.log(JSON.stringify(list));
    resolve(response);
  });
}


export const payListDB = (pay_no) => {
  return new Promise((resolve) => {
    const response = axios({
      method: 'get',
      url: process.env.REACT_APP_SPRING_IP+'orders/payList',
      params: {
        pay_no : pay_no
      }
    });
    resolve(response);
  });
}

export const kakaoPaySuccessDB = (list) => {
  return new Promise((resolve) => {
    const response = axios({
      method: 'post',
      url: process.env.REACT_APP_SPRING_IP+'orders/paySuccess',
      data: {
        pg_token : list.pg_token,
        order_no : list.order_no,
        mem_no : list.mem_no,
        pay_no : list.pay_no,
        pass_sday : list.pass_sday
      }
    });
    resolve(response);
  });
}


export const uploadImageDB = (file) => {
  return fetch(`http://localhost:9000/board/imageUpload`, {
    method: "POST",
    body: file,
    // headers: {
    //   "Content-Type": "multipart/form-data"
    // },
  })
    .then(res => res.json())
  // return new Promise((resolve) => {
  //   const response = axios({
  //     method: 'post',
  //     url: process.env.REACT_APP_SPRING_IP+'board/imageUpload',
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //     processData: false,
  //     contentType: false,
  //     data: file
      
  //   });
  //   resolve(response);
  // });
}

export const boardListDB = (id) => {
  console.log("boardListDB 실행" + id)
  return new Promise((resolve) => {
    const response = axios({
      method: 'get',
      url: process.env.REACT_APP_SPRING_IP+'board/boardList',
      params: {
        id : id
      }
    });
    resolve(response);
  });
}

export const boardInsertDB = (board) => {
  // console.log("boardInsertDB 실행")
  // console.log(board)
  return new Promise((resolve) => {
    const response = axios({
      method: 'post',
      url: process.env.REACT_APP_SPRING_IP+'board/boardInsert',
      data: board
    });
    console.log(resolve(response));
  });
}

export const boardUpdateDB = (board) => {
  return new Promise((resolve) => {
    const response = axios({
      method: 'post',
      url: process.env.REACT_APP_SPRING_IP+'board/boardUpdate',
      data: board
    });
    resolve(response);
  });
}


export const boardDeleteDB = (board) => {
  return new Promise((resolve) => {
    const response = axios({
      method: 'post',
      url: process.env.REACT_APP_SPRING_IP+'board/boardDelete',
      data: board
    });
    resolve(response);
  });
}


export const boardDetailDB = (id, bno) => {
  return new Promise((resolve) => {
    const response = axios({
      method: 'get',
      url: process.env.REACT_APP_SPRING_IP+'board/boardDetail',
      params: {
        id: id,
        bno : bno
      }
    });
    resolve(response);
  });
}

