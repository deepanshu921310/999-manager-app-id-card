import React, { useEffect } from "react";
import { Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Toolbar style={{ backgroundColor: "#2BC2B9", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <img
          src="/Splash Logo.png"
          alt="Logo"
          style={{ maxWidth: '100%', maxHeight: '100%', height: '170px' }}
        />
      </div>
    </Toolbar>
  );
};
export default Splash;
