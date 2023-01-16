import React from 'react';
import logo from 'img/logo.png';
import ex from 'img/griaffe.png'
import { Grid } from '@mui/material';
import aboutus_1 from 'img/aboutus_1.png';
import aboutus_2 from 'img/aboutus_2.png';
import cloud from 'img/cloud.png';
import zIndex from '@mui/material/styles/zIndex';

function Aboutusform() {
  return (
    <Grid className='aboutus' style={{ position: 'relative' }}>
      <Grid container className='aboutus_container1' justifyContent='center' alignItems='center' spacing={2} sx={{ zIndex: '1' }}>
        <Grid item xs={12} md={9} lg={8}>
          <h2><span>About us</span></h2>
          <h3>당신의 이야기를 하나의 대체불가능한 자원으로, NFT-I</h3>
          <p>안녕하세요, 저희는 <span>NFT-I</span>입니다! 우리는 많은 것들을 기록합니다. 사건, 해야할 일, 업적, 역사, 사람들과의 관계까지 말이죠. 
              그러나 우리가 이뤄낸 경력을 하나하나 기록하고, 써내리는 것은 쉽지 않습니다. 하나하나 기억하기 어려울 뿐더러, 어떻게 
              써야할지 모르니까요.</p>

          <p> NFT-I는 그런 당신을 위해 <span>포트폴리오를 하나의 NFT로 제공</span>합니다. 당신만의 경력, 업적, 능력과 자격들을 하나의 이미지로 담아내세요! 
          세상의 여러 경험들을 NFT 디자인을 통해 만나고, 자신의 포트폴리오를 NFT로 담아내어 나누어 보세요.   </p>
        </Grid>

        <Grid item container xs={12} md={9} lg={8} sx={{ marginTop: '50px'}}>
          <Grid item xs={12} md={4} lg={4}>
            <img
                src={aboutus_1}
                alt='aboutus_1'
                style={{ width: '60%' }} 
              />
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <h2><span>NFT(Non-Fungible Token)란?</span></h2>
            <p>NFT는 블록체인 기술을 이용한 <span>대체 불가능한 토큰</span>입니다. </p>
            <p> NFT를 통해 변조가 불가능한 원본들을
              안전하게 보관할 수 있습니다. NFT를 통해 우리의 고유 정보를 NFT로 나타내고 다시 나누며 수많은 사람들의 경험, 지식을 안전하고 
              풍부하게 나눌 수 있습니다. </p>
          </Grid>
        </Grid>

        <Grid item container xs={12} md={9} lg={8} justifyContent='space-between'  sx={{ marginTop: '60px'}}>
          <Grid item xs={12} md={8} lg={6}>
            <h2><span>서비스 소개</span></h2>
            <h3>NFT-I가 제공하는 무한한 가능성</h3>
            <p>NFT-I는 <span>나만의 NFT 포트폴리오를 만들고 공유할 수 있는 플랫폼</span>입니다. 블록체인 기술을 활용해 학생들의 <span>소유권과 저작권을 보호</span>합니다. 
              포트폴리오에 들어있는 내용에 따라서 나만의 NFT 캐릭터가 만들어지고 새로운 내용이 추가될 때마다 캐릭터는 조금씩 발전합니다. 
              변화하는 사용자의 NFT 캐릭터 디자인들을 통해 자신의 성장을 보다 직관적으로 경험하세요. </p>

          </Grid>
          <Grid item xs={12} md={4} lg={5}>
            <img
              src={aboutus_2}
              alt='aboutus_2'
              style={{ width: '100%' }} 
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container className='aboutus_container2' textAlign='center' sx={{ marginTop: '150px' }}>
        <Grid container justifyContent='center' alignItems='center' textAlign='center' spacing={2} sx={{ zIndex: '1' }}>
            <Grid item xs={12} md={9} lg={8}>
              <p> NFT-I는 NFT를 이용해서 나의 캐릭터 그리고 다른 학생들의 캐릭터를 거래해 서로의 포트폴리오 또한 공유할 수 있습니다. </p>
              <p> 자유롭게 포트폴리오를 관리 및 거래하고 다른 학생들의 포트폴리오를 둘러보면서 필요한 대외활동, 인턴십 등에 대한 정보를 얻어보세요. </p>
            </Grid>
          </Grid>
      </Grid>
      
        <img
            src={cloud}
            alt='cloud'
            style={{ position: 'absolute', bottom: '0%', left:'10%', width: '80%' }} 
          />
    </Grid>
    // <div className="background">
    //   <div className="banner">
    //     <h1>About us</h1>
    //     <div>안녕하세요! 저희는 NFT-I입니다</div>
    //     <br />
    //     <br />

    //     <div className='aboutus-cell'>
    //       <img
    //         src={ex}
    //         width='30%'
    //         alt='NFT example'
    //         style={{ marginRight: '10px' }} />
    //       <div style={{ width: '60%' }}>
    //         <div className='aboutus-question'>NFT(Non-Fungible Token)란?</div>
    //         <div>NFT는 블록체인 기술을 이용한 대체 불가능한 토큰입니다. NFT를 통해 변조가 불가능한 원본들을 안전하게 거래할 수 있습니다.</div>
    //       </div>
    //     </div>

    //     <br />
    //     <br />
    //     <br />

    //     <div className='aboutus-cell'>
    //       <div>
    //         <div className='aboutus-question'>NFT-I란?</div>

    //         <div>NFT-I는 나만의 NFT 포트폴리오를 만들고 공유할 수 있는 플랫폼입니다.
    //           블록체인 기술을 활용해 학생들의 소유권과 저작권을 보호합니다.
    //           포트폴리오에 들어있는 내용에 따라서 나만의 NFT 캐릭터가 만들어지고 새로운 내용이 추가 될때마다 캐릭터는 조금씩 발전합니다(크기, 악세사리 등)
    //           NFT-I는 NFT를 이용해서 나의 캐릭터 그리고 다른 학생들의 캐릭터를 거래해 서로의 포트폴리오 또한 공유할 수 있습니다.
    //           자유롭게 포트폴리오를 관리 및 거래하고 다른 학생들의 포트폴리오를 둘러보면서 필요한 대외활동, 인턴십, 등에 대한 정보를 얻을 수 있는 경험을 체험해보세요.
    //         </div>
    //       </div>
    //       <img
    //         src={logo}
    //         alt='NFT-I logo'
    //         style={{ marginLeft: '10px', backgroundColor: 'white' }} />
    //     </div>
    //   </div>
    // </div>
  )
};

export default Aboutusform;