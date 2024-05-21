import React from 'react';
import { Container, Grid } from '@mui/material';
import HorizontalStepper from '../Components/HorizontalStepper';
 import LandingpageImage from '../Images/LandingpageImage.png'; 

const LandingPage = () => {
 
  return (
    <Container maxWidth="xlg">
      <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
          <img src={LandingpageImage} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Grid>
        <Grid item xs={12} md={6} style={{ display: 'flex', alignItems: 'center' }}>
          <div>
           
           <HorizontalStepper/>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
