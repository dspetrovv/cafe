import React, { createElement, useEffect, useMemo, useRef, useState } from 'react';
import styles from '@/css/input.module.scss';
import IMask from 'imask';
import { getClassName } from '@/functions/classNameFunctions';

const withInput = (Component) => {
  return ({ name, id, label, initialValue, Dropdown, Icon, ...otherProps }) => {
    const { required, phone, wrapperClassName, type, readOnly, min, onChange } = otherProps;
    const [isError, setIsError] = useState(false);
    const labelClassName = `${styles.input__label}${isError ? ` ${styles.input__label_error}` : ''}`;
    const inputClassName = useMemo(() => {
      let additionalClasses = [];
      if (isError) {
        additionalClasses.push(styles.input_error)
      }
      if (readOnly) {
        additionalClasses.push(styles.input_readonly)
      }
      return additionalClasses.length ? getClassName('', additionalClasses) : '';
    }, [isError, readOnly]);

    const blockClassName = useMemo(() => {
      console.log(wrapperClassName);
      return getClassName(styles.input__block, wrapperClassName)}, [wrapperClassName]);
    const input = useRef();
    const [prevValue, setPrevValue] = useState('');
    useEffect(() => {
      if (phone) {
        new IMask(input.current, {
          mask: `+{7}(900)000-00-00`
        });
      }
    }, [phone]);

    useEffect(() => {
      if (type === 'number') {
        new IMask(input.current, {
          mask: Number,
          min: min ?? 0,
          thousandsSeparator: ' '
        });
      }
    }, [type, min]);

    const onChangeHandler = (event) => {
      const value = event.target.value;
      console.log(value, prevValue, prevValue.length, value.length);
      onChange(value);
      if (required) {
        if (phone && value.length < 16) {
          setIsError(true);
        } else if (!value.length) {
          setIsError(true);
        } else {
          setIsError(false);
        }
      }
      if (phone) {
        setPrevValue(value)
      }
    };

    const componentProps = {
      id,
      className: inputClassName,
      value: initialValue,
      ref: input,
      ...otherProps,
      onChange: onChangeHandler,
      type: type === 'number' ? 'text' : type
    };
    delete componentProps.wrapperClassName;
    delete componentProps.phone;

    return (
      <div className={blockClassName}>
        { label && <label htmlFor={id} className={labelClassName}>{label}{required && '*'}</label> }
        { createElement(Component, componentProps) }
        { Icon }
        { Dropdown }
        { isError && <span className={styles.input__required}>Поле обязательно для ввода</span>}
      </div>
    );
  };
};

export default withInput;