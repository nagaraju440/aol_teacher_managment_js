import React, { useState } from "react";
import "./Section1.css";
import UiButton from "../../UiCore/FormComponent/UiButton/UiButton";
import TextField from "@mui/material/TextField";
import { Height } from "@mui/icons-material";
import Navbar from "../../UiCore/Navbar/Navbar";
import * as axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Section2 from "../Section2/Section2";


function Section1(props) {
  var [inputData, setInputData] = useState("");
  var [data, setData] = useState([]);
  const navigate = useNavigate();

  let onSearch = () => {
    // console.log(data);
    axios
      .get("http://localhost:3001/teachers/teachersearch", {
        params: { value: inputData },
      })
      .then((response) => {
        if (response.data.length) {
          console.log(response.data);
          setData(response.data);
          // <Section2 data={response.data}/>
          navigate('/section1/section2',{state:response.data});
        } 
        else {
          alert("No teacher found");
        }
      });
  };

  return (
    <div className="s1-outer-container">
      <Navbar />

      <div className="s1-inner-container1">
        <div className="s1-tabbar">
          <div className="s1-home">
            <p>Home</p>
          </div>
        </div>
        <div className="s1-tm">
          <div className="s1-tm-inner-container">
            <div>
              <h2>Teacher Management</h2>
            </div>
            <div className="s1-search-teacher">
              <div className="s1-search-teacher-inner-container">
                <div className="s1-st-text">
                  <p>
                    Search Teacher<sup style={{ color: "red" }}>*</sup>
                  </p>
                </div>
                <div className="s1-st-input">
                  <div>
                    <TextField
                      id="outlined-basic"
                      placeholder="Search by Teacher ID / Name / Email ID / Phone no."
                      type="search"
                      variant="outlined"
                      sx={{
                        height: "10px",
                        width: "500px",
                        "& .MuiInputBase-root": { height: 50 },
                      }}
                      onChange={(e) => {
                        setInputData(e.target.value);
                      }}
                    />

                    {/* <input className='s1-input-feild' type="text" placeholder='Search by Teacher ID / Name / Email ID / Phone no.'></input> */}
                  </div>
                  <div>
                    <UiButton
                      text="Search"
                      type="submit"
                      // className={styles.button}
                      onClick={onSearch}
                    ></UiButton>
                    {/* <Link
                      to={{
                        pathname: "/section1/section2",
                        state: data,
                      }}
                    >
                      Search
                    </Link> */}

                    {/* <button className='s1-search-button'>Search</button> */}
                    <a className="s1-cancel-text">Cancel</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
