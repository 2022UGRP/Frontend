import React from 'react'
import {Routes, Route} from 'react-router-dom';
import {MyPagePortfolio, MyPageRegister, MyPageMain, MyPageDetail, SelfIntroduce, Portfolioshow} from "../../../domain/mypage";
import NotFound from '../../NotFound';

const MyPagePresenter = () => {
  return (
    <Routes>
        <Route path="/" element={<MyPageMain/>}/>
        <Route path="/detail" element={<MyPageDetail/>}/>
        <Route path="/portfolio" element={<MyPagePortfolio/>}/>
        <Route path ="/selfintro" element={<MyPageRegister/>}/>
        <Route path ="/selfintroshow" element={<SelfIntroduce/>}/>
        <Route path ="/portfolioshow" element={<Portfolioshow/>}/>
        <Route path="/*" element={<NotFound/>}/>
    </Routes>
  )
}

export default MyPagePresenter;