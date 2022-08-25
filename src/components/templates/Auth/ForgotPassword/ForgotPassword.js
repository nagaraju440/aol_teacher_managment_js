import React from 'react'
import styles from '../Global.module.css'
import AOLlogo from '../AOLlogo.jpg'
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import Form from '../../../UiCore/FormComponent/FormFeild/FormFeild';
import InputFormFeild from '../../../UiCore/FormComponent/InputFormFeild/InputFormFeild';
import UiButton from '../../../UiCore/FormComponent/UiButton/UiButton';
const forgotpasswordSchema=yup.object().shape({
  "uname":yup.string().required(),
})
export default function ForgotPassword() {
  
  const onSubmit=(data)=>{
    console.log("data is",data)
  }
  return (
    <div className={styles.outerContainer}>
    <div className={styles.container}>
    <img src={AOLlogo}  className={styles.img}  />
        <div className={styles.heading}>Forgot Password</div>
        <Form  onSubmit={onSubmit}  schema={forgotpasswordSchema} >
            <label className={styles.label}>Username</label>
            <InputFormFeild label="username" name="uname" className={styles.input} variant={'outlined'}></InputFormFeild>
            <br/>
            <UiButton text="Send" type="submit" className={styles.button}></UiButton>
            <Link to="/login" ><div className={styles.link}>Back to log in</div></Link>
        </Form>
    </div>
    </div>
  )
}
