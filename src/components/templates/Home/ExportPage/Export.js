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
// import * as XLSX from "xlsx/xlsx.mjs";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Navbar from "../../../UiCore/Navbar/Navbar.js";
import UserData from "../../Data_table/data.json";
import Data_table from "../../Data_table/data_table";
console.log("Userdata iss", UserData.data);
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const regions = ["All Regions", "Latam", "Europe", "Oceania", "Far East"];
function Export(props) {
  const location=useLocation();
  const [value, setValue] = React.useState(0);
  const [selectedRows,setSelectedRows]=useState([])
  const [regionData,setRegionData]=useState(location.state.selectedRows)
  const [selectedRegion,setSelectedRegion]=useState(location.state.selectedRegion)
  // console.log("selected rows are",selectedRows)
  const handleChangeSelect = (event) => {
    setSelectedRegion(event.target.value);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue, "dfdf");
  };
  const getSelectedRows = (totalData, selectedId) => {
    console.log(totalData, selectedId);
    var d = totalData.filter((data) => selectedId.includes(data.Country));
    // console.log("d is", d);
    setSelectedRows(d);
  };
  //   const tableRef = useRef(null);
  //  const { onDownload } = useDownloadExcel({
  //     currentTableRef: tableRef.current,
  //     filename: "AOL Teachers Information",
  //     sheet: "Teachers Data",
  //   });

  const handleExport = () => {
    console.log("this is your file");
    // var wb = XLSX.utils.book_new();
    // var ws = XLSX.utils.json_to_sheet(UserData.data);
    // XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
    // XLSX.writeFile(wb, "AOL Teachers Information.xlsx");
  };

  return (
    <div className="export-outer-container">
      {/* <Navbar></Navbar> */}
      <div className="export-inner-container1">
        <div className="export-inner-container2">
          <div>
            <div className="export-heading-container">
              <div className="export-heading">Region: {selectedRegion}</div>
              <div className="export-close">
                <Link to="/home">
                  <IconButton>
                    <CloseIcon fontSize="large" />
                  </IconButton>
                </Link>
              </div>
            </div>

            <div className="export-subheading-container">
              <div className="export-icon-left-container">
                <InputBase
                  id="outlined-search"
                  label="Search by country"
                  placeholder="Search by country"
                  type="search"
                  className="export-search"
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
              </div>
              <div className="export-buttons-container">
                <UiButton text="Export Selected Rows"  disabled={selectedRows.length!=0?false:true} ></UiButton>
                {/* <div className="export-selectedrows-button">
                  Export Selected Rows
                </div>

                <div className="export-allrows-button" onClick={handleExport}>
                  Export All Rows
                </div> */}
                <UiButton text="Export All Rows"   ></UiButton>

              </div>
            </div>
          </div>
          <hr className="hr-line"></hr>
          <Data_table data={regionData}   
            getSelectedRows={getSelectedRows}
          height={530} />

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Export;
