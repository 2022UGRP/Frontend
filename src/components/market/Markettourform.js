import * as React from 'react';
import { ImageList, ImageListItem, ImageListItemBar, IconButton, Input, InputAdornment } from '@mui/material';
import { Search, Info } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Markettourform = (props) => {
  const navigate = useNavigate();
  
  return (
  <div>
      <Input
          style={{ width: '500px' }} 
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
      <ImageList sx={{ width: '100%', height: '100%' }} cols={4}>
        {props.NFTDatas.map((item, index) => (
          <ImageListItem key={index} onClick={()=>navigate(`/market/purchase/${item.NFT_id}/${item.CopyrightHolder_id}`)}>
            <img
              src={item.Image}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              id={item.CopyrightHolder_id}
              title={item.NFTtitle}
              subtitle={item.NFTownerName}
              // price={item.NFTprice}
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
  </div>
  )
}

export default Markettourform;

