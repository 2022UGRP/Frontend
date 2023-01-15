import React from 'react';
import { Grid, Box, Button, TextField, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { LoadingImage } from 'components/utils/Loading';
import loading from 'img/loading.gif';

const theme = createTheme({
  palette: {
    secondary: { main: '#A4A4A4' },
    warning: { main: '#D34658' }
  },
});

const MypageNFTmintform = (props) => {
  const [cookies,] = useCookies(['loginkey', 'name', 'age', 'school', 'major', 'portfoliokey', 'image']);
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <section className='mypagenftmint'>
        <Grid container justifyContent='center' alignItems='center' spacing={2}>
          <Grid item xs={12} md={9} lg={8}>
            <h1 style={{ fontSize: '36px', fontWeight: '800', color: '#2B2627' }}>
              {cookies.name}님의 NFT를 생성합니다.
            </h1>
            <div style={{ marginBottom: '5px' }}>아래 이미지는 기존 이미지이며, NFT 발행을 누르면 포트폴리오를 바탕으로 minting된 NFT를 얻을 수 있습니다!</div>
          </Grid>
          <Grid item container xs={12} justifyContent='center'>
            <Grid item xs={12} md={4} lg={4} textAlign='center'>
              <div style={{ textAlign: 'left', position: 'relative' }}>
                <LoadingImage placeholderImg={loading} style={{ width: '80%', opacity: '50%' }} src={cookies.image} className="mainimg components" alt="lowlogo" />
                <QuestionMarkIcon color='warning' style={{ opacity: '90%', width: '80%', height: '80%', position: 'absolute', top: '10%', left: '0%' }} />
              </div>
            </Grid>
            <Grid item className="profile" xs={12} md={5} lg={4}>
              <div>
                <h3 style={{ fontSize: '20px' }}> Copyright holder </h3>
                <input
                  type='text'
                  name='name'
                  value={cookies.name}

                />
              </div>
              <div>
                <h3 style={{ fontSize: '20px' }}> NFT Title </h3>
                <input
                  type='text'
                  name='title'
                  placeholder='발행될 NFT 이름을 입력해주세요'
                  value={props.title}
                  onChange={props.handleChangeNFTtitle}
                />
              </div>
              <div style={{ position: 'relative' }}>
                <h3 style={{ fontSize: '20px' }}> NFT Price </h3>
                <input
                  type='number'
                  name='price'
                  placeholder='발행될 NFT 가격을 책정해주세요'
                  value={props.price}
                  onChange={props.handleChangeNFTprice}
                />
                <div style={{ position: 'absolute', bottom: '28%', right: '8%' }}>ETH</div>
              </div>
              <Button color='warning' variant="contained" style={{ marginTop: '15px', height: '32px', width: '120px', fontWeight: '500', fontSize: '14px' }} onClick={props.handleClickNFTMint}>NFT 발행</Button>
            </Grid>
          </Grid>
        </Grid>
      </section>


      {/* <div>
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
            <img src={props.image} className="mainimg components" alt="lowlogo" />
          </div>
          <div className="NFTbox">
            <div className="NFTdetail">
              <h2 className="components"> NFT Owner : {cookies.name}</h2>
            </div>
            <div className="NFTdetail">
              <h2> NFT Title : </h2>
              <TextField 
                style={{ width: '500px' }} 
                label={'발행될 NFT 이름을 입력해주세요'} 
                id="margin-dense" 
                margin="dense" 
                value={props.title}
                onChange={props.handleChangeNFTtitle}
              />
            </div>
            <div className="NFTdetail">
              <h2> NFT Price : </h2>
              <TextField 
                style={{ width: '500px' }} 
                label={'발행될 NFT 가격을 입력해주세요'} 
                id="margin-dense" 
                margin="dense" 
                value={props.price}
                onChange={props.handleChangeNFTprice}
                InputProps={{
                  endAdornment: <InputAdornment position="end">ETH</InputAdornment>,
                }}
              />
            </div>
          </div>

          <div>
            {props.description}
          </div>
          <br/>
          <Button variant="outlined" style={{
            width: '70%',
            alignSelf: 'center',
            marginTop: 15,
          }} onClick={props.handleClickNFTMint}>NFT 발행</Button>
        </Box>
      </div>
    </div> */}

    </ThemeProvider>
  )
};

export default MypageNFTmintform;



