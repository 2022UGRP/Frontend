import React from 'react'
import Mainform from '../../components/main/Mainform';
import Beforetopfixed from 'components/fixed/Beforetopfixed';

const BeforeMain = () => {
  return (
    <div className = "background">
      <Beforetopfixed/>
      <Mainform/>
    </div>
  )
};

export default BeforeMain;