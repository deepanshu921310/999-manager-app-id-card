// src/api.js

import axios from 'axios';

const registerEmployee = async (employeeData) => {
  let data = JSON.stringify({
    empID: "",
    locID: 1,
    cID: 1,
    name: employeeData.fullName,
    mobile: employeeData.mobileNumber,
    DOB: employeeData.dateOfBirth,
    designation: employeeData.designation,
    workShift: employeeData.workShift,
    empType: employeeData.employeeType,
    aadharFront: employeeData.aadharFront,
    aadharBack: employeeData.aadharBack,
    pan: employeeData.panCard,
    bloodgroup: "A+", // You can update this as needed
    bankAcctNo: employeeData.accountNumber,
    beneficiaryName: employeeData.beneficiaryName,
    ifsc: employeeData.ifscCode,
    bankProof: employeeData.panCard, // Assuming bankProof is same as panCard for this example
    profilePic: employeeData.profilePicture,
    jdata: {
      ismgr: 1
    }
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:8080/api/ems/register-employee',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { registerEmployee };
