import { Marketmainform } from 'components/market';
import React, {useState} from 'react';

const MarketMain = () => {

    const [market, setmarket] = useState({
        title: "유동헌 님의 NFT",
        subheader: "September 14, 2016",
        suminfo: "유동헌의 NFT"

    });
  
  return (
    <Marketmainform
      market={market}
    />
  )
}

export default MarketMain;