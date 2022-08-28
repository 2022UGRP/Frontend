import React from 'react';
import { Avatar, Stack } from '@mui/material';
import giraffe from "img/griaffe.png";
import logo from "img/logo.png";
import lowlogo from "img/lowlogo.png";
import { useNavigate } from 'react-router-dom';

const LogoProfileBack = () => {
  const navigate = useNavigate();
  return (
    <div className='header'>
        <div>
            {/* <img src={logo} className="img" alt="React"/> */}
            <img src={lowlogo} className="img" alt="lowlogo" onClick={()=>{navigate('/main')}}/>
        </div>
        <div className='topName' onClick={()=>{navigate('/mypage')}} >
            <Stack direction="row" spacing={2}>
            <Avatar className='image' src={giraffe} alt="giraffe" sx={{ width: 40, height: 40 }}/>
            </Stack>
            <h4>기린이</h4>
        </div> 
    </div>
  );
}

export default LogoProfileBack;