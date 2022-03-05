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