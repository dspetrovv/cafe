import React from "react";
import styles from '../../css/input.module.scss'

const Input = ({ name, id = 1, label = 'Label', required, defaultValue = '', isError, Dropdown, Icon, onBlur }) => {
  const labelClassName = `${styles.input__label}${isError ? ` ${styles.input__label_error}` : ''}`;
  const inputClassName = `${isError ? ` ${styles.input_error}` : ''}`;
  return (
    <div className={styles.input__block}>
      <label htmlFor={id} className={labelClassName}>{label}{required && '*'}</label>
      <input type="text" id={id} className={inputClassName} required={required} value={defaultValue} onBlur={onBlur} />
      { Icon }
      { Dropdown }
      { isError && <span className={styles.input__required}>Поле обязательно для ввода</span>}
    </div>
  );
};

export default Input;