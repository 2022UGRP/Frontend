import './ResponsiveAppBar.js';
import ButtonAppBar from './ResponsiveAppBar.js';
import RecipeReviewCard from './RecipeReviewCard.js';
import React from 'react';
import { Grid, Box, Pagination } from '@mui/material/Grid';

const Nftshow = () => {
  return (
    <>
      <ButtonAppBar/>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          height: '70%',
          padding: '1%',
        }}>
        <Grid 
          container rowSpacing={1} 
          columnSpacing={{xs: 1, sm:2, md:3}}
          alignItems="center"
          justifyContent="center"
          >
          <Grid xs={2} mx={2} mt={1} mb={1}>
            <RecipeReviewCard/>
          </Grid>
          <Grid xs={2} mx={2} mt={1} mb={1}>
            <RecipeReviewCard/>
          </Grid>
          <Grid xs={2} mx={2} mt={1} mb={1}>
            <RecipeReviewCard/>
          </Grid>
          <Grid xs={2} mx={2} mt={1} mb={1}>
            <RecipeReviewCard/>
          </Grid>
          <Grid xs={2} mx={2} mt={1} mb={1}>
            <RecipeReviewCard/>
          </Grid>
          <Grid xs={2} mx={2} mt={1} mb={1}>
            <RecipeReviewCard/>
          </Grid>
          <Grid xs={2} mx={2} mt={1} mb={1}>
            <RecipeReviewCard/>
          </Grid>
          <Grid xs={2} mx={2} mt={1} mb={1}>
            <RecipeReviewCard/>
          </Grid>
          <Grid xs={2} mx={2} mt={1} mb={1}>
            <RecipeReviewCard/>
          </Grid>
          <Grid xs={2} mx={2} mt={1} mb={1}>
            <RecipeReviewCard/>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          height: '10%',
          padding: '1%',
        }}>
        <Grid 
          container rowSpacing={1} 
          columnSpacing={{xs: 1, sm:2, md:3}}
          alignItems="center"
          justifyContent="center"
          ><Pagination count={10} /></Grid>
      </Box>
    </>
  );
}

export default Nftshow;
