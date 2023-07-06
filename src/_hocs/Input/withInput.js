import React, { createElement, useState } from 'react';
import styles from '@/css/input.module.scss';

const withInput = (Component) => {
  return ({ name, id, label = 'Label', initialValue, Dropdown, Icon, ...otherProps }) => {
    const { required, onChange } = otherProps;
    const [isError, setIsError] = useState(false);
    const labelClassName = `${styles.input__label}${isError ? ` ${styles.input__label_error}` : ''}`;
    const inputClassName = isError ? styles.input_error : undefined;

    const onChangeHandler = (value) => {
      onChange(value);
      if (required) {
        if (!value.length) {
          setIsError(true);
        }
      } else {
        setIsError(false);
      }
    };

    const componentProps = {
      id,
      className: inputClassName,
      value: initialValue,
      onChangeHandler,
      ...otherProps
    };

    return (
      <div className={styles.input__block}>
        <label htmlFor={id} className={labelClassName}>{label}{required && '*'}</label>
        { createElement(Component, componentProps) }
        { Icon }
        { Dropdown }
        { isError && <span className={styles.input__required}>Поле обязательно для ввода</span>}
      </div>
    );
  }
};

export default withInput;