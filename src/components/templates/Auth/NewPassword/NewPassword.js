import React, { useState } from "react";
import styles from "../Global.module.css";
import AOLlogo from "../../../assets/images/aolLogo.png";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { InputAdornment, IconButton } from "@mui/material";
import Form from "../../../UiCore/FormComponent/FormFeild/FormFeild";
import InputFormFeild from "../../../UiCore/FormComponent/InputFormFeild/InputFormFeild";
import UiButton from "../../../UiCore/FormComponent/UiButton/UiButton";
import { useForm, FormProvider, useFormContext, UseFormReturn,useController } from "react-hook-form";
import { TextField,Input,InputBase,FormHelperText,FormControl } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
const newPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must be a strong password with atleast 8 characters"
    )
    ,
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
});
export default function NewPassword() {
  const [showPassword,setShowPassword]=useState(true);
  const [showConfirmPassword,setShowConfirmPassword]=useState(true);
   /**
   * stored the password and confirm password value intwo state variables at here
   */
  const [password,setPassword]=useState("")
  const [confirmpassword,setConfirmPassword]=useState("")
  const onSubmit = (data) => {
    console.log("data is", data);
  };

  const methods = useForm({
    resolver: yupResolver(newPasswordSchema),
    mode:"all",
  });
  const { handleSubmit,register,formState:{errors}} = methods;
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <img src={AOLlogo} className={styles.img} />
        <div className={styles.heading}>New Password</div>
        <FormProvider   {...methods} >
          <form  onSubmit={handleSubmit(onSubmit)} className={styles.form_container}   >
          <label className={styles.label}>Enter New Password</label>
          <FormControl  error={!!errors["password"]?.message} >
          <InputBase
            label="Enter new password"
            name="password"
            type={showPassword?"text":"password"}
            className={styles.input}
            {...register("password",{
              onChange:(e)=>{setPassword(e.target.value)}
            })}
            variant={"outlined"}
            endAdornment={(
              <InputAdornment position="end">
            <IconButton onClick={()=>setShowPassword(!showPassword)} >
              {showPassword?<VisibilityOff/>:<Visibility/>}
            </IconButton>
            </InputAdornment>
            )} 
          />
            <FormHelperText id="my-helper-text">{errors["password"]?.message}</FormHelperText>
      </FormControl>
          <div>
          <label className={styles.label}>Confirm Password</label>
          <FormControl  error={!!errors["password"]?.message} >
          <InputBase
            label="Confirm Password"
            name="confirmpassword"
              {...register("confirmpassword",{
                onChange:(e)=>{setConfirmPassword(e.target.value)}
              })}
            type={showConfirmPassword?"text":"password"}
            className={styles.input}
            variant={"outlined"}
            endAdornment={(
              <InputAdornment position="end">
            <IconButton onClick={()=>setShowConfirmPassword(!showConfirmPassword)} >
              {showConfirmPassword?<VisibilityOff/>:<Visibility/>}
            </IconButton>
            </InputAdornment>
            )}
          />
          <FormHelperText id="my-helper-text">{errors["password"]?.message}</FormHelperText>
      </FormControl>
          </div>
         <div className={styles.btnContainer} >
         <UiButton text="Save" type="submit"  className={styles.button} ></UiButton>
         </div>
          <div className={styles.link}><Link to="/login" >cancel</Link></div>
        </form>
        </FormProvider>
      </div>
    </div>
  );
}
