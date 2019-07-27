import React from 'react';

const Counter = ({ onIncrement, onDecrement, onDone }) => {
  return (
    <span>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDone}>✓</button>
    </span>
  );
};

export default Counter;
