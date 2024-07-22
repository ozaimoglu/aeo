import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import MainImage from "../assets/images/AoE4_Wallpaper_X1.webp";

const Home = () => {
  return (
    <div>
      <Header />
      <Box display="flex" justifyContent="center" alignItems="center">
        <img src={MainImage} alt="Age of Empires" width="80%" />
      </Box>
    </div>
  );
};

export default Home;
