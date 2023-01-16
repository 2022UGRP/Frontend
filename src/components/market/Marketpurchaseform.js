import * as React from 'react';
import { Button, Grid, ImageList, ImageListItem, ImageListItemBar, IconButton, Input, InputAdornment } from '@mui/material';
import { Search, Info } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {
  BrowserRouter as Router, Link,
  useLocation
} from "react-router-dom";
import ListSubheader from '@mui/material/ListSubheader';
import { LoadingImage } from 'components/utils/Loading';
import loading from 'img/loading.gif';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    secondary: { main: '#A4A4A4'},
    warning: { main: '#D34658'}
  },
});

const Marketpurchaseform = (props) => {
    const navigate=useNavigate();
    
    return(
      <ThemeProvider theme={theme}>
        <section>
        {props.NFTDatas.map((item, index) => (
              <Grid className='marketpurchase1'>
                {(item.NFT_id === props.NFT_id) ? 
                <Grid container justifyContent='center' alignItems='center' spacing={2}>
                      <Grid item xs={12} md={4} lg={3} textAlign='center'>
                          <div style={{textAlign: 'left'}}>
                            {/* <img className='mainimg'
                              src={item.Image}
                              alt={item.title}
                              loading="lazy"
                            /> */}
                            <LoadingImage className='mainimg'
                              style={{width: '80%'}}
                              placeholderImg={loading}
                              src={item.Image}
                              alt={item.title}
                              loading="lazy"
                            />
                          </div>
                      </Grid>
                      <Grid item  className="profile marketinfo" xs={12} sm={10} md={6} lg={5}> 
                          <h2 style={{fontSize: '36px', fontWeight: '800', color: 'rgb(43, 38, 39)'}}> NFTtitle : {item.NFTtitle} </h2>
                          <div> Copyright holder : {item.CopyrightHolderName} </div>
                          <div> Owner : {item.NFTownerName} </div>
                          <div> NFTprice : {item.NFTprice} ETH </div>
                          <br></br>
                          <Button color='warning' variant="contained" style={{marginTop: '15px', height: '32px', width: '240px', fontWeight: '500', fontSize: '14px'}}  onClick={(e)=>{props.handleRequestPurchase(item.NFTownerAddress)}}>NFT 및 포트폴리오 구매하기</Button>
                      </Grid>
                  </Grid>
                  : null}
              </Grid>
          ))}

          <Grid container justifyContent='center' alignItems='center' spacing={2}>
            <Grid item xs={12} md={9} lg={8}>
              <h1 style={{ fontSize: '30px', fontWeight: '800', color: '#2B2627' }}>
                해당 저작권자의 이전 포트폴리오 모아보기
              </h1>
              <div style={{ marginBottom: '5px' }}> NFT를 클릭하여 당시의 포트폴리오로 이동해보세요! </div>
            </Grid>

            <Grid item xs={12} md={9} lg={8} >
              <ImageList sx={{ width: '100%', height: '100%' }} cols={4}>
                {props.NFTDatas.map((item, index) => (
                  <div>
                  {(item.NFT_id === props.NFT_id) ?
                  <ImageListItem key={index} onClick={()=>navigate(`/market/purchase/${item.NFT_id}/${item.CopyrightHolder_id}`)}>
                    <img
                      // style={{margin: '10px'}}
                      src={item.Image}
                      alt={item.title}
                      loading="lazy"
                    />
                    {/* <LoadingImage
                      // style={{margin: '10px'}}
                      placeholderImg={loading}
                      src={item.Image}
                      alt={item.title}
                      loading="lazy"
                    /> */}
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
                  : 
                  <ImageListItem sx={{opacity: '40%'}} key={index} onClick={()=>navigate(`/market/purchase/${item.NFT_id}/${item.CopyrightHolder_id}`)}>
                  <img
                    // style={{margin: '10px'}}
                    src={item.Image}
                    alt={item.title}
                    loading="lazy"
                  />
                  {/* <LoadingImage
                    // style={{margin: '10px'}}
                    placeholderImg={loading}
                    src={item.Image}
                    alt={item.title}
                    loading="lazy"
                  /> */}
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
                  }
                  <h3>NFTOwner: {item.NFTownerName}</h3>
                  </div>
                ))}
              </ImageList>
            </Grid>
          </Grid>
      </section>
    </ThemeProvider>
    );
}   
export default Marketpurchaseform;