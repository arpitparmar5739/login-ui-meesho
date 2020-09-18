import React, { useCallback, useState } from "react";
import Button from "../../common/Button";
import styles from "./index.module.css";
import Login from "./login";
import SignUp from "./signup";

const Auth = () => {
  const [isSignUpTabSelected, setIsSignUpTabSelected] = useState(true);

  const onSelectedTabChange = useCallback((isSignUpSelected) => {
    setIsSignUpTabSelected(isSignUpSelected);
  }, []);

  return (
    <div className={styles.auth}>
      <div className={styles.authContainer}>
        <div className={styles.selectedAuthTab}>
          <Button
            className={styles.authTabButton}
            isSecondary={!isSignUpTabSelected}
            onClick={() => onSelectedTabChange(true)}
          >
            Sign Up
          </Button>
          <Button
            className={styles.authTabButton}
            isSecondary={isSignUpTabSelected}
            onClick={() => onSelectedTabChange(false)}
          >
            Log In
          </Button>
        </div>
        <div className={styles.selectedTabConatiner}>
          {isSignUpTabSelected ? <SignUp /> : <Login />}
        </div>
      </div>
    </div>
  );
};

export default Auth;
