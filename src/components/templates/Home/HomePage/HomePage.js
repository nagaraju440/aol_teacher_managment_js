import React from "react";
import UiButton from "../../../UiCore/FormComponent/UiButton/UiButton";
import "./HomePage.css";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { InputBase } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import AllReg from "../All_register/Alreg";
import Data_table from "../../Data_table/data_table";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const regions = ["All Regions", "Latam", "Europe", "Oceania", "Far East"];
function HomePage(props) {
  const [value, setValue] = React.useState(0);
  const [selectedRegion, setSelectedRegion] = React.useState(0);
  const navigate = useNavigate();
  const handleChangeSelect = (event) => {
    setSelectedRegion(event.target.value);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue, "dfdf");
  };
  return (
    <div>
      <div className="home-inner-container1">
        <div className="home-inner-container2">
          <div>
            <div className="home-icon">
              <div className="home-icon-left-container">
                <div>
                  <h3>Teacher Management</h3>
                </div>
              </div>
            </div>
          </div>
          <Data_table height={400} />
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
