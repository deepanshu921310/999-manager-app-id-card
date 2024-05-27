import React from "react";
import {
  Toolbar,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (event.target.value.trim() !== "") setEmailError(false);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (event.target.value.trim() !== "") setPasswordError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;
    if (email.trim() === "") {
      setEmailError(true);
      valid = false;
    }
    if (password.trim() === "") {
      setPasswordError(true);
      valid = false;
    }
    if (valid) {
      navigate("/add-employee");
    }
  };

  return (
    <Toolbar
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 20,
        }}
      >
        <img
          src="/logo_999iC.png"
          alt="Logo"
          style={{ maxWidth: "100%", height: "100px" }}
        />
        <Typography variant="h6" sx={{ fontSize: 25, color: "gray", mt: 2 }}>
          Log In to continue
        </Typography>
      </Box>

      <Grid
        container
        spacing={2}
        sx={{ mt: 5, width: { xs: "100%", sm: "75%", md: "50%" } }}
      >
        <Grid item xs={12}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            fullWidth
            required
            error={emailError}
          />
          {emailError && (
            <Alert severity="error" sx={{ width: '100%' }}>Email is required</Alert>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={handlePasswordChange}
            fullWidth
            required
            type="password"
            error={passwordError}
          />
          {passwordError && (
            <Alert severity="error" sx={{ width: '100%' }}>Password is required</Alert>
          )}
        </Grid>
      </Grid>
      <Button
        sx={{ mt: 5, fontSize: 20, color: "black", backgroundColor: "#2BC2B9" }}
        type="submit"
        variant="contained"
        color="primary"
        disabled={!email || !password}
        onClick={handleSubmit}
      >
        Login
      </Button>
    </Toolbar>
  );
};
export default Login;

