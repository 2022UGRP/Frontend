import React, {useState, useEffect} from 'react'
import { Grid, Button, Checkbox, TextField } from '@mui/material'
import LogoProfileBack from './LogoProfileBack'
import MultipleChoiceQuestion from './MultipleChoiceQuestion'
import EssayQuestion from './EssayQuestion'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CheckBox from './CheckBox'

const theme = createTheme({
  palette: {
    secondary: { main: '#A4A4A4'},
    warning: { main: '#D34658'}
  },
});

const Mypageportfolioform = (props) => {

    return (
      <ThemeProvider theme={theme}>
      <section className='mypageportfolio1'>
          <Grid container justifyContent='center' alignItems='center' spacing={2}>
            <Grid item xs={12} md={9} lg={8}>
              <h1 style={{ fontSize: '30px', fontWeight: '800', color: '#2B2627' }}>
                포트폴리오 구성요소 추가
              </h1>
              <div style={{ marginBottom: '5px' }}> 포트폴리오 구성요소를 분류된 역량기준에 따라 추가해보세요! </div>
            </Grid>
            <Grid item container xs={12} md={9} lg={8}>
              <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#2B2627', marginTop: '20px' }}>
                당신의 활동이 여기에 속합니다!
              </h2>
              <div className='mypageportfolio1_container' style={{ display: 'flex', flexDirection: 'row'}}>
                {Object.keys(props.items).map((key, index) => 
                  <Grid item xs={12} md={4} lg={4} key={key} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      {index + 1}. {key}
                    </div>
                    {props.items[key].map((item, index) => 
                      <div key={index}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <CheckBox checkedItemHandler={props.checkedItemHandler} isChecked={props.isChecked} item={item}/>
                      </div>
                    )}
                  </Grid>
                )}
              </div>
            </Grid>
            <Grid item container xs={12} md={9} lg={8} style={{ display: 'flex', flexDirection: 'column'}}>
              <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#2B2627', marginTop: '0px' }}>
                활동에 대한 세부 사항들을 기록해주세요!
              </h2>
              <EssayQuestion 
                pid='self_intro'
                pname='contents'
                question="상세설명을 입력하세요"
                changeEssayHandler={props.changeEssayHandler}/>
              {/* <TextField
                color='warning'
                required
                multiline
                fullWidth
                rows={4}
                id='self_intro'
                name='contents'
                label="상세설명을 입력하세요"
                variant="filled"
                onChange={props.changeEssayHandler}
              /> */}
            </Grid>
            <Grid item container xs={12} md={9} lg={8} justifyContent='right'>
              <Button color='warning' variant="contained" style={{marginTop: '15px', height: '32px', width: '180px', fontWeight: '500', fontSize: '14px'}} onClick={props.registerHandler} disabled={props.activate}>포트폴리오 등록</Button>
            </Grid>
          </Grid>
      </section>


    {/* <div style={{border: '1px solid', marginLeft: '5vw', marginRight: '5vw'}}>
      <p>
      포트폴리오 구성 요th 관리
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
          포트폴리오 등록
          </Button>
        </div>
      </div>
    </div> */}
  </ThemeProvider>
  )
}

export default Mypageportfolioform;