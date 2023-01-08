import { Marketmainform, ResponsiveAppBar, TitlebarImageList1 } from 'components/market';
import React, {useState, useEffect} from 'react';
import Aftertopfixed from 'components/fixed/Aftertopfixed.js';
import axios from 'axios';

const MarketMain = () => {

  const [NFTDatas, setNFTDatas] = useState([
    {
      NFTimg: '',     //NFT 발행시 생성
      NFTDate: '',    //NFT 발행시 생성
      NFTComment: '',    //NFT 발행시 달 수 있음 ex>삼성 최종합격 포트폴리오(Title?)
      NFTPrice: '',      //NFT 발행시 달 수 있음           
    }
  ])
  
  const loadNFT = async () => {
    await axios({
      method: 'get',
      url: `/api/portfolio/NFT`,
    })
      .then((response) => {
        console.log('response');
        console.log(response.data);
        setNFTDatas(response.data);

      })
      .catch((Error)=>{
        console.log(Error);
      })
  }
  
  useEffect(()=>{
      loadNFT();
  }, []);


  return (
    <>
    {/* <Marketmainform
      market={market}
    /> */}
    <Aftertopfixed/>
    {/* <div style={{
      height: '10px',
      width: '100vw',
      background: 'black'
    }} /> */}
    <ResponsiveAppBar/>
    <TitlebarImageList1/>
    </>
  )
}

export default MarketMain;