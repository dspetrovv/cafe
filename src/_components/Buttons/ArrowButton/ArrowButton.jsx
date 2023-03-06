import React from "react";
import { ReactComponent as ArrowIcon } from '../../../images/arrow.svg';
import styles from '../../../css/button.module.scss';

const ArrowButton = ({ direction, onClick, disabled }) => {
  let className = `${styles.button} ${styles.button__arrow} ${styles.button__arrow_left}`;

  return (
    <button className={className} disabled={disabled}>
      <ArrowIcon />
    </button>
  );
};

export default ArrowButton;