import React, {useState} from 'react';
import ResponsiveAppBar from './ResponsiveAppBar.js';
import RecipeReviewCard from './RecipeReviewCard.js';
import { Grid, Box, Pagination} from '@mui/material';
import Aftertopfixed from 'components/fixed/Aftertopfixed.js';
import Bottomfixed from 'components/fixed/Bottomfixed.js';

const Marketmainform = (props) => {
  const [ind,setInd]=React.useState(0);
  const [Recipe, setRecipe] = useState({
    title:`${props.market.title}` ,
    subheader: `${props.market.subheader}`,
    suminfo: `${props.market.suminfo}`

})
  return (
    <>
      <Aftertopfixed/>
      <ResponsiveAppBar setInd={setInd} />
      {ind}
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
            <RecipeReviewCard
              Recipe={Recipe}
            />
          </Grid>s
          <Grid xs={2} mx={2} mt={1} mb={1}>
            <RecipeReviewCard
              Recipe={Recipe}
            />
          </Grid>
          <Grid xs={2} mx={2} mt={1} mb={1}>
          <RecipeReviewCard
              Recipe={Recipe}
            />
          </Grid>
          <Grid xs={2} mx={2} mt={1} mb={1}>
          <RecipeReviewCard
              Recipe={Recipe}
            />
          </Grid>
          <Grid xs={2} mx={2} mt={1} mb={1}>
          <RecipeReviewCard
              Recipe={Recipe}
            />
          </Grid>
          <Grid xs={2} mx={2} mt={1} mb={1}>
          <RecipeReviewCard
              Recipe={Recipe}
            />
          </Grid>
          <Grid xs={2} mx={2} mt={1} mb={1}>
          <RecipeReviewCard
              Recipe={Recipe}
            />
          </Grid>
          <Grid xs={2} mx={2} mt={1} mb={1}>
          <RecipeReviewCard
              Recipe={Recipe}
            />
          </Grid>
          <Grid xs={2} mx={2} mt={1} mb={1}>
          <RecipeReviewCard
              Recipe={Recipe}
            />
          </Grid>
          <Grid xs={2} mx={2} mt={1} mb={1}>
          <RecipeReviewCard
              Recipe={Recipe}
            />
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
      {/* <Bottomfixed/> */}
    </>
  );
};

export default Marketmainform;