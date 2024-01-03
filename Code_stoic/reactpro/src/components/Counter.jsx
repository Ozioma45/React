import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  function increment() {
    setCount(count + incrementBy);
  }

  function decrement() {
    setCount(count - incrementBy);
  }

  function increaseIncrement() {
    setIncrementBy(incrementBy + 1);
  }
  function increaseDecrement() {
    setIncrementBy(incrementBy - 1);
  }

  return (
    <div>
      <h1>Count value is : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h1>We are incrementing the value by:{incrementBy}</h1>
      <button onClick={increaseIncrement}>increase Increment</button>
      <button onClick={increaseDecrement}>Increase Decrement</button>
    </div>
  );
}
