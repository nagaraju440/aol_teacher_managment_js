import React, { useEffect } from 'react';
import image from "../../assets/images/profile.jpeg"
import Navbar from '../../UiCore/Navbar/Navbar';
import "./Section3.css"
import UiButton from '../../UiCore/FormComponent/UiButton/UiButton';
import {useLocation, useNavigate} from 'react-router-dom';
import {Link} from "react-router-dom";



function Section3(props) {
    let location= useLocation();
    let navigate = useNavigate();
    function handleClick(){
        navigate(-1)
    }
    useEffect(()=>{
    
        // setUsersData(location.state);
        console.log("location data",location.state);
        // console.log("my ud",usersData);
      })
    return (
        <div className='s3-outer-container'>

            <Navbar />

            <div className='s3-inner-container1'>
                <div className='s3-tabbar'>
                    <div className='s3-home'>
                        <p>Home</p>
                    </div>
                </div>
                <div className='s3-tm'>
                    <div className='s3-tm-inner-container'>
                        <div>
                            <h2>{location.state.firstname + " " + location.state.lastname}</h2>
                        </div>
                        <div className='s3-search-teacher'>
                            <div className='s3-search-teacher-inner-container'>
                                <div className='s3-st-text'>
                                    <p>Name</p>
                                    <p>Email Id</p>
                                    <p>Phone No</p>
                                    <p>Country</p>
                                    <p>Teacher Status</p>
                                </div>
                                <div className='s3-st-input'>
                                    <p>{location.state.firstname + " " + location.state.lastname}</p>
                                    <p>{location.state.email}</p>
                                    <p>{location.state.mobile1}</p>
                                    <p>{location.state.country}</p>
                                    <p>{location.state.teacheractivitystatus}</p>
                                </div>
                                <div>
                                    <img src={location.state.uploadphoto} alt="Profile pic"></img>
                                </div>
                            </div>
                            <div className='s3-go-back-button'>
                                {/* <Link to="/section1/section2" > */}
                                <UiButton
                                    text="Go back"
                                    type="submit"
                                // className={styles.button}
                                onClick={handleClick}
                                ></UiButton>
                                {/* </Link> */}
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default Section3;