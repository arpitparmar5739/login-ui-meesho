import React from "react";
import Button from "../../common/Button";
import FormInput from "../../common/FormInput";
import styles from "./index.module.css";

const SignUp = () => {
  return (
    <div className={styles.signUpContainer}>
      <div className={styles.signUpHeader}>Sign Up for Free</div>
      <div className={styles.signUpForm}>
        <FormInput placeholder={"Email Address*"} />
        <FormInput placeholder={"Password*"} />
        <Button className={styles.signUpGetStartedButton}>Get Started</Button>
      </div>
    </div>
  );
};

export default SignUp;
