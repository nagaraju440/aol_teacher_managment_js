import { CircularProgress, Tooltip } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import React from "react";
import styles from "./UiButton.module.css";
const UiButton= (props) => {
  return (
    <Button  variant="contained" {...props} className={props.className}   >
     {props.text}
    </Button>
  );
};
export default UiButton