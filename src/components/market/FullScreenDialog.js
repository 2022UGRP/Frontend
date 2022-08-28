import * as React from 'react';
import { Button, Dialog, ListItemText, ListItem, List, Divider, AppBar, Toolbar, IconButton, Typography, Slide } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const FullScreenDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const transition = React.forwardRef((props, ref) =>
    <Slide direction="up" ref={ref} {...props} />
  );

  return (
    <>
      <Button 
        sx={{
            mt: '1%',
            padding: '1%',
            flexDirection: 'columm',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }}
        variant="outlined" onClick={handleClickOpen}>
        NFT 정보 보기
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              NFT 정보
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="NFT image_2022" secondary="해당이력:" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="NFT image_2021"
              secondary="해당이력:"
            />
          </ListItem>
        </List>
      </Dialog>
    </>
  );
}

export default FullScreenDialog;
