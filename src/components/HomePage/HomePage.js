import React from 'react';
import UiButton from '../UiCore/FormComponent/UiButton/UiButton';
import "./HomePage.css"
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
// import Box from '@mui/material/Box';


// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function HomePage(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue,"dfdf");
    };
    return (
        <div>
            <div className='home-outer-contanier'>
                <div className='home-inner-container1'>
                    <div className='home-inner-container2'>
                        <div>
                            <div className='home-icon'>
                                <div>
                                    <h3>Home</h3>
                                </div>
                                <div>
                                    <UiButton text={"Add Teacher"}></UiButton>
                                </div>
                            </div>
                        </div>
                        <div>
                            {/* <UiButton text={"All regions"}></UiButton>
                            <UiButton text={"LATAM"}></UiButton>
                            <UiButton text={"Europe"}></UiButton>
                            <UiButton text={"Oceania"}></UiButton>
                            <UiButton text={"Far East"}></UiButton> */}

                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='home-tab'>
                                    {/* <div > */}
                                        <Tab label="All Regions" {...a11yProps(0)} style={{backgroundColor:value==0?"#1976D2":"#D3D3D3",color:value==0?"white":"black"}} />
                                        <Tab label="LATAM" {...a11yProps(1)} style={{backgroundColor:value==1?"#1976D2":"#D3D3D3",color:value==1?"white":"black"}}/>
                                        <Tab label="Europe" {...a11yProps(2)} style={{backgroundColor:value==2?"#1976D2":"#D3D3D3",color:value==2?"white":"black"}}/>
                                        <Tab label="Oceania" {...a11yProps(3)} style={{backgroundColor:value==3?"#1976D2":"#D3D3D3",color:value==3?"white":"black"}}/>
                                        <Tab label="Far East" {...a11yProps(4)} style={{backgroundColor:value==4?"#1976D2":"#D3D3D3",color:value==4?"white":"black"}}/>
                                    {/* </div> */}
                                    </Tabs>
                                </Box>

                            </Box>

                        </div>
                        <div className='home-searchbar-div'>
                            <TextField id="outlined-search" label="Search by country" placeholder='Search by country' type="search" className='home-search' 
                            
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <SearchIcon />
                                  </InputAdornment>
                                ),
                              }}
                            
                            />
                            <UiButton text={"Export"}></UiButton>
                            
                        </div>
                        <div>


                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default HomePage;