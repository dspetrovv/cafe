import React, { useState } from "react";
import styles from './radio.module.scss';

const Radio = ({ id, name, text = 'text', onChange }) => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <input
        type="radio"
        id={id}
        name={name}
        className={styles.radio}
        checked={checked}
        onClick={() => setChecked((prevState) => !prevState)}
      />
      <label htmlFor={name}>{text}</label>
    </>
  );
};

export default Radio;