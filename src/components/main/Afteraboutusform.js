import React from 'react';
import Aftertopfixed from 'components/fixed/Aftertopfixed';
import Bottomfixed from 'components/fixed/Bottomfixed';

function Afteraboutusform() {
  return (
    <div className = "background">
      <Aftertopfixed/>
      <div className="banner">
        <h1>About us</h1>
        <div>안녕하세요! 저희는 NFT-I입니다</div>
        <div>서비스 설명 + 사용 방법</div>
      </div>
      <Bottomfixed/>
    </div>
  )
};

export default Afteraboutusform;