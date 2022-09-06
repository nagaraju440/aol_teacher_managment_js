import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './TabBar.css'
import Home from '../../../pages/Home.js';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue,"dfdf");
};

  return (
    <div className="Tabbar_mainbox">
    <Box sx={{ marginTop: '10px'}} className="Tabbar_boxContainer">
      <Box className="Tabbar_BoxSection">
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"sx={{
          '& .MuiTabs-indicator':{
            display:'none'
          },
        }}  className="TabBar_Tabssection">
          <Tab label="Home" {...a11yProps(0)}  style={{backgroundColor:value==0?"#1976D2":"white",color:value==0?"white":"black"}} className="TabBar_Tab"></Tab>
          <Tab label="Teachers" {...a11yProps(1)} style={{backgroundColor:value==1?"#1976D2":"white",color:value==1?"white":"black"}}className="TabBar_Tab"></Tab>
          <Tab label="Program Types"{...a11yProps(2)} style={{backgroundColor:value==2?"#1976D2":"white",color:value==2?"white":"black" }} className="TabBar_Tab"></Tab>
        </Tabs>
      </Box>
      <div  className="TabBar_TabPanelSection">
      <TabPanel  style={{backgroundColor:'white'}} value={value} index={0}>
       <Home/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      </div>
    </Box>
    
    </div>
  );
}
