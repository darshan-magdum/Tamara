import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Link } from 'react-router-dom';
const BusinessBasicDetails = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '', // Added contact number field
    message: ''
  });

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setSelectedValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to backend
    console.log(formData);
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
      Take your business to the next level with Tamara
      </Typography>
      <p align="center">Let us start by getting to know one another better.</p>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Contact Number"
              name="contactNumber"
              type="tel" // Setting type to 'tel' for contact number input
              value={formData.contactNumber}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="select-label">Business of Registration</InputLabel>
              <Select
                labelId="select-label"
                id="select"
                value={selectedValue}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="option1">Quawait</MenuItem>
                <MenuItem value="option2">Qatar</MenuItem>
                <MenuItem value="option3">Oman</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="select-label">How did you Hear about us.</InputLabel>
              <Select
                labelId="select-label"
                id="select"
                value={selectedValue}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="option1">Twitter</MenuItem>
                <MenuItem value="option2">facebook</MenuItem>
                <MenuItem value="option3">Whatsapp</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      <p align="left">By clicking next you agree to
Tamara's terms & conditions.
Previously submitted or do you have an existing account? <Link to="Login">Login</Link></p>
    </Container>
  );
};

export default BusinessBasicDetails;
