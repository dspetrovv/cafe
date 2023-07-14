import React from 'react';
import styles from './radio.module.scss';

const Radio = ({ id, name, checked, title = 'title', value, onChange }) => {
  const onChangeHandler = () => {
    onChange(value);
  };

  return (
    <>
      <input
        type="radio"
        id={id}
        name={name}
        className={styles.radio}
        checked={checked}
        value={value}
        key={checked}
        onChange={onChangeHandler}
      />
      <label htmlFor={id} onClick={onChangeHandler}>
        {title}
      </label>
    </>
  );
};

export default Radio;
