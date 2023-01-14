import React, { useEffect, useState } from 'react';
import { MypageNFTmintform } from '../../components/myPage';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const MyPageNFTmint = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [cookies,] = useCookies(['loginkey', 'name', 'age', 'school', 'major', 'portfoliokey', 'image']);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(cookies.image);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);

  const handleChangeNFTtitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeNFTprice = (event) => {
    setPrice(event.target.value);
  };

  const handleClickNFTMint = async () => {
    console.log('click')
    const body = {
      address: window.ethereum.selectedAddress,
      title: title,
      price: price,
    };
    console.log(window.ethereum.selectedAddress);
    await axios.put(`/api/nft/mint/${cookies.portfoliokey}`, body)
      .then(async res => {
        const txHash = await window.ethereum.request({
          method: "eth_sendTransaction",
          params: [res.data.param],
        });

        console.log("https://goerli.etherscan.io/tx/" + txHash);

        await axios.put(`/api/nft/mint/success/${cookies.portfoliokey}`, {
          address: window.ethereum.selectedAddress,
          name: cookies.name,
          title: title,
          result: res.data.result,
          tokenId: res.data.tokenId,
          price: price,
        })
          .then(res => {
            console.log(res.data);
            enqueueSnackbar('NFT 발행에 성공하였습니다', { variant: 'info' });
            navigate('/mypage/detail');
          })
          .catch(e => {
            console.log(e)
            enqueueSnackbar(`NFT 발행에 실패하였습니다`, { variant: 'error' });
          });

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
      title={title}
      price={price}
      description={description}
      handleClickNFTMint={handleClickNFTMint}
      handleChangeNFTtitle={handleChangeNFTtitle}
      handleChangeNFTprice={handleChangeNFTprice}
    />
  )
};

export default MyPageNFTmint;

