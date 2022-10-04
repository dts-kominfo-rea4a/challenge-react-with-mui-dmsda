// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import { Typography } from '@mui/material';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
    <Header>
      <Typography variant="h1">Call a Friend</Typography>
      <Typography variant="h2">Your friendly contact app</Typography>
    </Header>
    </>
  );
};

export default Header;
