import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {SignUp} from "../../../domain/sign";
import NotFound from '../../NotFound';

const SignUpPresenter = () => {
  return (
    <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/*" element={<NotFound/>}/>
    </Routes>
  )
};

export default SignUpPresenter;