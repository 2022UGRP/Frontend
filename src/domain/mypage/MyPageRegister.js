import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Mypageregisterform } from '../../components/myPage'

const MyPageRegister = () => {
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

  const navigate = useNavigate();
  const registerHandler = async() => {
    const formData = new FormData();
    formData.append('activity', items.activity);
    formData.append('selfintro', items.selfintro);

    const config = {
        headers: {
            "content-type": "multipart/form-data"
        }
    };
    await axios.post("/api/profile/portfolio", formData, config).then((response)=>{
        console.log(response);
        navigate('/main');
    }).catch((Error)=>{
        console.log(Error);
    })
  };

  return (
    <Mypageregisterform
      activate={activate}
      changeEssayHandler={changeEssayHandler}
      registerHandler={registerHandler}/>
  );
}

export default MyPageRegister