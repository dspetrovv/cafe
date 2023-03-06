import React from "react";
import styles from './counter-button.module.scss';

const CounterButton = ({ count = 1, onChange, disabled = true }) => {
  const onIncrement = () => {
    onChange((prevState) => prevState++);
  };
  const onDecrement = () => {
    onChange((prevState) => prevState--);
  };

  return (
    <div className={styles.counter}>
      <button onClick={onDecrement} disabled={disabled}>‒</button>
      <span>{count}</span>
      <button onClick={onIncrement} disabled={disabled}>+</button>
    </div>
  );
};

export default CounterButton;