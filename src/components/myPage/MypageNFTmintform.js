import React from 'react';
import Aftertopfixed from 'components/fixed/Aftertopfixed';
import { Box, Button, TextField, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const MypageNFTmintform = (props) => {
  const [cookies,] = useCookies(['loginkey', 'name', 'age', 'school', 'major', 'portfoliokey', 'image']);
  const navigate = useNavigate();

  return (
    <div className="background">
      <Aftertopfixed />
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
    </div>
  )
};

export default MypageNFTmintform;



