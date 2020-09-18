import React from "react";
import styles from "./index.module.css";

const Button = ({ className, isSecondary, ...props }) => {
  const buttonClass = isSecondary
    ? styles.secondaryButton
    : styles.primaryButton;
  return (
    <button className={`${buttonClass} ${className}`} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
