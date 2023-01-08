import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
// import Box from '@mui/material/Box';
import {useNavigate} from 'react-router-dom';
import img1 from 'img/1.png';
import img2 from 'img/2.png';
// import img3 from 'img/3.png';
// import img4 from 'img/4.png';
// import img5 from 'img/5.png';
// import img6 from 'img/6.png';
// import img7 from 'img/7.png';
// import img8 from 'img/8.png';
// import img9 from 'img/9.png';
// import img10 from 'img/10.png';
// import img11 from 'img/11.png';
// import img12 from 'img/12.png';
// import { maxWidth, sizeWidth } from '@mui/system';


const TitlebarImageList1 = (props) => {
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
    <ImageList sx={{ width: '100%', height: '100%' }} cols={4}>
      {/* <ImageListItem key="Subheader" cols={4}>
        <ListSubheader component="div"></ListSubheader>
      </ImageListItem> */}
      {itemData.map((item, index) => (
        <ImageListItem key={item.ind}>
          <img
            src={item.nftlist[0].img}
            //srcSet={item.img}
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
                  onClick={(e) => handleClick(e, index)}
                >
                  <InfoIcon />
                </IconButton>
                {/* <Popper id={id} open={open} anchorEl={anchorEl}>
                    <Button id={`id${id}`} onClick={move(index)}></Button>
                </Popper> */}
                
                
              </div>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default TitlebarImageList1;

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

