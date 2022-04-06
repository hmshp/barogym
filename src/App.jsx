import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './view/component/Header';
import Footer from './view/component/Footer';
import HomePage from './view/page/HomePage'
import IntroGymPage from './view/page/intro/IntroGymPage'
import IntroTeacherPage from './view/page/intro/IntroTeacherPage'
import IntroClassPage from './view/page/intro/IntroClassPage'
import IntroLocationPage from './view/page/intro/IntroLocationPage'
import UserContext from './userContext'

import PassInfoPage from './view/page/pass/PassInfoPage';
import ClassUploadPage from './view/page/class/ClassUploadPage';
import ClassAppointmentPage from './view/page/class/ClassAppointmentPage'
import ClassSchedulePage from './view/page/class/ClassSchedulePage'
import LoginPage from './view/page/login/LoginPage'
import SignupPage from './view/page/login/SignupPage'
import FindEmailPage from './view/page/login/FindEmailPage'
import FindPwdPage from './view/page/login/FindPwdPage'
import MyInfoPage from './view/page/myInfo/MyInfoPage'
import PayListPage from './view/page/myInfo/PayListPage'
import SchedulePage from './view/page/myInfo/SchedulePage'
import ProductListPage from './view/page/mgmt/ProductListPage';
import ProductUpdatePage from './view/page/mgmt/ProductUpdatePage';
import ProductInsertPage from './view/page/mgmt/ProductInsertPage';
import MyPostsPage from './view/page/myInfo/MyPostsPage';
import ManagerHeader from './view/component/mgmt/ManagerHeader';
import MemberMgmtPage from './view/page/mgmt/MemberMgmtPage';
import BoardList from './view/page/board/BoardList'
import BoardUpdate from './view/page/board/BoardUpdate'
import BoardDetail from './view/page/board/BoardDetail';
import BoardWrite from './view/page/board/BoardWrite';
import GlobalStyle from './styles/GlobalStyle';
import RequestMgmt from './view/page/mgmt/RequestMgmtPage';
import { getCookie } from './view/component/login/cookie';
import ClassListPage from './view/page/mgmt/ClassListPage';
import ClassInsertPage from './view/page/mgmt/ClassInsertPage';
import MyInfoUpdatePage from './view/page/myInfo/MyInfoUpdatePage';
import MyPassPage from './view/page/myInfo/MyPassPage';
import PassRequestPage from './view/page/pass/PassRequestPage';
import PassRequestComplete from './view/page/pass/PassRequestComplete';


const App = (props) => {
  const userId = getCookie('cmem_uid')
  const userName = getCookie('cmem_name')
  console.log('App 컴포넌트 안: ' + userId + " " + userName)

  return (
    <UserContext.Provider value={{userId, userName}}>
      {userId === "admin123" ? <ManagerHeader /> : <Header/>}
    <GlobalStyle />
        <Routes>
          {/* home */}
          <Route path="/" exact={true} element={<HomePage/>} />
          {/* intro */}
          <Route path="/intro/gym" exact={true} element={<IntroGymPage/>} />
          <Route path="/intro/teacher" exact={true} element={<IntroTeacherPage/>} />
          <Route path="/intro/class" exact={true} element={<IntroClassPage/>} />
          <Route path="/intro/location" exact={true} element={<IntroLocationPage/>} />
          {/* board */}
          <Route path="/board/list/*" element={<BoardList/>} />
          <Route path="/board/write/*" element={<BoardWrite/>} />
          <Route path="/board/detail/*" element={<BoardDetail/>} />
          <Route path="/board/update/*" element={<BoardUpdate/>} />
          {/* pass */}
          <Route path="/pass/info" exact={true} element={<PassInfoPage/>} />
          <Route path="/pass/request" exact={true} element={<PassRequestPage/>} />
          <Route path="/pass/requestComplete" exact={true} element={<PassRequestComplete/>} />
          {/* class */}
          <Route path="/class/upload" exact={true} element={<ClassUploadPage/>} />
          <Route path="/class/appointment" exact={true} element={<ClassAppointmentPage/>} />
          <Route path="/class/schedule" exact={true} element={<ClassSchedulePage/>} />
          {/* login */}
          <Route path="/login" exact={true} element={<LoginPage/>} />
          <Route path="/login/signup" exact={true} element={<SignupPage/>} />
          <Route path="/login/findEmail" exact={true} element={<FindEmailPage/>} />
          <Route path="/login/findPwd" exact={true} element={<FindPwdPage/>} />
          {/* myInfo */}
          <Route path="/myInfo" exact={true} element={<MyInfoPage/>} />
          <Route path="/myInfo/update" exact={true} element={<MyInfoUpdatePage/>} />
          <Route path="/myInfo/payList" exact={true} element={<MyPassPage/>} />
          <Route path="/myInfo/posts" exact={true} element={<MyPostsPage/>} />
          <Route path="/myInfo/schedule" exact={true} element={<SchedulePage/>} />
          {/* mgmt */}
          <Route path="/mgmt/product/list" exact={true} element={<ProductListPage/>} />
          <Route path="/mgmt/product/update" exact={true} element={<ProductUpdatePage/>} />
          <Route path="/mgmt/product/insert" exact={true} element={<ProductInsertPage/>} />
          <Route path="/mgmt/member/list" exact={true} element={<MemberMgmtPage/>} />
          <Route path="/mgmt/request/list" exact={true} element={<RequestMgmt/>} />
          <Route path="/mgmt/class/list" exact={true} element={<ClassListPage/>} />
          <Route path="/mgmt/class/insert" exact={true} element={<ClassInsertPage/>} />
        </Routes> 
      <Footer />        
    </UserContext.Provider>
  );
};

export default App;