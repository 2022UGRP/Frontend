import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Mypageportfolioform } from '../../components/myPage'
import { useCookies } from 'react-cookie';
import Aftertopfixed from 'components/fixed/Aftertopfixed';

const MyPagePortfolio = () => {
  const [cookies, , removeCookies] = useCookies(['loginkey', 'name', 'age', 'school', 'major', 'portfoliokey']);
  const items = {
      '능력과 자격': ['언어능력', '자격증(민간, 국가공인)'],
      '학력': ['성적 및 학점', '전공 및 학교'],
      '활동': ['경력', '대외활동(대회, 공모전)', '개인 프로젝트'],
  };
  const obj = {};
  for (const [_, v] of Object.entries(items)) {
    v.forEach(item => obj[item] = false);
  }

  const [portfolio, setPortfolio] = useState({
    'activity': undefined,
    'contents': undefined,
  });
  const changeEssayHandler = (e) => {
    setPortfolio((d) => ({...d, [e.target.name]: e.target.value}));
  }

  const [isChecked, setIsChecked] = useState(obj);
  const checkedItemHandler = (id) => {
    if (portfolio.activity === undefined) {
      setIsChecked(d => ({...d, [id]: true}));
      setPortfolio(d => ({...d, 'activity': id}))
    } else if (portfolio.activity === id) {
      setIsChecked(d => ({...d, [id]: false}));
      setPortfolio(d => ({...d, 'activity': undefined}))
    } else {
      setIsChecked(d => ({...d, [portfolio.activity]: false, [id]: true}));
      setPortfolio(d => ({...d, 'activity': id}))
    }
  };

  const [activate, setActivate] = useState(false);
  useEffect(() => {
    if (portfolio.activity === undefined ||
      portfolio.contents === undefined ||
      portfolio.contents === '') {
      setActivate(() => true);
    } else {
      setActivate(() => false);
    }
  }, [portfolio])

  const navigate = useNavigate();
  const registerHandler = async() => {
    await axios ({
      method: 'post',
      url: `/api/element/${cookies.portfoliokey}`,
      data: {
        activity: portfolio.activity,
        contents: portfolio.contents,
      }
    })
    .then((response)=>{
        console.log(response);
        navigate('/mypage/detail');
    }).catch((Error)=>{
        console.log(Error);
    })
  };

  return (
    <>
      <Aftertopfixed/>
      <Mypageportfolioform
        portfolio={portfolio}
        items={items}
        isChecked={isChecked}
        activate={activate}
        changeEssayHandler={changeEssayHandler}
        checkedItemHandler={checkedItemHandler}
        registerHandler={registerHandler}/>
      {/* <Bottomfixed/> */}
    </>
  );
}

export default MyPagePortfolio;