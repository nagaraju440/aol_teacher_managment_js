
import styles from "../Global.module.css";
import AOLlogo from "../AOLlogo.jpg";
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment } from "@mui/material";
import * as yup from 'yup';
import { Link } from "react-router-dom";
import Form from "../../../UiCore/FormComponent/FormFeild/FormFeild";
import InputFormFeild from "../../../UiCore/FormComponent/InputFormFeild/InputFormFeild";
import CheckBoxFeild from "../../../UiCore/FormComponent/CheckBoxFeild/CheckBoxFeild";
import UiButton from "../../../UiCore/FormComponent/UiButton/UiButton";
const Login = () => {
  const onSubmit = (data) => {
    console.log("data is", data);
  };
  const loginSchema=yup.object().shape({
    "uname":yup.string().required(),
    "password":yup.string().required()
  })
  const [show,setShow]=useState(true);
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <img src={AOLlogo} className={styles.img} />
        <div className={styles.heading}>Login</div>
        <Form onSubmit={onSubmit} schema={loginSchema} >
          <label className={styles.label}>Username</label>
          <InputFormFeild
            label="username"
            name="uname"
            className={styles.input} 
             variant={"outlined"}
             
          />
          <label className={styles.label}>Password</label>
          <InputFormFeild
            label="Password"
            
            name="password"
            type={show?"text":"password"}
            className={styles.input}
             variant={"outlined"}
            InputProps={{
              endAdornment:(
                <InputAdornment position="end">
              <IconButton onClick={()=>setShow(!show)} >
                {show?<VisibilityOff/>:<Visibility/>}
              </IconButton>
              </InputAdornment>
              )
            }}
             />
            <CheckBoxFeild label="Remember me?" name="remember" />
          <UiButton
            text="Login"
            type="submit"
            className={styles.label}
          ></UiButton>
         <Link to="/forgotpassword" > <div className={styles.link}>Forgot password?</div></Link>
        </Form>
      </div>
    </div>
  );
};
export default Login;
