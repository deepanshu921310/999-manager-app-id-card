
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Divider,
  Container,
  Button,
  Grid
} from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonIcon from "@mui/icons-material/Person";
import View from './View';

const Home = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [empId, setEmpId] = useState("");
  const [workBranch, setWorkBranch] = useState("");
  const [redirectToView, setRedirectToView] = useState(false);
  const handleShareIDCard = () => {
    setRedirectToView(true); // Set redirectToView to true when Share ID Card button is clicked
  };

  // Conditionally render View component if redirectToView is true
  if (redirectToView) {
    return <View />;
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "#fafafa",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
       <Grid container justifyContent="center" alignItems="center" mt={4}>
      <Grid item xs={10} sm={8} md={6} lg={5}>
        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <TextField
            fullWidth
            placeholder="Search by emp Id"
            variant="outlined"
          />
          <IconButton>
            <ExitToAppIcon
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                color: "red",
              }}
            />
          </IconButton>
        </Box>
        {/* Statistic Boxes */}
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                height: "100%",
                border: "2px solid #feb341",
                borderRadius: "20px",
                bgcolor: "#fbf7ef",
                color: "#feb341",
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}>
                2,692
              </Box>
              <Box sx={{ fontSize: "1.5rem", textAlign: "center" }}>
                Total Employees
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="/pie-chart.png"
                  alt="Employee Distribution"
                  style={{ width: "80%", height: "auto" }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                height: "100%",
                border: "2px solid #0fba81",
                borderRadius: "20px",
                bgcolor: "#e3f4ee",
                color: "#0fba81",
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}>
                2,692
              </Box>
              <Box sx={{ fontSize: "1.5rem", textAlign: "center" }}>
                Total Employees
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="/pie-chart.png"
                  alt="Employee Distribution"
                  style={{ width: "80%", height: "auto" }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
      <Box
        sx={{
          height: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
          mt: 4,
        }}
      >
        <Typography variant="h5" sx={{ color: "darkslategray", mb: 2, fontWeight: 600, fontSize: '25px' }}>
          My Employees
        </Typography>
        <Box
          sx={{
            width: "60%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            bgcolor: "white",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            p: 2,
            borderRadius: "10px",
          }}
        >
          <Box sx={{ width: "100%", height: "80%" }}>
            <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    component="img"
                    src="/avtar.jpeg"
                    sx={{ width: 60, height: 60, borderRadius: "50%" }}
                  />
                  <Box sx={{ ml: 2 }}>
                    <Typography
                      variant="subtitle1"
                      onChange={(e) => setName(e.target.value)}
                    >
                      {name}
                    </Typography>
                    <Typography
                      variant="body2"
                      onChange={(e) => setDesignation(e.target.value)}
                    >
                      {designation}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center" }}
                  onChange={(e) => setEmpId(e.target.value)}
                >
                  Emp Id: {empId}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center" }}
                  onChange={(e) => setWorkBranch(e.target.value)}
                >
                  Work Branch: {workBranch}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ bgcolor: "lightgray" }} />
          <Box sx={{ width: "100%", height: "20%", display:'flex', justifyContent: 'center'}}>
            <Button
              sx={{
                mt: 1,
                fontSize: 20,
                color: "red",
              }}
              type="submit"
              onClick={handleShareIDCard} 
            >
              Share ID Card
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: "60%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            bgcolor: "white",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            p: 2,
            borderRadius: "10px",
            mt: 2,
          }}
        >
          <Box sx={{ width: "100%", height: "80%" }}>
            <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    component="img"
                    src="/avtar.jpeg"
                    sx={{ width: 60, height: 60, borderRadius: "50%" }}
                  />
                  <Box sx={{ ml: 2 }}>
                    <Typography
                      variant="subtitle1"
                      onChange={(e) => setName(e.target.value)}
                    >
                      {name}
                    </Typography>
                    <Typography
                      variant="body2"
                      onChange={(e) => setDesignation(e.target.value)}
                    >
                      {designation}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center" }}
                  onChange={(e) => setEmpId(e.target.value)}
                >
                  Emp Id: {empId}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center" }}
                  onChange={(e) => setWorkBranch(e.target.value)}
                >
                  Work Branch: {workBranch}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ bgcolor: "lightgray" }} />
          <Box sx={{ width: "100%", height: "20%", display:'flex', justifyContent: 'center'}}>
            <Button
              sx={{
                mt: 1,
                fontSize: 20,
                color: "red",
              }}
              type="submit"
              onClick={handleShareIDCard}
            >
              Share ID Card
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: "60%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            bgcolor: "white",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            p: 2,
            borderRadius: "10px",
            mt: 2,
          }}
        >
          <Box sx={{ width: "100%", height: "80%" }}>
            <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    component="img"
                    src="/avtar.jpeg"
                    sx={{ width: 60, height: 60, borderRadius: "50%" }}
                  />
                  <Box sx={{ ml: 2 }}>
                    <Typography
                      variant="subtitle1"
                      onChange={(e) => setName(e.target.value)}
                    >
                      {name}
                    </Typography>
                    <Typography
                      variant="body2"
                      onChange={(e) => setDesignation(e.target.value)}
                    >
                      {designation}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center" }}
                  onChange={(e) => setEmpId(e.target.value)}
                >
                  Emp Id: {empId}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center" }}
                  onChange={(e) => setWorkBranch(e.target.value)}
                >
                  Work Branch: {workBranch}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ bgcolor: "lightgray" }} />
          <Box sx={{ width: "100%", height: "20%", display:'flex', justifyContent: 'center'}}>
            
            <Button
              sx={{
                mt: 1,
                fontSize: 20,
                color: "red",
              }}
              type="submit"
              onClick={handleShareIDCard}
            >
              Share ID Card
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
      sx={{
        width: "100%",
        height: { xs: "20%", sm: "25%", md: "30%" },
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "white",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        p: 2,
      }}
    >
      <Box sx={{ width: { xs: "30%", sm: "30%", md: "30%" }, height: "100%", bgcolor: "white", p: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <PersonIcon
            sx={{ fontSize: { xs: "40px", sm: "50px", md: "60px" } }}
          />
          <Box sx={{ width: "100%", height: "20%", display: 'flex', justifyContent: 'center' }}>
            <Button
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "20px" },
                color: "black",
              }}
              type="submit"
            >
              Employees
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: { xs: "30%", sm: "30%", md: "30%" }, height: "100%", bgcolor: "white", p: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <PersonIcon
              sx={{
                fontSize: { xs: "40px", sm: "50px", md: "60px" },
                color: "#2BC2B9",
                mr: 1,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                bgcolor: "#2BC2B9",
                borderRadius: "50%",
                width: { xs: "15px", sm: "20px", md: "25px" },
                height: { xs: "15px", sm: "20px", md: "25px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "white",
                  fontSize: { xs: "10px", sm: "12px", md: "14px" },
                }}
              >
                +
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: { xs: "30%", sm: "30%", md: "30%" }, height: "100%", bgcolor: "white", p: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <PersonIcon
            sx={{ fontSize: { xs: "40px", sm: "50px", md: "60px" } }}
          />
          <Box sx={{ width: "100%", height: "20%", display: 'flex', justifyContent: 'center' }}>
            <Button
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "20px" },
                color: "black",
              }}
              type="submit"
            >
              My Profile
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
    </Container>
  );
};

export default Home;
