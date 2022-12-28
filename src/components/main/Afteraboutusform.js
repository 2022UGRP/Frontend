import React from 'react';
import Aftertopfixed from 'components/fixed/Aftertopfixed';
import Bottomfixed from 'components/fixed/Bottomfixed';
import logo from 'img/logo.png';
import ex from 'img/1.png'

function Afteraboutusform() {
  return (
    <div className="background">
      <Aftertopfixed />
      <div className="banner">
        <h1>About us</h1>
        <div>안녕하세요! 저희는 NFT-I입니다</div>
        <br />
        <br />

        <div className='aboutus-cell'>
          <img
            src={ex}
            width='30%'
            alt='NFT example'
            style={{ marginRight: '10px' }} />
          <div style={{ width: '60%' }}>
            <div className='aboutus-question'>NFT(Non-Fungible Token)란?</div>
            <div>NFT는 블록체인 기술을 이용한 대체 불가능한 토큰입니다. NFT를 통해 변조가 불가능한 원본들을 안전하게 거래할 수 있습니다.</div>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className='aboutus-cell'>
          <div>
            <div className='aboutus-question'>NFT-I란?</div>

            <div>NFT-I는 나만의 NFT 포트폴리오를 만들고 공유할 수 있는 플랫폼입니다.
              블록체인 기술을 활용해 학생들의 소유권과 저작권을 보호합니다.
              포트폴리오에 들어있는 내용에 따라서 나만의 NFT 캐릭터가 만들어지고 새로운 내용이 추가 될때마다 캐릭터는 조금씩 발전합니다(크기, 악세사리 등)
              NFT-I는 NFT를 이용해서 나의 캐릭터 그리고 다른 학생들의 캐릭터를 거래해 서로의 포트폴리오 또한 공유할 수 있습니다.
              자유롭게 포트폴리오를 관리 및 거래하고 다른 학생들의 포트폴리오를 둘러보면서 필요한 대외활동, 인턴십, 등에 대한 정보를 얻을 수 있는 경험을 체험해보세요.
            </div>
          </div>
          <img
            src={logo}
            alt='NFT-I logo'
            style={{ marginLeft: '10px', backgroundColor: 'white' }} />
        </div>
      </div>
      <Bottomfixed />
    </div>
  )
};

export default Afteraboutusform;