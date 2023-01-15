import React, { useEffect, useState } from 'react';
import { Mypagemainform } from '../../components/myPage';
import { useCookies } from 'react-cookie';
import Aftertopfixed from 'components/fixed/Aftertopfixed';
import Bottomfixed from 'components/fixed/Bottomfixed';
import axios from 'axios';

const MyPageMain = () => {
  const [cookies, setCookie,] = useCookies(['loginkey']);

  const [RequestsDatas, setRequestsDatas] = useState([])
  const [PurchasesDatas, setPurchasesDatas] = useState([])

  const loadList = async () => {
    await axios.get(`/api/nft/list/${cookies.loginkey}`)
      .then(res => {
        console.log(res.data);
        setRequestsDatas(res.data.requests);
        setPurchasesDatas(res.data.purchases);
      })
  };

  useEffect(() => {
    loadList();
  }, []);

  const handleApprove = async (requestAddress, tokenId, userId) => {
    const body = {
      owner: window.ethereum.selectedAddress,
      to: requestAddress,
      tokenId: tokenId
    }
    await axios.put('/api/nft/transfer', body)
      .then(async res => {
        console.log('transfer');
        console.log(res.data);
        const txHash = await window.ethereum.request({
          method: "eth_sendTransaction",
          params: [res.data.param],
        });

        console.log("https://goerli.etherscan.io/tx/" + txHash);

        await axios.put('/api/nft/transfer/success', {
          loginKey: cookies.loginkey,
          to: requestAddress,
          toId: userId,
          tokenId: tokenId
        })
          .then(res => {
            console.log(res.data);
          })
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  };

  return (
    <>
      <Aftertopfixed />
      <Mypagemainform
        RequestsDatas={RequestsDatas}
        PurchasesDatas={PurchasesDatas}
        handleApprove={handleApprove} />
      {/* <Bottomfixed /> */}
    </>
  )
}

export default MyPageMain;