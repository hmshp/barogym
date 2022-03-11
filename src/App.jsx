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
import BoardListPage from './view/page/board/BoardListPage';
import BoardWritePage from './view/page/board/BoardWritePage';
import BoardDetailPage from './view/page/board/BoardDetailPage';
import BoardUpdatePage from './view/page/board/BoardUpdatePage';
import PassInfoPage from './view/page/pass/PassInfoPage'
import PassBuyPage from './view/page/pass/PassBuyPage'
import ClassUploadPage from './view/page/class/ClassUploadPage'
import ClassAppointmentPage from './view/page/class/ClassAppointmentPage'
import ClassSchedulePage from './view/page/class/ClassSchedulePage'
import LoginPage from './view/page/login/LoginPage'
import SignupPage from './view/page/login/SignupPage'
import FindIdPage from './view/page/login/FindIdPage'
import ResetPwdPage from './view/page/login/ResetPwdPage'
import MyInfoPage from './view/page/myInfo/MyInfoPage'
import PayListPage from './view/page/myInfo/PayListPage'
import SchedulePage from './view/page/myInfo/SchedulePage'
import IncomeListPage from './view/page/mgmt/IncomeListPage';
import ProductListPage from './view/page/mgmt/ProductListPage';
import ProductUpdatePage from './view/page/mgmt/ProductUpdatePage';
import Zipcode from './view/component/login/Zipcode';


const App = () => {
  return (
    <>
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
          <Route path="/board/list/:id/:page" exact={true} element={<BoardListPage/>} />
          <Route path="/board/write/:id" exact={true} element={<BoardWritePage/>} />
          <Route path="/board/detail/:id/:bno/:page" exact={true} element={<BoardDetailPage/>} />
          <Route path="/board/update/:id/:bno/:page" exact={true} element={<BoardUpdatePage/>} />
          {/* pass */}
          <Route path="/pass/info" exact={true} element={<PassInfoPage/>} />
          <Route path="/pass/buy" exact={true} element={<PassBuyPage/>} />
          {/* class */}
          <Route path="/class/upload" exact={true} element={<ClassUploadPage/>} />
          <Route path="/class/appointment" exact={true} element={<ClassAppointmentPage/>} />
          <Route path="/class/schedule" exact={true} element={<ClassSchedulePage/>} />
          {/* login */}
          <Route path="/login" exact={true} element={<LoginPage/>} />
          <Route path="/login/signup" exact={true} element={<SignupPage/>} />
          <Route path="/login/findId" exact={true} element={<FindIdPage/>} />
          <Route path="/login/resetPwd" exact={true} element={<ResetPwdPage/>} />
          {/* myInfo */}
          <Route path="/myInfo" exact={true} element={<MyInfoPage/>} />
          <Route path="/myInfo/payList" exact={true} element={<PayListPage/>} />
          <Route path="/myInfo/schedule" exact={true} element={<SchedulePage/>} />
          {/* mgmt */}
          <Route path="/mgmt/product/list" exact={true} element={<ProductListPage/>} />
          <Route path="/mgmt/product/update" exact={true} element={<ProductUpdatePage/>} />
          <Route path="/mgmt/income/list" exact={true} element={<IncomeListPage/>} />
        </Routes> 
      <Footer />        
    </>
  );
};

export default App;