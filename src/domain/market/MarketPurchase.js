import { Marketpurchaseform, ResponsiveAppBar } from 'components/market';
import Aftertopfixed from 'components/fixed/Aftertopfixed.js';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MarketPurchase = () => {

  let { NFT_id } = useParams();
  let { CopyrightHolder_id } = useParams();

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

  // const loadNFT = async () => {
  //   await axios.get('api/nft/market1')
  //     .then(res => {
  //       console.log(res.data.nfts);
  //       setNFTDatas(res.data.nfts);
  //     })
  //     .catch(e => console.log(e));
  // }

  const loadNFT = async () => {
    await axios.get(`/api/nft/purchase/${CopyrightHolder_id}`)
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
      <Aftertopfixed/>
      <ResponsiveAppBar/>
      <Marketpurchaseform
        NFT_id={NFT_id}
        NFTDatas={NFTDatas}
      />
    </>
  )
}

export default MarketPurchase;