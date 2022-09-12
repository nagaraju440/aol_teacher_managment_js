import React from 'react';
import image from "../../assets/images/profile.jpeg"
import Navbar from '../../UiCore/Navbar/Navbar';
import "./Section3.css"
import UiButton from '../../UiCore/FormComponent/UiButton/UiButton';



function Section3(props) {
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
                            <h2>James Warner</h2>
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
                                    <p>James Warner</p>
                                    <p>JamesW@yopmail.com</p>
                                    <p>+1-232-23432</p>
                                    <p>Canada</p>
                                    <p>Active</p>
                                </div>
                                <div>
                                    <img src={image}></img>
                                </div>
                            </div>
                            <div className='s3-go-back-button'>
                                <UiButton
                                    text="Go back"
                                    type="submit"
                                // className={styles.button}
                                ></UiButton>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default Section3;