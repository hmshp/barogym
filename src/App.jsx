import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { memberListDB } from './service/dbLogic';
import Header from './view/component/Header';
import Footer from './view/component/Footer';
import KakaoMap from './view/component/intro/KakaoMap'
import HomePage from './view/page/HomePage'
import IntroGymPage from './view/page/intro/IntroGymPage'
import IntroTeacherPage from './view/page/intro/IntroTeacherPage'
import IntroClassPage from './view/page/intro/IntroClassPage'
import IntroLocationPage from './view/page/intro/IntroLocationPage'

import PassInfoPage from './view/page/pass/PassInfoPage';
import PassBuyPage from './view/page/pass/PassBuyPage';
import PassBuyComplete from './view/page/pass/PassBuyComplete';
import ClassUploadPage from './view/page/class/ClassUploadPage';
import ClassAppointmentPage from './view/page/class/ClassAppointmentPage'
import ClassSchedulePage from './view/page/class/ClassSchedulePage'
import LoginPage from './view/page/login/LoginPage'
import SignupPage from './view/page/login/SignupPage'
import FindEmailPage from './view/page/login/FindEmailPage'
import ResetPwdPage from './view/page/login/ResetPwdPage'
import MyInfoPage from './view/page/myInfo/MyInfoPage'
import PayListPage from './view/page/myInfo/PayListPage'
import SchedulePage from './view/page/myInfo/SchedulePage'
import IncomeListPage from './view/page/mgmt/IncomeListPage';
import ProductListPage from './view/page/mgmt/ProductListPage';
import ProductUpdatePage from './view/page/mgmt/ProductUpdatePage';
import MyPostsPage from './view/page/myInfo/MyPostsPage';
import Zipcode from './view/component/login/Zipcode';
import ManagerHeader from './view/component/mgmt/ManagerHeader';
import MemberMgmtPage from './view/page/mgmt/MemberMgmtPage';
import TeacherMgmtPage from './view/page/mgmt/TeacherMgmtPage';
import BoardList from './view/page/board/BoardList'
import BoardUpdate from './view/page/board/BoardUpdate'
import BoardDetail from './view/page/board/BoardDetail';
import BoardWrite from './view/page/board/BoardWrite';
import GlobalStyle from './styles/GlobalStyle';
import RequestMgmt from './view/page/mgmt/RequestMgmtPage';


const App = (props) => {
  return (
    <>
      <GlobalStyle />
      {/* <ManagerHeader /> */}
      <Header/>
        {/* <button onClick={async()=>{ const db =await memberListDB(); alert("console창 확인"); console.log(db.data[0]);}}>DB테스트</button>
        <KakaoMap/>
        <Zipcode/> */}
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
          <Route path="/pass/buy" exact={true} element={<PassBuyPage/>} />
          <Route path="/pass/buyComplete" exact={true} element={<PassBuyComplete/>} />
          {/* class */}
          <Route path="/class/upload" exact={true} element={<ClassUploadPage/>} />
          <Route path="/class/appointment" exact={true} element={<ClassAppointmentPage/>} />
          <Route path="/class/schedule" exact={true} element={<ClassSchedulePage/>} />
          {/* login */}
          <Route path="/login" exact={true} element={<LoginPage/>} />
          <Route path="/login/signup" exact={true} element={<SignupPage/>} />
          <Route path="/login/findEmail" exact={true} element={<FindEmailPage/>} />
          <Route path="/login/resetPwd" exact={true} element={<ResetPwdPage/>} />
          {/* myInfo */}
          <Route path="/myInfo" exact={true} element={<MyInfoPage/>} />
          <Route path="/myInfo/payList" exact={true} element={<PayListPage/>} />
          <Route path="/myInfo/posts" exact={true} element={<MyPostsPage/>} />
          <Route path="/myInfo/schedule" exact={true} element={<SchedulePage/>} />
          {/* mgmt */}
          <Route path="/mgmt/product/list" exact={true} element={<ProductListPage/>} />
          <Route path="/mgmt/product/update" exact={true} element={<ProductUpdatePage/>} />
          <Route path="/mgmt/income/list" exact={true} element={<IncomeListPage/>} />
          <Route path="/mgmt/member/list" exact={true} element={<MemberMgmtPage/>} />
          <Route path="/mgmt/teacher/list" exact={true} element={<TeacherMgmtPage/>} />
          <Route path="/mgmt/request/list" exact={true} element={<RequestMgmt/>} />
        </Routes> 
      <Footer />        
    </>
  );
};

export default App;