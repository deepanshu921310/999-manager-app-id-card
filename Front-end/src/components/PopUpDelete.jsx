import React from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const PopUpDelete = () => {
  const handleNoClick = () => {
    window.location.href = '/view'; // Redirect to view.jsx by reloading the page
  };

  return (
    <Box
      sx={{
        width: "40%",
        minHeight: "30vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        p: 3,
        borderRadius: '10px',
        m: 'auto'
      }}
    >
      {/* Question mark icon */}
      <IconButton sx={{ color: 'blue', borderRadius: '50%', mb: 2 }}>
        <HelpOutlineIcon sx={{fontSize: '3rem'}}/>
      </IconButton>

      {/* Text */}
      <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'black' }}>
        Are you sure you want to 
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'black', mb: 1 }}>
        Delete this Employee?
      </Typography>
      <Typography variant="body1" sx={{ color: 'gray'}}>
        Please ensure by delete the employee it will 
      </Typography>
      <Typography variant="body1" sx={{ color: 'gray', mb: 1 }}>
        erase all data...
      </Typography>

      {/* Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
        {/* Use handleNoClick function to reload the page */}
        <Button variant="contained" color="primary" sx={{ mr: 1 }} onClick={handleNoClick}>
          No
        </Button>
        <Button variant="contained" color="error">
          Yes
        </Button>
      </Box>
    </Box>
  );
};

export default PopUpDelete;
