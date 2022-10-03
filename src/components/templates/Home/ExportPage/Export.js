import React, { useRef, useState } from "react";
import UiButton from "../../../UiCore/FormComponent/UiButton/UiButton";
import "./Export.css";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Button, { ButtonProps } from "@mui/material/Button";
import { InputBase } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import * as XLSX from "xlsx/xlsx.mjs";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
const regions = ["All Regions", "Latam", "Europe", "Oceania", "Far East"];
function Export(props) {
  const location = useLocation();
  const [value, setValue] = React.useState(0);
  const [selectedRows, setSelectedRows] = useState([]);
  const [regionData, setRegionData] = useState(location.state.selectedRows);
  const [selectedRegion, setSelectedRegion] = useState(
    location.state.selectedRegion
  );
   console.log("location is",location.state)
  let navigate = useNavigate();

  const handleExportAllRows = () => {
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(regionData);
    XLSX.utils.book_append_sheet(wb, ws, "Teachers Data");
    XLSX.writeFile(wb, "AOL Teachers Information.xlsx");
  };
  const handleExportSelectedRows = () => {
    // console.log("this is your file");
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(selectedRows);
    XLSX.utils.book_append_sheet(wb, ws, "Teachers Data");
    XLSX.writeFile(wb, "AOL Teachers Information.xlsx");
  };

  function handleClose() {
    navigate(-1);
  }
  

  return (
    <div className="export-outer-container">
      {/* <Navbar></Navbar> */}
      <div className="export-inner-container1">
        <div className="export-inner-container2">
          <div>
            <div className="export-heading-container">
              <div className="export-heading">Region: {selectedRegion}</div>
              <div className="export-close">
                <div className="export-selection-number">
                  {selectedRows.length} records selected
                </div>
                <IconButton>
                  <CloseIcon fontSize="large" onClick={handleClose} />
                </IconButton>
              </div>
            </div>
            <div className="export-subheading-container">
              <div className="export-icon-left-container">
               
              </div>
              <div className="export-buttons-container">
                <UiButton
                  text="Export Selected Rows"
                  disabled={selectedRows.length != 0 ? false : true}
                  onClick={handleExportSelectedRows}
                ></UiButton>
                <UiButton
                  text="Export All Rows"
                  onClick={handleExportAllRows}
                ></UiButton>
              </div>
            </div>
          </div>
          <hr className="hr-line"></hr>
          {/* <Data_table
            data={regionData}
            getSelectedRows={getSelectedRows}
            height={500}
          /> */}

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Export;
