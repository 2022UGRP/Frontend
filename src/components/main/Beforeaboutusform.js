import React from 'react';
import { useNavigate } from 'react-router-dom';
import Beforetopfixed from 'components/fixed/Beforetopfixed';
import Bottomfixed from 'components/fixed/Bottomfixed';

function Beforeaboutusform() {
  const navigate = useNavigate();
  return (
    <div className = "background">
      <Beforetopfixed/>
      <div className="banner">
        <h1>About us</h1>
        <div>안녕하세요! 저희는 NFT-I입니다</div>
        <div>서비스 설명 + 사용 방법</div>
      </div>
      <Bottomfixed/>
    </div>
  )
};

export default Beforeaboutusform;