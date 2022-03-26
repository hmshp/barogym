import axios from "axios";





export const memberListDB = (uid, type) => {

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

export const boardListDB = (id, bno) => {

  return new Promise((resolve) => {
    const response = axios({
      method: 'get',
      url: process.env.REACT_APP_SPRING_IP+'board/list',
      params: {

      }
    });
    console.log(response);
    resolve(response);
  });

}

export const boardDetailDB = (id, bno) => {

  return new Promise((resolve) => {
    const response = axios({
      method: 'get',
      url: process.env.REACT_APP_SPRING_IP+'board/detail',
      params: {

      }
    });
    console.log(response);
    resolve(response);
  });
}

export const boardUpdateDB = (id, bno) => {

  return new Promise((resolve) => {
    const response = axios({
      method: 'put',
      url: process.env.REACT_APP_SPRING_IP+'board/detail',
      params: {

      }
    });
    console.log(response);
    resolve(response);
  });
}

export const boardDeleteDB = (id, bno) => {

  return new Promise((resolve) => {
    const response = axios({
      method: 'delete',
      url: process.env.REACT_APP_SPRING_IP+'board/detail',
      params: {

      }
    });
    console.log(response);
    resolve(response);
  });
}

export const uploadImageDB = (id, bno) => {

  return new Promise((resolve) => {
    const response = axios({
      method: 'post',
      // url: process.env.REACT_APP_SPRING_IP+'board/detail',
      // params: {

      // }
    });
    console.log(response);
    resolve(response);
  });
}

