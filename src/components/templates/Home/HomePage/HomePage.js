import React, { useState, useEffect } from "react";
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
import axios from "axios";
import tableData from "../../Data_table/data.json";
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// const regions = ["All Regions", "Latam", "Europe", "Oceania", "Far East"];
const regions = [
  "All Regions",
  "Africa",
  "Brazil",
  "Central Asia",
  "Europe",
  "Far East",
  "Middle East",
  "North America",
  "Oceania",
  "Russia",
  "South America",
  "South Asia",
];
function HomePage(props) {
  const [value, setValue] = React.useState(0);
  const [selectedRegion, setSelectedRegion] = React.useState(0);
  const [selectedRows, setSelectedRows] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [regionData, setRegionData] = React.useState([]);
  const [allRegSummaryData, setAllRegSummaryData] = React.useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    getData(regions[0]);
    AllRegSummaryData();

    // setInterval(() => {
    //   if (!allRegSummaryData) {
    //     AllRegSummaryData();
    //   }
    // }, 1000);
  }, []);
  const handleChangeSelect = (event) => {
    setSelectedRegion(event.target.value);
    var index = event.target.value;
    getData(regions[index]);
  };
  const getSelectedRows = (totalData, selectedId) => {
    console.log(totalData, selectedId);
    var d = totalData.filter((data) => selectedId.includes(data.Country));
    setSelectedRows(d);
  };

  function getData(region) {
    axios
      .get(`http://13.234.255.46:3001/home/countriesdata`, {
        params: { region: region },
      })
      .then((response) => {
        console.log("hi", response.data);
        var temp = response.data.map((d) => {
          return {
            ...d,
            "Total Teachers":
              parseInt(d.Active || 0) +
              parseInt(d.Inactive || 0) +
              parseInt(d.ViewOnly || 0),
          };
        });
        console.log("temp is ", temp);
        setRegionData(temp);
        setFilteredData(temp);
      });
  }

  function AllRegSummaryData() {
    axios.get(`http://13.234.255.46:3001/home/masterdata`).then((response) => {
      console.log("hi all reg", response.data);
      setAllRegSummaryData(response.data);
    });
  }

  const handleSearch = (event) => {
    var value = event.target.value;
    var temp = regionData.filter((data) =>
      data.Country.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(temp);
  };
  return (
    <div>
      <div className="home-inner-container1">
        <div className="home-inner-container2">
          <div>
            <div className="home-icon">
              <div className="home-icon-left-container">
                <div>
                  <h3>Home</h3>
                </div>
                <div className="slect-dropdown-container">
                  <Select
                    sx={{ height: 43 }}
                    className="select-dropdown"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedRegion}
                    // label="Age"
                    onChange={handleChangeSelect}
                    defaultValue={10}
                  >
                    {regions.map((region, index) => (
                      <MenuItem value={index}>{region}</MenuItem>
                    ))}
                  </Select>
                </div>
                <InputBase
                  id="outlined-search"
                  label="Search by country"
                  placeholder="Search by country"
                  type="search"
                  className="home-search"
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  }
                  onChange={handleSearch}
                />
              </div>
              <div className="home-export-add-container">
                <UiButton
                  text="Export"
                  onClick={() => {
                    navigate("/home/export", {
                      state: {
                        selectedRows: filteredData,
                        selectedRegion: regions[selectedRegion],
                      },
                    });
                  }}
                ></UiButton>
                <div>
                  <UiButton text={"Add Teacher"}></UiButton>
                </div>
              </div>
            </div>
          </div>
          <hr className="hr-line"></hr>
          <Data_table
            data={filteredData}
            getSelectedRows={getSelectedRows}
            height={400}
          />
          <div></div>
        </div>
      </div>
      <div className="summary-container">
        {allRegSummaryData ? (
          <div>
            <AllReg data={allRegSummaryData} />
          </div>
        ) : (
          <div>loading</div>
        )}

        {/* <AllReg data={allRegSummaryData||} /> */}
        {/* <AllReg /> */}
      </div>
    </div>
  );
}

export default HomePage;
