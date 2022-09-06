import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './TabBar.css'
import Home from '../../../pages/home.js';
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
    <Box sx={{ width: '100%',marginTop: '10px'}} className="Tabbar_boxContainer">
      <Box sx={{backgroundColor: 'white',padding: '5px',borderRadius:2 }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  style={{display:'flex',alignItems: 'center',justifyContent: 'center',marginLeft: '10px'}}sx={{
          '& .MuiTabs-indicator':{
            display:'none'
          },
        }}  >
          <Tab label="Home" {...a11yProps(0)}  style={{backgroundColor:value==0?"#1976D2":"white",color:value==0?"white":"black",borderRadius:5,fontSize:'0.850rem',minHeight:'18px',fontWeight:'bold'}}></Tab>
          <Tab label="Teachers" {...a11yProps(1)} style={{backgroundColor:value==1?"#1976D2":"white",color:value==1?"white":"black",borderRadius:5,fontSize:'0.850rem',minHeight:'18px',fontWeight:'bold'}}/>
          <Tab label="Program Types"{...a11yProps(2)} style={{backgroundColor:value==2?"#1976D2":"white",color:value==2?"white":"black",borderRadius:5,fontSize:'0.850rem',minHeight:'18px',fontWeight:'bold'}} />
        </Tabs>
      </Box>
      <div style={{width:'99%',margin:'0px auto',marginTop:"20px",borderRadius:10}}>
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
