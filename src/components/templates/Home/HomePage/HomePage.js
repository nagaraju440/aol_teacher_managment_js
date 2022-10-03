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
import {GridToolbarQuickFilter} from '@mui/x-data-grid'
import {
  ControllerRenderProps,
  FieldValues,
  useController,
  useFormContext,
} from "react-hook-form";
import Form from "../../../UiCore/FormComponent/FormFeild/FormFeild";
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
  const [selectedRegion, setSelectedRegion] = React.useState(0);
  const [regionData, setRegionData] = React.useState([]);
  const [allRegSummaryData, setAllRegSummaryData] = React.useState(null);
  const [region_countryData, setRegion_countryData] = React.useState([]);
  const [regionCountMap, setRegionCountMap] = useState({});
  const [allRegionData, setAllRegionData] = React.useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getData(regions[0]);
    AllRegSummaryData();
    getRegionCountryData();
    getAllData();
  }, []);
  const handleChangeSelect = (event) => {
    setSelectedRegion(event.target.value);
    var index = event.target.value;
    getData(regions[index]);
  };
  useEffect(() => {
    const token = sessionStorage.getItem("user");
    let mounted = true;
    const regionCountMap = {};
    allRegionData.map((i) => {
      const itemRegionName = region_countryData.find(
        (item) => i.Country === item.countryname
      ).regionname;
      if (regionCountMap[itemRegionName]) {
        regionCountMap[itemRegionName] =
          regionCountMap[itemRegionName] +
          +i.Active +
          +i.Inactive +
          +i.ViewOnly;
      } else {
        regionCountMap[itemRegionName] = +i.Active + +i.Inactive + +i.ViewOnly;
      }
    });
    if (Object.keys(regionCountMap).length != 0) {
      const sumValues = Object.values(regionCountMap).reduce((a, b) => a + b);
      setRegionCountMap({ "All Regions Count": sumValues, ...regionCountMap });
    }
    return () => (mounted = false);
  }, [region_countryData, allRegionData]);

  function getData(region) {
    const token = sessionStorage.getItem("user");
    axios
      .get(`http://13.234.255.46:3001/home/countriesdata`, {
        params: { region: region },
        headers: { authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // console.log("hi", response.data);
        var temp = response.data.map((d) => {
          return {
            ...d,
            "Total Teachers":
              parseInt(d.Active || 0) +
              parseInt(d.Inactive || 0) +
              parseInt(d.ViewOnly || 0),
          };
        });
        // console.log("temp is ", temp);
        setRegionData(temp);
      });
  }
  function getAllData(region) {
    const token = sessionStorage.getItem("user");
    axios
      .get(`http://13.234.255.46:3001/home/countriesdata`, {
        params: { region: "All Regions" },
        headers: { authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // console.log("hi", response.data);
        var temp = response.data.map((d) => {
          return {
            ...d,
            "Total Teachers":
              parseInt(d.Active || 0) +
              parseInt(d.Inactive || 0) +
              parseInt(d.ViewOnly || 0),
          };
        });
        // console.log("temp is ", temp);
        setAllRegionData(temp);
      });
  }
  function getRegionCountryData() {
    const token = sessionStorage.getItem("user");
    axios
      .get(`http://13.234.255.46:3001/home/regions`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setRegion_countryData(response.data);
      });
  }

  function AllRegSummaryData() {
    const token = sessionStorage.getItem("user");
    axios
      .get(`http://13.234.255.46:3001/home/masterdata`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // console.log("hi all reg", response.data);
        setAllRegSummaryData(response.data);
      });
  }

  return (
    <div>
      <div className="home-inner-container1">
        <div className="home-inner-container2">
          
          <Data_table
            data={regionData}
            height={500}
            toolBar={HomePageToolBar}
          />
        </div>
      </div>
      <div className="summary-container">
        {allRegSummaryData ? (
          <div>
            <AllReg data={allRegSummaryData} regionCountMap={regionCountMap} />
          </div>
        ) : (
          <div>loading</div>
        )}
      </div>
    </div>
  );
}
export default HomePage;
export const HomePageToolBar=()=>{
  const navigate=useNavigate();
  return(
    <div>
            <div className="home-icon">
              <div className="home-icon-left-container">
                <div>
                  <h3>Home</h3>
                </div>
                <div className="slect-dropdown-container">
                  <Select
                    sx={{ height: 40 }}
                    // className="select-dropdown"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="region"
                    // value={selectedRegion}
                    // onChange={handleChangeSelect}
                    defaultValue={10}
                  >
                    {regions.map((region, index) => (
                      <MenuItem value={index}>{region}</MenuItem>
                    ))}
                  </Select>
                  <GridToolbarQuickFilter  className="home-search" placeholder="Search by Country" variant="outlined" />
                </div>
              </div>
              <div className="home-export-add-container">
                <UiButton
                  text="Export"
                  onClick={() => {
                    navigate("/home/export", {
                      state: {
                        selectedRegion: "All Regions",
                      },
                    });
                  }}
                ></UiButton>
                <div>
                  <UiButton
                    onClick={() => navigate("/teachers/new")}
                    text={"Add Teacher"}
                  ></UiButton>
                </div>
              </div>
            </div>
          <hr className="hr-line"></hr>

          </div>
  )
}