import React from 'react';
import { useNavigate } from 'react-router-dom';
import Aftertopfixed from 'components/fixed/Aftertopfixed';
import Bottomfixed from 'components/fixed/Bottomfixed';

function Aftermainform() {
  const navigate = useNavigate();

  return (
    <div className = "background">
      <Aftertopfixed/>
      <div className="banner">
        <h1>Welcome to NFT-I</h1>
        <div>Create your own NFT and discover them!</div>
      </div>
      {/* <Bottomfixed/> */}
    </div>
  )
};

export default Aftermainform;