import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Mypageselfintroform } from '../../components/myPage';
import { useCookies } from 'react-cookie';

const MyPageSelfintro = () => {
  const [cookies, , removeCookies] = useCookies(['loginkey', 'name', 'age', 'school', 'major', 'portfoliokey']);
  const [items, setItems] = useState({
    'place': undefined,
    'selfintro': undefined,
  });
  const changeEssayHandler = (e) => {
    setItems((d) => ({...d, [e.target.name]: e.target.value}));
  };

  const [activate, setActivate] = useState(false);
  useEffect(() => {
    if (items.place === undefined ||
      items.place === '' ||
      items.selfintro === undefined ||
      items.selfintro === '') {
      setActivate(() => true);
    } else {
      setActivate(() => false);
    }
  }, [items])

  const [startdate, setStartDate] = useState(new Date());

  const navigate = useNavigate();

  const registerHandler = async() => {
    await axios ({
      method: 'post',
      url: `/api/selfintro/${cookies.portfoliokey}`,
      data: {
        title: items.place,
        date: startdate,
        contents: items.selfintro,
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
    <Mypageselfintroform
      activate={activate}
      changeEssayHandler={changeEssayHandler}
      registerHandler={registerHandler}
      setStartDate={setStartDate}  
      startdate={startdate}
    />
  );
}

export default MyPageSelfintro;