import React from "react";

import styles from "./ToggleButton.module.css";

export function ToggleButton({
  label,
  color,
  children,
  isSelected,
  ...delegated
}) {
  return (
    <button
      {...delegated}
      aria-pressed={isSelected}
      className={styles.toggleButton}
      style={{ backgroundColor: color }}
    >
      <span className="sr-only">{label}</span>

      {children}
    </button>
  );
}
