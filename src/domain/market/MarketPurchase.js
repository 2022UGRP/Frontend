import { Marketpurchaseform, ResponsiveAppBar } from 'components/market';
import Aftertopfixed from 'components/fixed/Aftertopfixed.js';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MarketPurchase = () => {
  // const { NFT_id } = useParams();
  // const { Owner_id } = useParams();

  const [NFTDatas, setNFTDatas] = useState([
    {
      NFT_id: '',         // NFT id
      Owner_id: '',       // NFT Owner id
      
      Image: '',          // NFT Image
      NFTprice: '',       // NFT price
      NFTtitle: '',       // NFT 제목
      NFTownerName: '',   // NFT 만든 사람 이름
    }
  ])

  const loadNFT = async () => {
    await axios.get('api/nft/market1')
      .then(res => {
        console.log(res.data.nfts);
        setNFTDatas(res.data.nfts);
      })
      .catch(e => console.log(e));
  }

  // const loadNFT = async () => {
  //   await axios.get(`api/nft/purchase/${Owner_id}`)
  //     .then(res => {
  //       console.log(res.data.nfts);
  //       setNFTDatas(res.data.nfts);
  //     })
  //     .catch(e => console.log(e));
  // }
  // console.log('end');

  useEffect(()=>{
    loadNFT();
  }, []);

  return (
    <>
      <Aftertopfixed/>
      <ResponsiveAppBar/>
      <Marketpurchaseform

      />
    </>
  )
}

export default MarketPurchase;