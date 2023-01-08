import React from 'react';
import { MypageNFTmintform } from '../../components/myPage';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const MyPageNFTmint = () => {
  const [cookies,] = useCookies(['loginkey', 'name', 'age', 'school', 'major', 'portfoliokey']);

  const handleClickNFTMake = async () => {
    const body = {
      address: window.ethereum.selectedAddress
    };
    console.log(window.ethereum.selectedAddress);
    await axios.put(`/api/nft/mint/${cookies.portfoliokey}`, body)
      .then(async res => {
        const txHash = await window.ethereum.request({
          method: "eth_sendTransaction",
          params: [res.data.param],
        });

        console.log("https://goerli.etherscan.io/tx/" + txHash);
      })
      .catch(e => console.log(e));
  };

  return (
    <MypageNFTmintform
    handleClickNFTMake={handleClickNFTMake}
    />
  )
};

export default MyPageNFTmint;