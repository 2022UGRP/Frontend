import * as React from 'react';
import { ImageList, ImageListItem, ImageListItemBar, IconButton, Input, InputAdornment } from '@mui/material';
import { Search, Info } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {
  BrowserRouter as Router, Link,
  useLocation
} from "react-router-dom";
import ListSubheader from '@mui/material/ListSubheader';

const Marketpurchaseform = (props) => {
    const navigate=useNavigate();
    
    // const nftlist=location.state.nftlist;
    // const ind=location.state.ind;
    // const title=location.state.title;
    // const author=location.state.author;
    // const label=location.state.label;
    
    return(
    <div>
      <div>
        {props.NFTDatas.map((item, index) => (
          <div>
            {(item.NFT_id === props.NFT_id) ? 
              <>
                <h2> Copyright holder : {item.CopyrightHolderName}</h2>
                <h2> NFTtitle : {item.NFTtitle}</h2>
                <h2> NFTprice : {item.NFTprice}</h2>  
              </>
            : null}
          </div>
        ))}
      </div>
      <ImageList sx={{ width: '100%', height: '100%' }} cols={4}>
        {props.NFTDatas.map((item, index) => (
          <div>
          <ImageListItem key={index} onClick={()=>navigate(`/market/purchase/${item.NFT_id}/${item.CopyrightHolder_id}`)}>
            <img
              src={item.Image}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
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
          <h3>NFTOwner: {item.NFTownerName}</h3>
          </div>
        ))}
      </ImageList>



    </div>
    // <div className="marketpurchaseform">
    // <h3>
    //     Nft 정보<br/>
    //     Nft name:{title}<br/>
    //     Nft author:{author}<br/>
    //     Nft 기본정보: {label}
    // </h3> 
    // <ImageList sx={{ width: '100%', height: 200 }} cols={10} rows={1} >
    //   {nftlist.map((item,index) => (
    //     <ImageListItem key={index}>
    //       <img
    //         src={item.img}
    //         width = "20%"
    //         loading="lazy"
    //       />
    //       <ImageListItemBar
    //         title={item.profile}
    //       />
    //     </ImageListItem>
    //   ))}
    // </ImageList>
    // </div>
    );
}   
export default Marketpurchaseform;