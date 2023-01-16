import React from 'react'
import LogoProfileBack from './LogoProfileBack'
import EssayQuestion from './EssayQuestion'
import { Grid, Button } from '@mui/material'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    secondary: { main: '#A4A4A4'},
    warning: { main: '#D34658'}
  },
});

const Mypageselfintroform = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <section className='mypageportfolio1'>
          <Grid container justifyContent='center' alignItems='center' spacing={2}>
            <Grid item xs={12} md={9} lg={8}>
              <h1 style={{ fontSize: '30px', fontWeight: '800', color: '#2B2627' }}>
                자기소개서 등록
              </h1>
              <div style={{ marginBottom: '5px' }}> 입시/취업에 성공한 자기소개서를 등록해보세요! </div>
            </Grid>
            <Grid item container xs={12} md={9} lg={8} style={{ display: 'flex', flexDirection: 'column'}}>
              <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#2B2627', marginTop: '0px' }}>
                어떤 곳에 합격한 자기소개서인가요?
              </h2>
              <EssayQuestion 
                pname='place'
                question="어디에 합격한 자기소개서 글인가요?"
                changeEssayHandler={props.changeEssayHandler}/>
            </Grid>
            <Grid item container xs={12} md={9} lg={8} style={{ display: 'flex', flexDirection: 'column'}}>
              <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#2B2627', marginTop: '0px' }}>
                자기소개서 본문을 기록해주세요!
              </h2>
              <EssayQuestion 
                pname='selfintro'
                question="자기소개서 입력"
                changeEssayHandler={props.changeEssayHandler}/>
            </Grid>
            <Grid item container xs={12} md={9} lg={8} style={{ display: 'flex', flexDirection: 'column'}}>
              <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#2B2627', marginTop: '0px' }}>
                합격 날짜를 선택해주세요!
              </h2>
              <DatePicker 
                dateFormat="yyyy년 MM월 dd일"
                selected = {props.startdate} 
                onChange={date => props.setStartDate(date)}
                selectsStart
                startDate={props.startdate}
                endDate={props.enddate}
              />
            </Grid>
            <Grid item container xs={12} md={9} lg={8} justifyContent='right'>
              <Button color='warning' variant="contained" style={{marginTop: '15px', height: '32px', width: '180px', fontWeight: '500', fontSize: '14px'}} onClick={props.registerHandler} disabled={props.activate}>자기소개서 등록</Button>
            </Grid>
          </Grid>
      </section>

{/* 

    <div>
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
    </div> */}
    </ThemeProvider>
  );
}

export default Mypageselfintroform;