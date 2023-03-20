import React, { useState } from "react";
import Button from "../Button";
import styles from './checkbox-button.module.scss';

const CheckboxButton = ({ text, initialChecked, onChange }) => {
  const [checked, setChecked] = useState(false);
  const onChangeHandler = () => {
    setChecked((prevState) => !prevState);
    onChange(checked);
  };

  return (
    <Button white={!checked} className={styles['checkbox-button']} onClick={onChangeHandler}>{ text }</Button>
  );
};

export default CheckboxButton;