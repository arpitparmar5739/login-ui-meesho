import React from "react";
import routes from "../routes";
import styles from "./index.module.css";

function App() {
  return <div className={styles.App}>{routes()}</div>;
}

export default App;
