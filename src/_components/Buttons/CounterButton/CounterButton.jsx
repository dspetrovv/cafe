import React, { useState } from "react";
import styles from './counter-button.module.scss';

const CounterButton = ({ initialCount = 1, onChange, price, disabled = false }) => {
  const [count, setCount] = useState(initialCount);
  const onIncrement = () => {
    setCount((prevState) => {
      if (prevState > 99) {
        return prevState;
      }
      return ++prevState;
    });
    onChange(price * count);
  };
  const onDecrement = () => {
    setCount((prevState) => {
      if (prevState === 0) {
        return prevState;
      }
      return --prevState;
    });
    onChange(price * count);
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