import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NotFound from '../../NotFound';
import {BeforeMain, AfterMain, BeforeAboutUs, AfterAboutUs} from '../../../domain/main';

const MainPresenter = () => {
  return (
    <Routes>
        <Route path = "/" element={<BeforeMain/>}/>
        <Route path = "/main" element={<AfterMain/>}/>
        <Route path = "/aboutus" element={<BeforeAboutUs/>}/>
        <Route path = "/main/aboutus" element={<AfterAboutUs/>}/>
        <Route path="/*" element={<NotFound/>}/>
    </Routes>
  )
};

export default MainPresenter;