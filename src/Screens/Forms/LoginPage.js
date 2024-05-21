import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import LandingpageImage from '../../Images/LandingpageImage.png'; 

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, e.g., send data to backend for authentication
    console.log('Login Form Data:', formData);
  };

  return (
    <Container maxWidth="xlg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src={LandingpageImage} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Grid>
        <Grid item xs={12} md={6} style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <Typography variant="h4" align="center" gutterBottom>
              Login
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}> {/* Changed Grid item to take full width */}
                  <Button variant="contained" color="primary" type="submit" fullWidth>
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          
            <p align="left"> Don't have an account? &nbsp;
 <Link to="/">Sign up</Link></p>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
