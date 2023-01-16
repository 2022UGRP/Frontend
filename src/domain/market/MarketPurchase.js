import { Marketpurchaseform, ResponsiveAppBar } from 'components/market';
import Aftertopfixed from 'components/fixed/Aftertopfixed.js';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useSnackbar } from 'notistack';

const MarketPurchase = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [cookies, setCookie,] = useCookies(['loginkey']);

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
      NFTownerAddress: '',// NFT 소유한 사람 지갑 주소
    }
  ])

  const loadNFT = async () => {
    await axios.get(`/api/nft/purchase/${CopyrightHolder_id}`)
      .then(res => {
        console.log(res.data.nfts);
        setNFTDatas(res.data.nfts);
      })
      .catch(e => console.log(e));
  }

  useEffect(() => {
    loadNFT();
  }, []);

  // 구매 요청 함수
  const handleRequestPurchase = async (address) => {
    const body = {
      loginKey: cookies.loginkey,
      address: address,
      portfolioKey: NFT_id
    }
    await axios.put('/api/nft/purchase', body)
      .then(res => {
        console.log(res.data);
        enqueueSnackbar('NFT 구매를 요청하였습니다.', { variant: 'info' });
      })
      .catch(e => {
        console.log(e);
        enqueueSnackbar(`NFT 구매 요청에 실패하였습니다.`, { variant: 'error' });
      })
  };

  return (
    <>
      <Aftertopfixed />
      {/* <ResponsiveAppBar /> */}
      <Marketpurchaseform
        NFT_id={NFT_id}
        NFTDatas={NFTDatas}
        handleRequestPurchase={handleRequestPurchase}
      />
    </>
  )
}

export default MarketPurchase;