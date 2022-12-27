import React from 'react'
import {Routes, Route} from 'react-router-dom';
import {MyPagePortfolio, MyPageSelfintro, MyPageMain, MyPageDetail, SelfintroShow, Portfolioshow} from "../../../domain/mypage";
import NotFound from '../../NotFound';

const MyPagePresenter = () => {
  return (
    <Routes>
        <Route path="/" element={<MyPageMain/>}/>
        <Route path="/detail" element={<MyPageDetail/>}/>
        <Route path="/portfolio" element={<MyPagePortfolio/>}/>
        <Route path ="/selfintro" element={<MyPageSelfintro/>}/>
        <Route path ="/selfintroshow" element={<SelfintroShow/>}/>
        <Route path ="/portfolioshow" element={<Portfolioshow/>}/>
        <Route path="/*" element={<NotFound/>}/>
    </Routes>
  )
}

export default MyPagePresenter;