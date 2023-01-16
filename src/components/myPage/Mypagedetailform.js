import React from 'react';
import { Grid, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LoadingImage } from 'components/utils/Loading';
import loading from 'img/loading.gif';

const theme = createTheme({
  palette: {
    secondary: { main: '#A4A4A4' },
    warning: { main: '#D34658' }
  },
});

const Mypagedetailform = (props) => {
  const navigate = useNavigate();
  const [cookies,] = useCookies(['loginkey', 'name', 'age', 'school', 'major', 'portfoliokey', 'image']);

  return (
    <ThemeProvider theme={theme}>
      <section className='mypagedetail1'>
        <Grid container justifyContent='center' alignItems='center' spacing={2}>
          <Grid item xs={12} md={4} lg={3} textAlign='center'>
            <div style={{ textAlign: 'left' }}>
              <LoadingImage placeholderImg={loading} src={cookies.image} className="mainimg components" alt="lowlogo" />
            </div>
          </Grid>
          <Grid item className="profile" xs={12} sm={10} md={6} lg={5}>
            <h2 style={{ fontSize: '30px' }}>{cookies.name} 님</h2>
            <div>나이: {cookies.age}세 </div>
            <div>최종학력: {cookies.school} / {cookies.major} 전공</div>
            <div>최근 NFT 발행: 23.01.16</div>
            <br></br>
            <Button color='warning' variant="outlined" style={{ marginTop: '15px', height: '32px', width: '180px', fontWeight: '500', fontSize: '14px' }} onClick={() => { navigate('/mypage/NFTmint') }}>NFT 발행하기</Button>
            {/* <Button color='warning' variant="contained" style={{marginTop: '15px', height: '32px', width: '180px', fontWeight: '500', fontSize: '14px'}} onClick={() => { navigate('/mypage/detail') }}>포트폴리오 상세보기</Button> */}
          </Grid>
        </Grid>
      </section>

      <section className='mypagedetail2'>
        <Grid container justifyContent='center' alignItems='center' spacing={2}>
          <Grid item xs={12} md={10} lg={8} textAlign='left' display='flex' justifyContent='space-between' alignItems='center'>
            <h1 style={{ fontSize: '25px', fontWeight: '700' }}>포트폴리오</h1>
            <Button color='warning' variant="contained" style={{ height: '32px', width: '220px', fontWeight: '500', fontSize: '14px' }} onClick={() => { navigate('/mypage/portfolio') }}>포트폴리오 구성요소 추가</Button>
          </Grid>
          <Grid item className='mypagedetail2_container' xs={12} md={10} lg={8} display='flex'>
            <Grid item xs={12} md={4} lg={2.4}>
              <h3>능력 및 자격</h3>
              <div>
                {props.elementDatas.map((v,) => (
                  <div>
                    {(v.Activity === '언어능력') || (v.Activity === '자격증(민간, 국가공인)')
                      ? <><div style={{ fontSize: '14px', fontWeight: '700', marginBottom: '12px' }}>{v.Activity}</div>
                        <div style={{ fontSize: '14px', fontWeight: '300', marginBottom: '12px' }}>{v.Contents}</div>
                      </>
                      : null}
                  </div>
                ))}
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={2.4}>
              <h3>학력</h3>
              <div>
                {props.elementDatas.map((v,) => (
                  <div>
                    {(v.Activity === '성적 및 학점') || (v.Activity === '전공 및 학교')
                      ? <><div style={{ fontSize: '14px', fontWeight: '700', marginBottom: '12px' }}>{v.Activity}</div>
                        <div style={{ fontSize: '14px', fontWeight: '300', marginBottom: '12px' }}>{v.Contents}</div>
                      </>
                      : null}
                  </div>
                ))}
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={2.4}>
              <h3>경력</h3>
              <div>
                {props.elementDatas.map((v,) => (
                  <div>
                    {(v.Activity === '경력')
                      ? <><div style={{ fontSize: '14px', fontWeight: '700', marginBottom: '12px' }}>{v.Activity}</div>
                        <div style={{ fontSize: '14px', fontWeight: '300', marginBottom: '12px' }}>{v.Contents}</div>
                      </>
                      : null}
                  </div>
                ))}
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={2.4}>
              <h3>대외 활동</h3>
              <div>
                {props.elementDatas.map((v,) => (
                  <div>
                    {(v.Activity === '대외활동(대회, 공모전)')
                      ? <><div style={{ fontSize: '14px', fontWeight: '700', marginBottom: '12px' }}>{v.Activity}</div>
                        <div style={{ fontSize: '14px', fontWeight: '300', marginBottom: '12px' }}>{v.Contents}</div>
                      </>
                      : null}
                  </div>
                ))}
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={2.4}>
              <h3>개인 프로젝트</h3>
              <div>
                {props.elementDatas.map((v,) => (
                  <div>
                    {(v.Activity === '개인 프로젝트')
                      ? <><div style={{ fontSize: '14px', fontWeight: '700', marginBottom: '12px' }}>{v.Activity}</div>
                        <div style={{ fontSize: '14px', fontWeight: '300', marginBottom: '12px' }}>{v.Contents}</div>
                      </>
                      : null}
                  </div>
                ))}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </section>
      <section className='mypagedetail3'>
        <Grid container justifyContent='center' alignItems='center' spacing={2}>
          <Grid item xs={12} md={10} lg={8} textAlign='left' display='flex' justifyContent='space-between' alignItems='center'>
            <h1 style={{ fontSize: '25px', fontWeight: '700' }}>자기소개서</h1>
            <Button color='warning' variant="contained" style={{ height: '32px', width: '160px', fontWeight: '500', fontSize: '14px' }} onClick={() => { navigate('/mypage/selfintro') }}>자기소개서 등록</Button>
          </Grid>
          {props.selfintroDatas.map((v,) => {
            const date = new Date(v.Date);
            const y = date.getFullYear();
            const m = date.getMonth() + 1;
            const d = date.getDate();
            return (
              <Grid item className='mypagedetail3_container' xs={12} md={10} lg={8} style={{ marginLeft: '5px', marginRight: '5px' }}>
                <div>
                  <div>
                    <span style={{ fontSize: '14px', fontWeight: '700', marginRight: '30px' }}>{v.Title}합격</span>
                    <span style={{ fontSize: '14px', fontWeight: '700' }}> {y}.{m}.{d} 등록 </span>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: '300', marginTop: '12px' }}> {v.Contents} </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
        {/* 
      <div style={{ width: '100%' }}>
        <Box
          component="span"
          sx={{
            display: 'block',
            p: 1,
            m: 1,
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
            color: (theme) =>
              theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
            border: '1px solid',
            borderColor: (theme) =>
              theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
            borderRadius: 2,
            fontSize: '0.875rem',
            fontWeight: '700',
            alignItems: 'center',
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <div className="box">
            <div className="self-card-list">
              <div className="list_title">
                <h2>포트폴리오</h2>
                <Button variant="outlined" style={{ height: '35px' }} onClick={() => { navigate('/mypage/portfolio') }}>포트폴리오 구성요소 추가</Button>
              </div>
              {props.elementDatas.map((v,) => {
                return (
                  <div className="each-self-card">
                    <div>
                      <span className="card-pass">{v.Activity}</span>
                    </div>
                    <span className="card-pre">{v.Contents}</span>
                  </div>
                );
              })}
            </div>

            <div className="self-card-list">
              <div className="list_title">
                <h2>자기소개서</h2>
                <Button variant="outlined" style={{ height: '35px' }} onClick={() => { navigate('/mypage/selfintro') }}>자기소개서 등록</Button>
              </div>
              {props.selfintroDatas.map((v,) => {
                const date = new Date(v.Date);
                const y = date.getFullYear();
                const m = date.getMonth() + 1;
                const d = date.getDate();
                return (
                  <div className="each-self-card">
                    <div>
                      <span className="card-pass">{v.Title}합격</span>
                      <span className="card-date">{y}.{m}.{d} 등록</span>
                    </div>
                    <span className="card-pre">{v.Contents}</span>
                  </div>
                );
              })}
            </div>

          </div>
          <Button variant="outlined" style={{
            width: '70%',
            alignSelf: 'center',
            marginTop: 15,
          }} onClick={() => { navigate('/mypage/NFTmint'); }}>NFT 발행</Button>
        </Box>
      </div> */}




      </section>

    </ThemeProvider>





  )
}

export default Mypagedetailform;