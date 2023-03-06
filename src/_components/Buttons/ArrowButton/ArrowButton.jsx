import React from "react";
import styles from '../Button/button.module.scss';

const ArrowButton = ({ direction, onClick, disabled }) => {
  const ArrowUp = <button>Up</button>;
  const ArrowDown = <button>Down</button>;
  const ArrowLeft = <button>Left</button>;
  const ArrowRight = <button>Right</button>;

  return (
    <button className={styles.button}></button>
  );
};

export default ArrowButton;