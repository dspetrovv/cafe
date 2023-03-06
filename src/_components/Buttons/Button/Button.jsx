import React from "react";
import styles from './button.module.scss';

const Button = ({ text = 'Text', outline = true, onClick, disabled }) => {
  let className = `${styles.button}`;
  if (disabled) {
    className += ` ${styles.button_disabled}`;
  }
  if (outline) {
    className += ` ${styles.button_outline}`;
  }

  return (
    <button className={className} disabled={disabled}>{text}</button>
  );
};

export default Button;