import React, { useState } from "react";
import styles from './radio.module.scss';

const Radio = ({ id, name, text = 'text', onChange }) => {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  return (
    <>
      <input
        type="radio"
        id={id}
        name={name}
        className={styles.radio}
        checked={checked}
      />
      <label htmlFor={name}
        onClick={() => setChecked((prevState) => !prevState)}>{text}</label>
    </>
  );
};

export default Radio;