import React, { useState } from 'react';
import styles from './checkbox.module.scss';

const Checkbox = ({
  initialChecked = false,
  id,
  name,
  title = 'title',
  onChange,
}) => {
  const [checked, setChecked] = useState(initialChecked);
  const onChangeHandler = () => {
    setChecked((prevState) => !prevState);
    onChange();
  };

  return (
    <>
      <input
        type="checkbox"
        id={id}
        name={name}
        className={styles.checkbox}
        checked={checked}
        onChange={onChangeHandler}
      />
      <label htmlFor={id}>{title}</label>
    </>
  );
};

export default Checkbox;
