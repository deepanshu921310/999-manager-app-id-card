import React from "react";
import {
  Container,
  Box,
  Typography,
  Tabs,
  Tab,
  IconButton,
  Divider,
  Link,
  Grid,
  Button
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import PopUpDelete from './PopUpDelete';
import PopUpEdit from './PopUpEdit';
import CallIcon from "@mui/icons-material/Call";

const View = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleBackClick = () => {
    window.location.href = "/home";
  };

  const [showPopUpDelete, setShowPopUpDelete] = useState(false);
  const [showPopUpEdit, setShowPopUpEdit] = useState(false);

  const [workLocation, setWorkLocation] = useState("");
  const [clientCode, setClientCode] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDOB] = useState("");
  const [designation, setDesignation] = useState("");
  const [workShift, setWorkShift] = useState("");
  const [empType, setEmpType] = useState("");
  const [bankAccountNo, setBankAccountNo] = useState("");
  const [beneficiaryName, setBeneficiaryName] = useState("");
  const [ifsc, setIFSC] = useState("");

  const handleDeleteClick = () => {
    setShowPopUpDelete(true);
    setShowPopUpEdit(false); // Hide edit pop-up if delete icon is clicked
  };

  const handleEditClick = () => {
    setShowPopUpEdit(true);
    setShowPopUpDelete(false); // Hide delete pop-up if edit icon is clicked
  };

//   const handleDocumenterClick = () => {
//       window.location.replace('/View2'); // Redirect to View2.jsx without keeping history
//     };

  return (
    <Container
      maxWidth="md"
      sx={{ bgcolor: "#f0f0f0", p: 2, borderRadius: 2, boxShadow: 3, mt: 5 }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <IconButton onClick={handleBackClick}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5" component="div" fontWeight="bold">
          Vinay G
        </Typography>
        <Box>
          <IconButton>
            <DeleteIcon sx={{ color: "red" }} onClick={handleDeleteClick} />
          </IconButton>
          <IconButton>
            <EditIcon onClick={handleEditClick} />
          </IconButton>
        </Box>
      </Box>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab
          label="Personal Details"
          sx={{ textTransform: "none", fontSize: "1rem" }}
        />
        <Tab
          label="Documenter"
          sx={{ textTransform: "none", fontSize: "1rem" }}
        />
      </Tabs>
      {selectedTab === 0 && (
        <Box mt={2}>
          <DetailRow
            label="Work Location"
            value={workLocation}
            onChange={(e) => setWorkLocation(e.target.value)}
          />
          <DetailRow
            label="Client Code"
            value={clientCode}
            onChange={(e) => setClientCode(e.target.value)}
          />
          <DetailRow
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <DetailRow
            label="Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <DetailRow
            label="DOB"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
          />
          {showPopUpDelete && <PopUpDelete onClose={() => setShowPopUpDelete(false)} />}
      {showPopUpEdit && <PopUpEdit onClose={() => setShowPopUpEdit(false)} />}
          <DetailRow
            label="Designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
          <DetailRow
            label="WorkShift"
            value={workShift}
            onChange={(e) => setWorkShift(e.target.value)}
          />
          <DetailRow
            label="EmpType"
            vvalue={empType}
            onChange={(e) => setEmpType(e.target.value)}
          />
          <Divider sx={{ my: 2 }} />
          <DetailRow
            label="aadhar Front"
            value={<Link href="#">Click to view</Link>}
          />
          <DetailRow
            label="aadhar Back"
            value={<Link href="#">Click to view</Link>}
          />
          <DetailRow label="pan" value={<Link href="#">Click to view</Link>} />
          <Divider sx={{ my: 2 }} />
          <DetailRow
            label="Bank Account No"
            value={bankAccountNo}
            onChange={(e) => setBankAccountNo(e.target.value)}
          />
          <DetailRow
            label="Beneficiary Name"
            value={beneficiaryName}
            onChange={(e) => setBeneficiaryName(e.target.value)}
          />
          <DetailRow
            label="IFSC"
            value={ifsc}
            onChange={(e) => setIFSC(e.target.value)}
          />
        </Box>
      )}
      {selectedTab === 1 && (
        <Container
        maxWidth="md"
        sx={{ bgcolor: "#f0f0f0", p: 2, borderRadius: 2, boxShadow: 3, mt: 5 }}
      >
        <Grid container direction="column" alignItems="center" spacing={2}>
          {/* Image */}
          <Grid item>
            <img
              src="/id_card_final.png"
              alt="ID"
              style={{
                width: "320px",
                height: "500px",
                borderRadius: "20px",
              }}
            />
          </Grid>
          {/* Label */}
          <Grid item container justifyContent="center" alignItems="center">
          <Grid item sx={{ textAlign: "center", display: 'flex' }}>
            <Typography variant="h6" sx={{ color: "gray", margin: "5px", fontSize: '25px' }}>
              Contact No. :
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: '25px', margin: 'auto 20px' }}>
              99999 99999
            </Typography>
          </Grid>
        </Grid>
          
          {/* Columns */}
        <Grid item container justifyContent="space-between">
          {/* Column 1 - Call */}
          <Grid item xs={4} sx={{ borderRight: "1px solid lightgray", height: "40px", textAlign: "center" }}>
            <Button
              variant="text"
              startIcon={<CallIcon />}
              sx={{ color: "black", textTransform: "none", fontSize: "22px", fontWeight: 'bold' }}
            >
              Call
            </Button>
          </Grid>
          {/* Column 2 - Download */}
          <Grid item xs={4} sx={{ borderRight: "1px solid lightgray", height: "40px", textAlign: "center" }}>
            <Button
              variant="text"
              sx={{ color: "red", textTransform: "none", fontSize: "22px", fontWeight: 'bold'}}
            >
              Download ID Card
            </Button>
          </Grid>
          {/* Column 3 - Share */}
          <Grid item xs={4} sx={{ height: "40px", textAlign: "center" }}>
            <Button
              variant="text"
              sx={{ color: "blue", textTransform: "none", fontSize: "22px", fontWeight: 'bold'}}
            >
              Share ID Card
            </Button>
          </Grid>
        </Grid>
        </Grid>
      </Container>
      )}
    </Container>
  );
};

const DetailRow = ({ label, value }) => (
  <Box display="flex" justifyContent="space-between" mb={2}>
    <Typography variant="body1" fontWeight="bold" sx={{ fontSize: "1rem" }}>
      {label}
    </Typography>
    <Typography variant="body1" sx={{ fontSize: "1rem" }}>
      {value}
    </Typography>
  </Box>
);

export default View;
