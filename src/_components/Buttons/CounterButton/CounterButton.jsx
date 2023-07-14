import React, { useState } from 'react';
import styles from './counter-button.module.scss';

const CounterButton = ({ initialCount = 1, onChange, disabled = false }) => {
  const [count, setCount] = useState(initialCount);
  const onIncrement = () => {
    const newCount = count > 99 ? count : count + 1;
    setCount(newCount);
    onChange(newCount);
  };
  const onDecrement = () => {
    const newCount = count === 0 ? count : count - 1;
    setCount(newCount);
    onChange(newCount);
  };

  return (
    <div className={styles.counter}>
      <button onClick={onDecrement} disabled={disabled}>
        ‒
      </button>
      <span>{count}</span>
      <button onClick={onIncrement} disabled={disabled}>
        +
      </button>
    </div>
  );
};

export default CounterButton;
