import * as React from 'react';
import FullScreenDialog from './FullScreenDialog';
import { Card, CardHeader, CardMedia, CardContent, Avatar, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const RecipeReviewCard = (props) => {

  
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (

    <Card sx={{ flexGrow: 1, p:2, maxWidth: 300 }}>
      
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            Yu
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.Recipe.title}
        subheader={props.Recipe.subheader}
      />
      <CardMedia
        component="img"
        height="150"
        image="logo192.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          NFT 정보 요약: {props.Recipe.suminfo}
        </Typography>
        <FullScreenDialog/>
      </CardContent>
    </Card>
  );
}

export default RecipeReviewCard;
