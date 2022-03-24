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
import ReviewListPage from './view/page/board/classReview/ReviewListPage';
import ReviewDetailPage from './view/page/board/classReview/ReviewDetailPage'
import ReviewUpdatePage from './view/page/board/classReview/ReviewUpdatePage'
import ReviewWritePage from './view/page/board/classReview/ReviewWritePage'
import FaqListPage from './view/page/board/faq/FaqListPage';
import FaqWritePage from './view/page/board/faq/FaqWritePage';
import FaqUpdatePage from './view/page/board/faq/FaqUpdatePage';
import FaqDetailPage from './view/page/board/faq/FaqDetailPage';
import NoticeListPage from './view/page/board/notice/NoticeListPage';
import NoticeWritePage from './view/page/board/notice/NoticeWritePage';
import NoticeUpdatePage from './view/page/board/notice/NoticeUpdatePage';
import NoticeDetailPage from './view/page/board/notice/NoticeDetailPage';
import QnAListPage from './view/page/board/qna/QnAListPage';
import QnAWritePage from './view/page/board/qna/QnAWritePage';
import QnAUpdatePage from './view/page/board/qna/QnAUpdatePage';
import QnADetailPage from './view/page/board/qna/QnADetailPage';
import TransListPage from './view/page/board/trans/TransListPage';
import TransWritePage from './view/page/board/trans/TransWritePage';
import TransUpdatePage from './view/page/board/trans/TransUpdatePage';
import TransDetailPage from './view/page/board/trans/TransDetailPage';

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


const App = () => {
  return (
    <>
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
          {/* board - classReview */}
          <Route path="/board/review/list/*" element={<ReviewListPage/>} />
          <Route path="/board/review/write/*" element={<ReviewWritePage/>} />
          <Route path="/board/review/detail/*" element={<ReviewDetailPage/>} />
          <Route path="/board/review/update/*" element={<ReviewUpdatePage/>} />
          {/* board - faq */}
          <Route path="/board/faq/list/*" element={<FaqListPage/>} />
          <Route path="/board/faq/write/*" element={<FaqWritePage/>} />
          <Route path="/board/faq/detail/*" element={<FaqDetailPage/>} />
          <Route path="/board/faq/update/*" element={<FaqUpdatePage/>} />
          {/* board - notice */}
          <Route path="/board/notice/list/*" element={<NoticeListPage/>} />
          <Route path="/board/notice/write/*" element={<NoticeWritePage/>} />
          <Route path="/board/notice/detail/*" element={<NoticeDetailPage/>} />
          <Route path="/board/notice/update/*" element={<NoticeUpdatePage/>} />
          {/* board - qna */}
          <Route path="/board/qna/list/*" element={<QnAListPage/>} />
          <Route path="/board/qna/write/*" element={<QnAWritePage/>} />
          <Route path="/board/qna/detail/*" element={<QnADetailPage/>} />
          <Route path="/board/qna/update/*" element={<QnAUpdatePage/>} />
          {/* board - trans */}
          <Route path="/board/trans/list/*" element={<TransListPage/>} />
          <Route path="/board/trans/write/*" element={<TransWritePage/>} />
          <Route path="/board/trans/detail/*" element={<TransDetailPage/>} />
          <Route path="/board/trans/update/*" element={<TransUpdatePage/>} />
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
        </Routes> 
      <Footer />        
    </>
  );
};

export default App;