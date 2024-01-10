import React from "react";

import styles from "./MaxWidthWrapper.module.css";

export function MaxWidthWrapper({ children, className = "", ...delegated }) {
  return (
    <div className={`${styles.maxWidthWrapper} ${className}`} {...delegated}>
      {children}
    </div>
  );
}
