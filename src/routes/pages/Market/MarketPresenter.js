import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NotFound from '../../NotFound';
import { MarketMain, MarketTour, MarketPurchase, MarketPflioOpen } from 'domain/market';
const MarketPresenter = () => {
  return (
    <Routes>
        <Route path="/tour" element={<MarketTour/>}/>
        <Route path="/" element={<MarketMain/>}/>
        <Route path="/purchase/:NFT_id/:CopyrightHolder_id" element={<MarketPurchase/>}/>
        <Route path ="/open" element={<MarketPflioOpen/>}/>
        <Route path="/*" element={<NotFound/>}/>
    </Routes>
  )
};

export default MarketPresenter;