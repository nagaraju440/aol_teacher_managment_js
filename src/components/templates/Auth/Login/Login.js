import styles from "../Global.module.css";
// import AOLlogo from "../AOLlogo.png";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../../UiCore/FormComponent/FormFeild/FormFeild";
import InputFormFeild from "../../../UiCore/FormComponent/InputFormFeild/InputFormFeild";
import CheckBoxFeild from "../../../UiCore/FormComponent/CheckBoxFeild/CheckBoxFeild";
import UiButton from "../../../UiCore/FormComponent/UiButton/UiButton";
import * as axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { blue } from "@mui/material/colors";

var msg, link_url;
const Login = () => {
  var navigate = useNavigate();

  //for dialogue box
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // for disabling button
  const [emailId, setEmailId] = React.useState("");
  // console.log("uname", emailId);
  const [passwordId, setPasswordId] = React.useState("");
  // console.log("pwd", passwordId);

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  //   console.log('email ->', username);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  //   console.log('password ->', password);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(`Your state values: \n
  //           email: ${username} \n
  //           password: ${password} \n
  //           You can replace this alert with your process`);
  // };

  let onSubmit = (data) => {
    console.log("data uname", data.username);
    console.log("data pwd", data.password);
    axios
      .get(`${process.env.REACT_APP_BASE_API_URL}/ad/findone`, {
        params: { email: data.username, password: data.password },
      })
      .then((response) => {
        {
          console.log("response msg uname", response.data.username);
          if (response.data.message === "yes") {
            const token = response.data.token;
            sessionStorage.setItem("user", token);
            sessionStorage.setItem("username", response.data.username);
            // msg = "Login Successfull";
            // link_url = "/home";
            //Redirect to home page
            navigate("/home");
            // setOpen(true);
          } else {
            msg = "Invalid username or password";
            link_url = "/login";
            setOpen(true);
          }
        }
      });
  };

  const loginSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });
  const [show, setShow] = useState(true);
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        {/* <img src={AOLlogo} className={styles.img} /> */}
        <div className={styles.heading}>Login</div>
        <Form onSubmit={onSubmit} schema={loginSchema}>
          <label className={styles.label}>Username</label>
          <InputFormFeild
            // label="Username"
            name="username"
            className={styles.input}
            variant={"outlined"}
            onChange={
              ((e) => setEmailId(e.target.value),
              console.log("setting username", emailId))
            }
            value={emailId}
          />
          <label className={styles.label}>Password</label>
          <InputFormFeild
            // label="Password"
            name="password"
            type={show ? "password" : "text"}
            className={styles.input}
            variant={"outlined"}
            onChange={
              ((e) => setPasswordId(e.target.value),
              console.log("setting psw", passwordId))
            }
            value={passwordId}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShow(!show)}>
                    {show ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {/* <CheckBoxFeild label="Remember me?" name="remember" /> */}
          <br />
          <Button
            type="submit"
            variant="contained"
            className={styles.button}
            // disabled={emailId.length < 1 && passwordId.length < 1 }
          >
            Login
          </Button>
          {/* <UiButton
            text="Login"
            type="submit"
            disabled={!username && !password ? false : true}></UiButton> */}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{msg}</DialogTitle>
            <DialogActions>
              <Link to={link_url} style={{ textDecoration: "none" }}>
                <Button variant="contained" onClick={handleClose} autoFocus>
                  Ok
                </Button>
              </Link>
            </DialogActions>
          </Dialog>

          <Link
            to="/forgot-password"
            style={{ textDecoration: "none", color: "blue" }}
          >
            {/* {" "} */}
            <div className={styles.link}>Forgot password?</div>
          </Link>
        </Form>
      </div>
    </div>
  );
};
export default Login;
