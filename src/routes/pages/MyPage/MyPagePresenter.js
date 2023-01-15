import React from 'react'
import {Routes, Route} from 'react-router-dom';
import {MyPageMain, MyPageDetail, MyPageNFTmint, MyPagePortfolio, MyPageSelfintro, MyPageNFTview} from "../../../domain/mypage";
import NotFound from '../../NotFound';

const MyPagePresenter = () => {
  return (
    <Routes>
        <Route path="/" element={<MyPageMain/>}/>
        <Route path="/portfolio" element={<MyPagePortfolio/>}/>
        <Route path="/selfintro" element={<MyPageSelfintro/>}/>
        <Route path="/detail" element={<MyPageDetail/>}/>
        <Route path="/NFTmint" element={<MyPageNFTmint/>}/>
        <Route path="/NFTview/:NFT_id" element={<MyPageNFTview/>}/>
        <Route path="/*" element={<NotFound/>}/>
    </Routes>
  )
}

export default MyPagePresenter;