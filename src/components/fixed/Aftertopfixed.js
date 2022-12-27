import React from 'react';
import logo from "img/logo.png";
import { useNavigate } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCookies } from "react-cookie";

function Aftertopfixed() {
  const navigate = useNavigate();

  const [cookies, , removeCookies] = useCookies(['loginkey']);
  const handleClickLogOut = () => {
    removeCookies('loginkey');
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
          이지민  <ExpandMoreIcon/>
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