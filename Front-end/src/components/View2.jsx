// import React from "react";
// import {
//   Container,
//   Box,
//   Typography,
//   Tabs,
//   Tab,
//   IconButton,
// } from "@mui/material";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// import EditIcon from "@mui/icons-material/Edit";
// import { useState } from "react";


// const View = () => {
//   const [selectedTab, setSelectedTab] = React.useState(0);

//   const handleTabChange = (event, newValue) => {
//     setSelectedTab(newValue);
//   };

//   const handleBackClick = () => {
//     window.location.href = "/home";
//   };

//   const [showPopUpEdit, setShowPopUpEdit] = useState(false);



//   const handleEditClick = () => {
//     setShowPopUpEdit(true);
//   };

//   return (
//     <Container
//       maxWidth="md"
//       sx={{ bgcolor: "#f0f0f0", p: 2, borderRadius: 2, boxShadow: 3, mt: 5 }}
//     >
//       <Box
//         display="flex"
//         alignItems="center"
//         justifyContent="space-between"
//         mb={2}
//       >
//         <IconButton onClick={handleBackClick}>
//           <ArrowBackIcon />
//         </IconButton>
//         <Typography variant="h5" component="div" fontWeight="bold">
//           Vinay G
//         </Typography>
//         <Box>
//           <IconButton>
//             <EditIcon onClick={handleEditClick} />
//           </IconButton>
//         </Box>
//       </Box>
//       <Tabs
//         value={selectedTab}
//         onChange={handleTabChange}
//         indicatorColor="primary"
//         textColor="primary"
//       >
//         <Tab
//           label="Personal Details"
//           sx={{ textTransform: "none", fontSize: "1rem" }}
//         />
//         <Tab
//           label="Documenter"
//           sx={{ textTransform: "none", fontSize: "1rem" }}
//         />
//       </Tabs>
//       {selectedTab === 0 && (
//         <Box mt={2}>

//         </Box>
//       )}
//     </Container>
//   );
// };

// const DetailRow = ({ label, value }) => (
//   <Box display="flex" justifyContent="space-between" mb={2}>
//     <Typography variant="body1" fontWeight="bold" sx={{ fontSize: "1rem" }}>
//       {label}
//     </Typography>
//     <Typography variant="body1" sx={{ fontSize: "1rem" }}>
//       {value}
//     </Typography>
//   </Box>
// );

// export default View;
