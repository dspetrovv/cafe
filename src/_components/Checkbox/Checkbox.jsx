import React, { useState } from "react";
import styles from './checkbox.module.scss';

const Checkbox = ({ name, text = 'text', onChange }) => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <input
        type="checkbox"
        id={name}
        name={name}
        className={styles.checkbox}
        checked={checked}
        onChange={() => setChecked((prevState) => !prevState)}
      />
      <label htmlFor={name}>{text}</label>
    </>
  );
};

export default Checkbox;