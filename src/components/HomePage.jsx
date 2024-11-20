import React from 'react';
import { Grid, Paper } from '@mui/material';

const HomePage = () => {
  return (
    <Grid container spacing={2}>
      {Array.from({ length: 4 }).map((_, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper style={{ padding: 16, textAlign: 'center' }}>
            Column {index + 1}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
