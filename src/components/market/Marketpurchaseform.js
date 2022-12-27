import * as React from 'react';
import {
  BrowserRouter as Router, Link,
  useLocation
} from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';

function NftInfo(){
    const location=useLocation();
    const nftlist=location.state.nftlist;
    const ind=location.state.ind;
    const title=location.state.title;
    const author=location.state.author;
    const label=location.state.label;
    return(
    <div className="marketpurchaseform">
    <h3>
        Nft 정보<br/>
        Nft name:{title}<br/>
        Nft author:{author}<br/>
        Nft 기본정보: {label}
    </h3> 
    <ImageList sx={{ width: '100%', height: 200 }} cols={10} rows={1} >
      {nftlist.map((item,index) => (
        <ImageListItem key={index}>
          <img
            src={item.img}
            width = "20%"
            loading="lazy"
          />
          <ImageListItemBar
            title={item.profile}
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
    );
}   
export default NftInfo;