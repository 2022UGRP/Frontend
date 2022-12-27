import React from 'react'
import { Button } from '@mui/material'
import LogoProfileBack from './LogoProfileBack'
import MultipleChoiceQuestion from './MultipleChoiceQuestion'
import EssayQuestion from './EssayQuestion'
import Aftertopfixed from 'components/fixed/Aftertopfixed';
import Bottomfixed from 'components/fixed/Bottomfixed';

const Mypageportfolioform = (props) => {
    return (
    <>
    <Aftertopfixed/>
    <div style={{border: '1px solid', marginLeft: '5vw', marginRight: '5vw'}}>
      <p>
      포트폴리오 구성 요성 관리
      </p>
      <div>
        <MultipleChoiceQuestion 
          question="당신의 활동이 여기에 속합니다!"
          items={props.items}
          isChecked={props.isChecked}
          checkedItemHandler={props.checkedItemHandler}/>

        <EssayQuestion 
          pid='self_intro'
          pname='contents'
          question="상세설명을 입력하세요"
          changeEssayHandler={props.changeEssayHandler}/>

        <div style={{textAlign: 'center', margin: 'auto'}}>
          <Button variant='outlined' onClick={props.registerHandler} disabled={props.activate}>
          자기소개서 등록
          </Button>
        </div>
      </div>
    </div>
    <Bottomfixed/>
  </>
  )
}

export default Mypageportfolioform