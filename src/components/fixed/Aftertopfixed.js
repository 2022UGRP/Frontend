import React, { useEffect } from 'react';
import logo from "img/logo.png";
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useCookies } from "react-cookie";
import { Avatar } from '@mui/material';

function Aftertopfixed() {
  const navigate = useNavigate();

  const [cookies, , removeCookies] = useCookies(['loginkey', 'name', 'age', 'school', 'major', 'portfoliokey', 'image']);
  const handleClickLogOut = () => {
    removeCookies('loginkey', { path: '/' });
    removeCookies('portfoliokey', { path: '/' });
    removeCookies('name', { path: '/' });
    removeCookies('age', { path: '/' });
    removeCookies('school', { path: '/' });
    removeCookies('major', { path: '/' });
    removeCookies('image', { path: '/' });
    navigate('/');
  }

  return (
    <div className="header">
      <ul className="nav">
        <img className="logo" src={logo} alt="React" onClick={()=>{navigate('/main')}}/>
        <div className="navbar" onClick={()=>navigate('/main/aboutus')}>About Us</div>
        <div className="navbar" onClick={()=>navigate('/market')}>Market</div>
      </ul>
      <div class="dropdown">
        <button className="button">
          <Avatar sx={{ width: 32, height: 32, marginRight: '10px', border: '0.5px solid', borderColor: '#ff' }} src={cookies.image}/>
          {cookies.name}  <ArrowDropDownIcon/>
        </button>
        <div className="dropdown-content">
          <div onClick={()=>navigate('/mypage')}>My page</div>
          <div onClick={()=>handleClickLogOut()}>Log out</div>
        </div>
      </div>
    </div>
  )
}

export default Aftertopfixed;