import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Mypagedetailform } from 'components/myPage';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Aftertopfixed from 'components/fixed/Aftertopfixed';

const MyPageDetail = () => {
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
      url: `/api/portfolio/${cookies.portfoliokey}`,
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
      <Mypagedetailform
        elementDatas={elementDatas}
        selfintroDatas={selfintroDatas}
      />
      {/* <Bottomfixed/> */}
    </>
  )
}

export default MyPageDetail;