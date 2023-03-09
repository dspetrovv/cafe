import React from "react";
import styles from '../../css/input.module.scss'

const Input = ({ name, id = 1, label = 'Label', required, isError, onBlur }) => {
  const labelClassName = `${styles.input__label}${isError ? ` ${styles.input__label_error}` : ''}`;
  const inputClassName = `${styles.input}${isError ? ` ${styles.input_error}` : ''}`;
  return (
    <div className={styles.input__block}>
      <label htmlFor={id} className={labelClassName}>{label}{required && '*'}</label>
      <input type="text" id={id} className={inputClassName} required={required} onBlur={onBlur} />
      { isError && <span className={styles.input__required}>Поле обязательно для ввода</span>}
    </div>
  );
};

export default Input;