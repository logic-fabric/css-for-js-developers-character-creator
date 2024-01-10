import React from "react";

import styles from "./ButtonRow.module.css";

export function ButtonRow({ children }) {
  return <div className={styles.buttonRow}>{children}</div>;
}
