import React from 'react';
import { useNavigate } from 'react-router-dom';
import Beforetopfixed from 'components/fixed/Beforetopfixed';
import Bottomfixed from 'components/fixed/Bottomfixed';


const Beforemainform = () => {
  const navigate = useNavigate();
  
  return (
    <div className = "background">
      <Beforetopfixed/>
      <div className="banner">
        <h1>Welcome to NFT-I</h1>
        <div>Create your own NFT and discover them!</div>
      </div>
      <Bottomfixed/>
    </div>
  )
};

export default Beforemainform;