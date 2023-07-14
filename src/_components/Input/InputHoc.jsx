import React, { createElement } from "react"
import styles from '@/css/input.module.scss'

const InputHoc = ({ Component, name, id, label = 'Label', initialValue, isError, Dropdown, Icon, ...otherProps }) => {
  const { required } = otherProps;
  const labelClassName = `${styles.input__label}${isError ? ` ${styles.input__label_error}` : ''}`;
  const inputClassName = isError ? styles.input_error : undefined;
  const componentProps = {
    id,
    className: inputClassName,
    value: initialValue,
    ...otherProps
  };

  return (
    <div className={styles.input__block}>
      <label htmlFor={id} className={labelClassName}>{label}{required && '*'}</label>
      {createElement(Component, componentProps)}
      { Icon }
      { Dropdown }
      { isError && <span className={styles.input__required}>Поле обязательно для ввода</span>}
    </div>
  );
};

export default InputHoc;