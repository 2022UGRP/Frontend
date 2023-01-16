import * as React from 'react';
import { Grid, ImageList, ImageListItem, ImageListItemBar, IconButton, Input, InputAdornment } from '@mui/material';
import { Search, Info } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    secondary: { main: '#A4A4A4'},
    warning: { main: '#D34658'}
  },
});

const Marketmainform = (props) => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <section className='marketmain1'>
          <Grid container justifyContent='center' alignItems='center' spacing={2}>
            <Grid item xs={12} md={9} lg={8} textAlign='center'>
              <h1 style={{ fontSize: '38px', fontWeight: '800', color: '#2B2627' }}>
                Explore, collect and Sell NFTs
              </h1>
              <div style={{ marginBottom: '5px' }}> NFT-I에서 포트폴리오를 저작권 걱정없이 마음껏 거래해보세요! </div>
            </Grid>
            <Grid item xs={12} md={9} lg={8} textAlign='center'>
              <Input
                color='warning'
                style={{ width: '1000px' }} 
                id="standard-adornment-password Check"
                placeholder='search items'
                value={props.search}
                name='search'
                onChange={props.handleChangeSearch}
                startAdornment={
                    <InputAdornment position="start">
                        <IconButton><Search />
                        </IconButton>
                    </InputAdornment>
                  }
              />
            </Grid>
            <Grid item xs={12} md={9} lg={8} >
                  <ImageList sx={{ width: '100%', height: '100%' }} cols={4}>
                    {props.NFTDatas.map((item, index) => (
                      <ImageListItem key={index} onClick={()=>navigate(`/market/purchase/${item.NFT_id}/${item.CopyrightHolder_id}`)}>
                        <img
                          // style={{margin: '10px'}}
                          src={item.Image}
                          alt={item.title}
                          loading="lazy"
                        />
                        <ImageListItemBar
                          id={item.CopyrightHolder_id}
                          title={`${item.NFTtitle} by ${item.CopyrightHolderName}`}
                          subtitle={`${item.NFTprice} ETH`}
                          actionIcon={
                            <div>
                              <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${item.title}`}
                                type="button" 
                              >
                                <Info />
                              </IconButton>               
                            </div>
                          }
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
            </Grid>
          </Grid>
      </section>

  </ThemeProvider>
  );
}

export default Marketmainform;

