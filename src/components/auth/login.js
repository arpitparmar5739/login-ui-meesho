import React from "react";
import Button from "../../common/Button";
import FormInput from "../../common/FormInput";
import styles from "./index.module.css";

const Login = () => {
  console.log("Hello World!");
  return (
    <div className={styles.signUpContainer}>
      <div className={styles.signUpHeader}>Login</div>
      <div className={styles.signUpForm}>
        <FormInput placeholder={"Email Address*"} />
        <FormInput placeholder={"Password*"} />
        <Button className={styles.signUpGetStartedButton}>Login</Button>
      </div>
    </div>
  );
};

export default Login;
