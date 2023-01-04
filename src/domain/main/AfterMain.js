import React, { useEffect } from 'react'
import Aftermainform from '../../components/main/Aftermainform'

function AfterMain() {

  const connectWallet = async () => {
    if (window.ethereum) {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(addressArray[0]);
    } else {
      console.log('no wallet')
    }
  }

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <Aftermainform />
  )
}

export default AfterMain