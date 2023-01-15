import React, {useState} from 'react';
import { Mypagemainform } from '../../components/myPage';
import { useCookies } from 'react-cookie';
import Aftertopfixed from 'components/fixed/Aftertopfixed';
import Bottomfixed from 'components/fixed/Bottomfixed';

const MyPageMain = () => {
  const [cookies, setCookie,] = useCookies(['loginkey']);
  
  const [RequestsDatas, setRequestsDatas] = useState([
    {
      Token_id: '',
      Wallet_address: '',
      NFT_id: '',
      RequestDate: '2022-07-21',
      State: 1                       //1이면 승인해야함, 2이면 승인완료한 것
    }
  ])

  const [PurchasesDatas, setPurchasesDatas] = useState([
    {
      Token_id: '',
      Wallet_address: '',
      NFT_id: '',
      PurchaseDate: '2022-07-21',
      State: 1                  //1이면 승인요청보냈는데 수락을 못받은것, 2이면 구매완료한것
    },
    {
      Token_id: '',
      Wallet_address: '',
      NFT_id: '123',
      PurchaseDate: '2022-07-21',
      State: 2                  //1이면 승인요청보냈는데 수락을 못받은것, 2이면 구매완료한것
    }
  ])
  
// 고쳐서 쓰세용!!

  // const loadRequest = async () => {
  //   await axios.get('/api/user/----')
  //     .then(res => {
  //       console.log(res.data.----);
  //       setNFTDatas(res.data.----);
  //     })
  //     .catch(e => console.log(e));
  // }

  // const loadPurchase = async () => {
  //   await axios.get('/api/user/----')
  //     .then(res => {
  //       console.log(res.data.----);
  //       setNFTDatas(res.data.----);
  //     })
  //     .catch(e => console.log(e));
  // }
  
  // useEffect(()=>{
  //     loadNFT();
  //     loadPurchase();
  // }, []);

  return (
    <>
      <Aftertopfixed />
      <Mypagemainform
        RequestsDatas={RequestsDatas}
        PurchasesDatas={PurchasesDatas}
      />
      {/* <Bottomfixed /> */}
    </>
  )
}

export default MyPageMain;