import React from 'react';
import Aftertopfixed from 'components/fixed/Aftertopfixed';
import {Box, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const MypageNFTmintform = (props) => {
  const [cookies,] = useCookies(['loginkey', 'name', 'age', 'school', 'major', 'portfoliokey', 'image']);
  const navigate = useNavigate();

  return (
    <div className = "background">
        <Aftertopfixed/>
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
                <img src={props.image} className="mainimg components" alt="lowlogo"/>
                <h2 className="components">{cookies.name}</h2>
            </div>

            <div>
                {props.description}
            </div>

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


