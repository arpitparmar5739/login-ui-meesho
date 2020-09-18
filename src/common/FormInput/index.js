import React from "react";
import styles from "./index.module.css";

const FormInput = (props) => {
  return <input {...props} className={styles.formInput} type="text" />;
};

export default FormInput;
