import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Mypagedetailform } from 'components/myPage';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const MyPageDetail = () => {
  const navigate = useNavigate();
  const [cookies,] = useCookies(['loginkey', 'name', 'age', 'school', 'major', 'portfoliokey']);

  const [elementDatas, setElementDatas] = useState([{
    Activity: '',
    Contents: '',
  }]);

  const [selfintroDatas, setSelfintroDatas] = useState([{
    Title: '',
    Date: '',
    Contents: '',
  }]);

  const loadPortfolio = async () => {
    await axios({
      method: 'get',
      url: `/api/portfolio/${cookies.portfoliokey}`,
    })
      .then((response) => {
        console.log('response')
        console.log(response.data)
        setElementDatas(response.data.elementDatas);
        setSelfintroDatas(response.data.selfintroDatas);
      })
      .catch((Error) => {
        console.log(Error);
      })
  };

  const handleNFTMake = async () => {
    const body = {
      portfoliokey: cookies.portfoliokey
    };
    await axios.put('/api/nft/create', body)
      .then(res => {
        console.log(res.data)
        navigate('/mypage/NFTmint');
      })
      .catch(e => console.log(e));
  };

  useEffect(() => {
    if (cookies.portfoliokey) {
      loadPortfolio();
    } else {
      console.log('포트폴리오 없음');
    }
  }, []);

  return (
    <Mypagedetailform
      elementDatas={elementDatas}
      selfintroDatas={selfintroDatas}
      handleNFTMake={handleNFTMake}
    />
  )
}

export default MyPageDetail;