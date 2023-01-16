import Aftertopfixed from 'components/fixed/Aftertopfixed';
import { MyPageNFTviewform, Mypagedetailform } from 'components/myPage';
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';


const MyPageNFTview = () => {
  let { NFT_id } = useParams();

  const navigate = useNavigate();
  const [cookies, setCookie,] = useCookies(['loginkey', 'name', 'age', 'school', 'major', 'portfoliokey', 'image']);

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
      url: `/api/portfolio/${NFT_id}`,
    })
      .then((res) => {
        console.log('res')
        console.log(res.data)
        setElementDatas(res.data.elementDatas);
        setSelfintroDatas(res.data.selfintroDatas);
        setCookie('image', res.data.image, { path: '/' });
      })
      .catch((Error) => {
        console.log(Error);
      })
  };

  // useFocusEffect(
  //   useCallback(() => {
  //     console.log('focus');
  //     if (cookies.portfoliokey) {
  //       loadPortfolio();
  //     }
  //   }, []));

  useEffect(() => {
    if (cookies.portfoliokey) {
      loadPortfolio();
    }
  }, []);

  return (
    <>
        <Aftertopfixed/>
        <MyPageNFTviewform
            elementDatas={elementDatas}
            selfintroDatas={selfintroDatas}
        />
    </>
  )
};

export default MyPageNFTview;