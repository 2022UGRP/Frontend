import React, { useEffect } from 'react'
import Mainform from '../../components/main/Mainform';
import Aftertopfixed from 'components/fixed/Aftertopfixed';

const AfterMain = () => {

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
    <div className = "background">
      <Aftertopfixed/>
      <Mainform/>
    </div>
  )
}

export default AfterMain