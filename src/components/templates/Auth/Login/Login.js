
import styles from "../Global.module.css";
import AOLlogo from "../../../assets/images/aolLogo.png";
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";
import Form from "../../../UiCore/FormComponent/FormFeild/FormFeild";
import InputFormFeild from "../../../UiCore/FormComponent/InputFormFeild/InputFormFeild";
import CheckBoxFeild from "../../../UiCore/FormComponent/CheckBoxFeild/CheckBoxFeild";
import UiButton from "../../../UiCore/FormComponent/UiButton/UiButton";
import { useForm, FormProvider, useFormContext, UseFormReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const Login = () => {
  const onSubmit = (data) => {
    console.log("data is", data);
  };
  const loginSchema=yup.object().shape({
    "username":yup.string().required(),
    "password":yup.string().required()
  })
  const methods = useForm({
    resolver: yupResolver(loginSchema),
    mode:"all",
  });

  const { handleSubmit,formState:{isValid} } = methods;
  const [show,setShow]=useState(false);
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <img src={AOLlogo} className={styles.img} />
        <div className={styles.heading}>Login</div>
         <FormProvider   {...methods} >
          <form  onSubmit={handleSubmit(onSubmit)}   >
          <label className={styles.label}>Username</label>
          <InputFormFeild
            label="username"
            name="username"
            className={styles.input} 
             variant={"outlined"}
            type="email"
            placeholder="enter email address"
          />
          <label className={styles.label}>Password</label>
          <InputFormFeild
            label="Password"
            name="password"
            type={show?"text":"password"}
            className={styles.input}
            placeholder="enter password"

             variant={"outlined"}
             endAdornment={(
              <InputAdornment position="end">
            <IconButton onClick={()=>setShow(!show)} >
              {show?<VisibilityOff/>:<Visibility/>}
            </IconButton>
            </InputAdornment>
            )}
           
             />
            <div  className={styles.checkbox} >
            <CheckBoxFeild label="Remember me?" name="remember" />
            </div>
          <div  className={styles.btnContainer} >
          <UiButton
            text="Login"
            type="submit"
            className={styles.button}
            disabled={!isValid}  
          ></UiButton>
          </div>
         <Link to="/forgotpassword" > <div className={styles.link}>Forgot password?</div></Link>
        </form>
        </FormProvider>
      </div>
    </div>
  );
};
export default Login;
