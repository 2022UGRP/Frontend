import axios from 'axios';
import React from 'react';
import { Mypagemainform } from '../../components/myPage'
import { useCookies } from 'react-cookie';

const MyPageMain = () => {
  const [cookies, setCookie,] = useCookies(['loginkey']);
  const handleClickPortfolioMake = async () => {
    await axios({
      method: 'post',
      url: `/api/portfolio/${cookies.loginkey}`,
    })
      .then((response) => {
        console.log(response);
        alert('포트폴리오 생성');
        setCookie("portfoliokey", response.data.Id, { path: '/' });
      })
      .catch((Error)=>{
        console.log(Error);
        alert('포트폴리오 생성 실패');
      })
  }
  
  return (
    <Mypagemainform
    handleClickPortfolioMake={handleClickPortfolioMake}
    />
  )
}

export default MyPageMain;