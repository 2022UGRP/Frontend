import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {SignIn} from "../../../domain/sign";
import NotFound from '../../NotFound';

const SignInPresenter = () => {
  return (
    <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/*" element={<NotFound/>}/>
    </Routes>
  )
};

export default SignInPresenter;