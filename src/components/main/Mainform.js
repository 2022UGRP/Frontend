import React from 'react';
import { useNavigate } from 'react-router-dom';
import Beforetopfixed from 'components/fixed/Beforetopfixed';
import Bottomfixed from 'components/fixed/Bottomfixed';
import main_giraffe from 'img/main_giraffe.png';
import main_NFTI from 'img/main_NFTI.png';

const Mainform = () => {
  const navigate = useNavigate();
  
  return (
    <div className="banner" style={{ position: 'relative' }}>
      <div>
        <img
          src={main_giraffe}
          alt='main_giraffe'
          style={{ position: 'absolute', bottom: '1%', right:'8%', width: '60%', zIndex: '1' }} 
        />
      </div>
      <div>
        <img
          src={main_NFTI}
          alt='main_NFTI'
          style={{ position: 'absolute', top: '9%', left:'8%', width: '60%' }} 
        />
      </div>
      <div style={{ position: 'absolute', bottom: '20%', left:'12%' }}>
        <h1>Welcome to NFT-I</h1>
        <p>Create your own NFT and discover them!</p>
        {/* <Bottomfixed/> */}
      </div>
      <div style={{ backgroundColor: '#2B2627', position: 'absolute', width: '100%', height: '5%', bottom: '0%', left: '0%' }}></div>
    </div>
  )
};

export default Mainform;