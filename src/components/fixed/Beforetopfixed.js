import React from 'react';
import logo from "img/logo.png";
import { useNavigate } from 'react-router-dom';

function Beforetopfixed() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <ul className="nav">
        <img className="logo" src={logo} alt="React" onClick={()=>{navigate('/main')}}/>
        <div className="navbar" onClick={()=>{navigate('/aboutus')}}>About Us</div>
        <div className="navbar" onClick={()=>{navigate('/market/tour')}}>MarketTour</div>
      </ul>
      <div class="dropdown">
        <button className="button" onClick={()=>{navigate('/signin')}}>Login</button>
      </div>
    </div>
  )
};

export default Beforetopfixed;