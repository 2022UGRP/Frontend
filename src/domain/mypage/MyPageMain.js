import React from 'react';
import { Mypagemainform } from '../../components/myPage';
import { useCookies } from 'react-cookie';

const MyPageMain = () => {
  const [cookies, setCookie,] = useCookies(['loginkey']);
  
  return (
    <Mypagemainform/>
  )
}

export default MyPageMain;