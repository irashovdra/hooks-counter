import { useState } from "react";

export const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const onPlus = () => {
    setCounterValue(counterValue + 1);
  };
  const onMinus = () => {
    setCounterValue(counterValue - 1);
  };
  return (
    <div>
      <h1>Counter: {counterValue}</h1>
      <button onClick={onPlus}>Increase on 1</button>
      <button onClick={onMinus}>Decrease on 1</button>
    </div>
  );
};
