import React from "react";
import styles from '../../../css/button.module.scss';
import Loader from "../../Loader/Loader";

const getClassNameFromProps = (cssClasses = '', white, outline, isDisabled) => {
  let className = styles.button;
  if (outline || white) {
    className += ` ${outline ? styles.button_outline : styles.button_white}`;
  }
  if (!Array.isArray(cssClasses)) {
    className += ` ${cssClasses}`;
  }
  if (Array.isArray(cssClasses)) {
    className += cssClasses.map((cssClass) => ` ${cssClass}`).join(' ');
  } 
  if (isDisabled) {
    className += ` ${white ? styles.button_white_disabled : styles.button_disabled}`;
  }
  return className;
};

const Button = ({ children, outline, white, className, isLoading, disabled, onClick }) => {
  let buttonClassName = getClassNameFromProps(className, white, outline, disabled);

  return (
    <button className={buttonClassName} disabled={disabled} onClick={onClick}>
      { isLoading ? (<><Loader /> Загрузка</>) : (<>{children}</>)} 
    </button>
  );
};

export default Button;