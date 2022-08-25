import { TextField } from "@mui/material";
import  { OutlinedTextFieldProps } from "@mui/material";
import React from "react";
import PropTypes from 'prop-types';
import { useController } from "react-hook-form";

 const InputFormFeild=(props)=>{
    const {
        field,
        fieldState: { error },
      } = useController({ name: props.name, defaultValue: "" });
    return(
        <div>
      <TextField
    {...props}
      {...field}
      className={props.className}
      helperText={error?.message || ""}
      error={!!error?.message}
    />
    </div>
    )
}

export default InputFormFeild;
InputFormFeild.propTypes =
 {
    name: PropTypes.string,
    label:PropTypes.string,
  };