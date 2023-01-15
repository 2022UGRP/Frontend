import Aftertopfixed from 'components/fixed/Aftertopfixed';
import { MyPageNFTviewform } from 'components/myPage';
import React from 'react';
import { useParams } from 'react-router-dom';

const MyPageNFTview = () => {
  let { NFT_id } = useParams();

  return (
    <>
        <Aftertopfixed/>
        <MyPageNFTviewform/>
    </>
  )
};

export default MyPageNFTview;