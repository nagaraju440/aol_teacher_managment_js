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
const newPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must be a strong password with atleast 8 characters"
    ),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
});
export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const onSubmit = (data) => {
    console.log("data is", data);
  };
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <img src={AOLlogo} className={styles.img} />
        <div className={styles.heading}>New Password</div>
        <Form onSubmit={onSubmit} schema={newPasswordSchema}>
          <label className={styles.label}>Enter Old Password</label>
          <InputFormFeild
            // label="Enter old password"
            name="oldpassword"
            type={showPassword ? "text" : "password"}
            className={styles.input}
            variant={"outlined"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <label className={styles.label}>Enter New Password</label>
          <InputFormFeild
            // label="Enter new password"
            name="newpassword"
            type={showPassword ? "text" : "password"}
            className={styles.input}
            variant={"outlined"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <label className={styles.label}>Confirm Password</label>
          <InputFormFeild
            // label="Confirm Password"
            name="confirmnewpassword"
            type={showConfirmPassword ? "password" : "text"}
            className={styles.input}
            variant={"outlined"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <div className={styles.btnContainer}>
            <UiButton
              text="Save"
              type="submit"
              className={styles.button}
            ></UiButton>
          </div>
          <div className={styles.link}>
            <Link to="/login">cancel</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
