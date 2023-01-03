import React from 'react'
import LogoProfileBack from './LogoProfileBack'
import EssayQuestion from './EssayQuestion'
import { Button } from '@mui/material'
import Aftertopfixed from 'components/fixed/Aftertopfixed';
import Bottomfixed from 'components/fixed/Bottomfixed';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Mypageselfintroform = (props) => {
  return (
    <div>
      <Aftertopfixed/>
      <div style={{border: '1px solid', marginLeft: '5vw', marginRight: '5vw'}}>
        <p>
        자기소개서 등록
        </p>
        <div>
          
          <EssayQuestion 
            pname='place'
            question="어디에 합격한 자기소개서 글인가요?"
            changeEssayHandler={props.changeEssayHandler}/>
            <h2>합격 날짜를 선택해 주세요</h2>
            <DatePicker 
                dateFormat="yyyy년 MM월 dd일"
                selected = {props.startdate} 
                onChange={date => props.setStartDate(date)}
                selectsStart
                startDate={props.startdate}
                endDate={props.enddate}
            />
          <EssayQuestion 
            pname='selfintro'
            question="자기소개서 입력"
            changeEssayHandler={props.changeEssayHandler}/>
            
          <div style={{textAlign: 'center', margin: 'auto'}}>
            <Button variant='outlined' onClick={props.registerHandler} disabled={props.activate}>
            자기소개서 등록
            </Button>
          </div>
        </div>
      </div>
      {/* <Bottomfixed/> */}
    </div>
  );
}

export default Mypageselfintroform;