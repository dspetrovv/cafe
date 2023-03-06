import React from "react";
import styles from '../../../css/button.module.scss';
import Loader from "../../Loader/Loader";

const Button = ({ text = 'Text', outline, onClick, isLoading = true, disabled }) => {
  let className = `${styles.button}`;
  if (disabled) {
    className += ` ${styles.button_disabled}`;
  }
  if (outline) {
    className += ` ${styles.button_outline}`;
  }

  return (
    <button className={className} disabled={disabled}>
      { isLoading ? (<><Loader /> Загрузка</>) : {text} }
    </button>
  );
};

export default Button;