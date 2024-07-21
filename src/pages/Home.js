import React from 'react';
import Header from '../components/Header';
import { Box } from '@mui/material';
import MainImage from '../assets/images/AoE4_Wallpaper_X1.webp';

const Home = () => {
  return (
    <div>
      <Header />
      <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
        <img src={MainImage} alt="Age of Empires" />
      </Box>
    </div>
  );
};

export default Home;
