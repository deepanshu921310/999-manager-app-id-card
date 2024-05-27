import "./App.css";
import AddEmployee from "./components/AddEmployee";
import Success from "./components/Success";
import Splash from "./components/Splash";
import Login from "./components/Login";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import View from "./components/View";
import PopUp from "./components/PopUpDelete";
import View2 from "./components/View2";

function App() {
  const [setWorkLocation] = useState("");
  const [setClientCode] = useState("");
  const [setFullName] = useState("");
  const [setMobileNumber] = useState("");
  const [setDateOfBirth] = useState("");
  const [setDesignation] = useState("");
  const [setEmployeeType] = useState("");
  const [setWorkShift] = useState("");
  const [setAccountNumber] = useState("");
  const [setBeneficiaryName] = useState("");
  const [setIfscCode] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreenRedirect />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/add-employee"
          element={
            <AddEmployee
              setWorkLocation={setWorkLocation}
              setClientCode={setClientCode}
              setFullName={setFullName}
              setMobileNumber={setMobileNumber}
              setDateOfBirth={setDateOfBirth}
              setDesignation={setDesignation}
              setEmployeeType={setEmployeeType}
              setWorkShift={setWorkShift}
              setAccountNumber={setAccountNumber}
              setBeneficiaryName={setBeneficiaryName}
              setIfscCode={setIfscCode}
            />
          }
        />
        <Route path="/success" element={<Success />} />
        <Route path="/home" element={<Home />} />
        <Route path="/view" element={<View />} />
        <Route path="/popUp" element={<PopUp />} />
        <Route path="/view2" element={<View2 />} />
      </Routes>
    </Router>
  );
}

function SplashScreenRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return <Splash />;
}

export default App;
