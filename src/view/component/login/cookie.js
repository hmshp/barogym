import { Cookies } from "react-cookie";

const cookies = new Cookies();
let now = new Date();
let after1m = new Date();
export const setCookie = (name, value) => {
  after1m.setMinutes(now.getMinutes() + 1);
  //return cookies.set(name, value, { path: "/", expires: after1m });
  return cookies.set(name, value);
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const deleteCookie = (name) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};