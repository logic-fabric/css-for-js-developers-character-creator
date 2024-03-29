import React from "react";

import { ToggleButton } from "../ToggleButton";
import { ButtonRow } from "../ButtonRow";

import styles from "./ControlPane.module.css";

export function ControlPane({
  title,
  options,
  currentOption,
  handleSelectOption,
}) {
  return (
    <div className={styles.controlPane}>
      <h2 className={styles.title}>
        {title}

        <span className={styles.metadata}>{options.length} options</span>
      </h2>

      <ButtonRow>
        {options.map(({ id, label, color, children }) => (
          <ToggleButton
            key={id}
            isSelected={currentOption === id}
            onClick={() => handleSelectOption(id)}
            label={label}
            color={color}
          >
            {children}
          </ToggleButton>
        ))}
      </ButtonRow>
    </div>
  );
}
