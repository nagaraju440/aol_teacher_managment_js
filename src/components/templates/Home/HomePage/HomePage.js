import React, { useEffect } from "react";
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
  const [regionData,setRegionData]=React.useState([]);
  const navigate=useNavigate();
  useEffect(()=>{
    getData(regions[0]);
  },[])
  const handleChangeSelect = (event) => {
    setSelectedRegion(event.target.value);
   var index=event.target.value;
   getData(regions[index]);
   }
   function getData(region){
    axios.get('http://localhost:3001/home/countriesdata',{params:{region:region},})
   .then((response)=>{
     console.log('hi',response.data);
     setRegionData(response.data);
   })}

   const handleSearch=(event)=>{
    // axios.get('http://localhost:3001/home/bycountry',{params:{countryname:region},})
    // .then((response)=>{
    //   console.log('hi',response.data);
    //   setRegionData(response.data);
    // })
  }
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
                <UiButton text="Export" onClick={()=>{navigate('/home/export')}} ></UiButton>
                <div>
                  <UiButton text={"Add Teacher"}></UiButton>
                </div>
              </div>
            </div>
          </div>
          <hr className="hr-line"></hr>
          <Data_table  data={regionData} height={400} />
          <div></div>
        </div>
      </div>
      <div className="summary-container">
        <AllReg />
      </div>
    </div>
  );
}

export default HomePage;

{
  /* <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider',width:'100%' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='home-tab' style={{display:"flex",width:"60%",justifyContent:"space-between"}}>
                    
                                        <Tab label="All Regions" {...a11yProps(0)} style={{backgroundColor:value==0?"#1976D2":"#D3D3D3",color:value==0?"white":"black"}} />
                                        <Tab label="LATAM" {...a11yProps(1)} style={{backgroundColor:value==1?"#1976D2":"#D3D3D3",color:value==1?"white":"black"}}/>
                                        <Tab label="Europe" {...a11yProps(2)} style={{backgroundColor:value==2?"#1976D2":"#D3D3D3",color:value==2?"white":"black"}}/>
                                        <Tab label="Oceania" {...a11yProps(3)} style={{backgroundColor:value==3?"#1976D2":"#D3D3D3",color:value==3?"white":"black"}}/>
                                        <Tab label="Far East" {...a11yProps(4)} style={{backgroundColor:value==4?"#1976D2":"#D3D3D3",color:value==4?"white":"black"}}/>
                              
                                    </Tabs>
                                </Box>

                            </Box> */
}
