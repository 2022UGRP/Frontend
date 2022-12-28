import { Marketmainform, ResponsiveAppBar, TitlebarImageList1 } from 'components/market';
import React, {useState} from 'react';
import Aftertopfixed from 'components/fixed/Aftertopfixed.js';

const MarketMain = () => {

    const [market, setmarket] = useState({
        title: "유동헌 님의 NFT",
        subheader: "September 14, 2016",
        suminfo: "유동헌의 NFT"

    });
  
  return (
    <>
    {/* <Marketmainform
      market={market}
    /> */}
    <Aftertopfixed/>
    <div style={{
      height: '10px',
      width: '100vw',
      background: 'black'
    }} />
    {/* <ResponsiveAppBar/> */}
    <TitlebarImageList1/>
    </>
  )
}

export default MarketMain;