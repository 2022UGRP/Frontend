import * as React from 'react';
import { ImageList, ImageListItem, ImageListItemBar, IconButton, Input, InputAdornment } from '@mui/material';
import { Search, Info } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import img1 from 'img/1.png';
import img2 from 'img/2.png';

const Marketmainform = (props) => {
  const navigate=useNavigate();
  const move = (ind) => {
    navigate(`/market/elements/${itemData[ind].title}`,{
      state:{
        number: 1234,
        nftlist: itemData[ind].nftlist,
        title: itemData[ind].title,
        author: itemData[ind].author,
        label: itemData[ind].label
      }
    })
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event, i) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    move(i);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

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
      <ImageList sx={{ width: '100%', height: '100%' }} cols={4}>
        {itemData.map((item, index) => (
          <ImageListItem key={item.ind} onClick={(e) => handleClick(e, index)}>
            <img
              src={item.nftlist[0].img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <div>
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                    aria-describedby={id} type="button" 
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


  );
}

export default Marketmainform;

const itemData = [
  {
    ind: 1,
    title: 'Breakfast',
    author: '@bkristastucchio',
    label: "안녕하세요",
    nftlist:[
      {
        img:img1,
        profile:"2022.06.10",
      },
      {
        img:img2,
        profile:"2020.05.07",
      },
    ],
  },
  {
    ind: 2,
    title: 'Burger',
    author: '@rollelflex_graphy726',
    label: "안녕하세요",
    nftlist:[
      {
        img:img1,
        profile:"2022.06.10",
      },
      {
        img:img2,
        profile:"2020.05.07",
      },
    ],
  },
  {
    ind: 3,
    title: 'Camera',
    author: '@helloimnik',
    label: "안녕하세요",
    nftlist:[
      {
        img:img1,
        profile:"2022.06.10",
      },
      {
        img:img2,
        profile:"2020.05.07",
      },
    ],
  },
  {
    ind: 4,
    title: 'Coffee',
    author: '@nolanissac',
    label: "안녕하세요",
    nftlist:[
      {
        img:img1,
        profile:"2022.06.10",
      },
      {
        img:img2,
        profile:"2020.05.07",
      },
    ],
  },
  {
    ind: 5,
    title: 'Hats',
    author: '@hjrc33',
    label: "안녕하세요",
    nftlist:[
      {
        img:img1,
        profile:"2022.06.10",
      },
      {
        img:img2,
        profile:"2020.05.07",
      },
    ],
  },
  {
    ind: 6,
    title: 'Honey',
    author: '@arwinneil',
    featured: true,
    label: "안녕하세요",
    nftlist:[
      {
        img:img1,
        profile:"2022.06.10",
      },
      {
        img:img2,
        profile:"2020.05.07",
      },
    ],
  },
  {
    ind: 7,
    title: 'Basketball',
    author: '@tjdragotta',
    label: "안녕하세요",
    nftlist:[
      {
        img:img1,
        profile:"2022.06.10",
      },
      {
        img:img2,
        profile:"2020.05.07",
      },
    ],
  },
  {
    ind: 8,
    title: 'Fern',
    author: '@katie_wasserman',
    label: "안녕하세요",
    nftlist:[
      {
        img:img1,
        profile:"2022.06.10",
      },
      {
        img:img2,
        profile:"2020.05.07",
      },
    ],
  },
  {
    ind: 9,
    title: 'Mushrooms',
    author: '@silverdalex',
    label: "안녕하세요",
    nftlist:[
      {
        img:img1,
        profile:"2022.06.10",
      },
      {
        img:img2,
        profile:"2020.05.07",
      },
    ],
  },
  {
    ind: 10,
    title: 'Tomato basil',
    author: '@shelleypauls',
    label: "안녕하세요",
    nftlist:[
      {
        img:img1,
        profile:"2022.06.10",
      },
      {
        img:img2,
        profile:"2020.05.07",
      },
    ],
  },
  {
    ind: 11,
    title: 'Sea star',
    author: '@peterlaster',
    label: "안녕하세요",
    nftlist:[
      {
        img:img1,
        profile:"2022.06.10",
      },
      {
        img:img2,
        profile:"2020.05.07",
      },
    ],
  },
  {
    ind: 12,
    title: 'Bike',
    author: '@southside_customs',
    label: "안녕하세요",
    nftlist:[
      {
        img:img1,
        profile:"2022.06.10",
      },
      {
        img:img2,
        profile:"2020.05.07",
      },
    ],
  },
];

