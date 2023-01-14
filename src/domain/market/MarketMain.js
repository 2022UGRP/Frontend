import { ResponsiveAppBar, Marketmainform } from 'components/market';
import React, {useState, useEffect} from 'react';
import Aftertopfixed from 'components/fixed/Aftertopfixed.js';
import axios from 'axios';

const MarketMain = () => {

  const [NFTDatas, setNFTDatas] = useState([
    {
      NFT_id: '',         // NFT id
      CopyrightHolder_id: '',        //NFT 저작권자 id
      CopyrightHolderName: '',       //NFT 저작권자 이름

      Image: '',          // NFT Image
      NFTprice: '',       // NFT price
      NFTtitle: '',       // NFT 제목
      NFTownerName: '',   // NFT 소유한 사람 이름
    }
  ])
  
  const loadNFT = async () => {
    await axios.get('/api/nft/market')
      .then(res => {
        console.log(res.data.nfts);
        setNFTDatas(res.data.nfts);
      })
      .catch(e => console.log(e));
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
    <Marketmainform
      NFTDatas={NFTDatas}
    />
    </>
  )
}

export default MarketMain;