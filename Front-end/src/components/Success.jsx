import React, { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/add-employee');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fafafa'
      }}
    >
      <Box
        component="img"
        src="/Success.png"
        alt="Success"
        sx={{
          width: { xs: "50%", sm: "40%", md: "30%", lg: "10%" },
          height: "auto"
        }}
      />
      <Typography
        variant="h4"
        sx={{
          mt: 4,
          textAlign: "center"
        }}
      >
        Employee Added Successfully!!
      </Typography>

      <Box sx={{ position: "fixed", bottom: 0, width: "100%", display: "flex", justifyContent: "center", mt: 3, mb: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBackToHome}
          sx={{ width: { xs: "100%", sm: "auto" }, color: 'black', backgroundColor: '#2BC2B9', fontSize: '20px' }}
        >
          Back to Add Employee
        </Button>
      </Box>
    </Box>
  )
}

export default Success;
