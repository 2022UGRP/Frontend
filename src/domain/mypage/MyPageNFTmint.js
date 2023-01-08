import React, { useEffect, useState } from 'react';
import { MypageNFTmintform } from '../../components/myPage';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const MyPageNFTmint = () => {
  const [cookies,] = useCookies(['loginkey', 'name', 'age', 'school', 'major', 'portfoliokey', 'image']);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(cookies.image);

  const handleClickNFTMint = async () => {
    console.log('click')
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

  const getNFTInfo = async () => {
    await axios.get(`/api/nft/info/${cookies.portfoliokey}`)
      .then(res => {
        setDescription(res.data.description);
        setImage(res.data.image);
      })
      .catch(e => console.log(e))
  };
  
  useEffect(() => {
    getNFTInfo();
  }, []);

  return (
    <MypageNFTmintform
      image={image}
      description={description}
      handleClickNFTMint={handleClickNFTMint} />
  )
};

export default MyPageNFTmint;