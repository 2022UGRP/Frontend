import React, { useEffect } from 'react';
import {Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import {Main, SignIn, SignUp, MyPage, Market} from './pages';

import NotFound from './NotFound';

const MainRoutes = () => {
    const [cookies] = useCookies(["loginkey"]);
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(()=>{
        if(cookies.loginkey === undefined                 //세션키가 없는데
            && location.pathname !=="/" 
            && location.pathname !=="/signin"
            && location.pathname !=="/signup"
            && location.pathname !=="/aboutus"
            && location.pathname !=="/market/tour"){     //로그인 전 갈 수 있는 페이지
                navigate("/signin");                     //가 아닌 경우 로그인 페이지로 이동
        } else if (cookies.loginkey && cookies.loginkey !== undefined   //세션키가 있는데
            && (location.pathname !=="/" 
            || location.pathname !=="/signin"
            || location.pathname !=="/signup"
            || location.pathname !=="/aboutus"
            || location.pathname !=="/market/tour" )){    //로그인 전 갈 수 있는 페이지
                navigate("/main");                        //이면 메인으로 이동
        } else {
            console.log("Tlqkf");                           //Tlqkf
        }
    })
    return (
        <Routes>
            <Route path ="/*" element={<Main/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/mypage/*" element={<MyPage/>}/>
            <Route path="/market/*" element={<Market/>}/>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    )
};

export default MainRoutes;