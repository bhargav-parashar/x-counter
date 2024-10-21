import React, { useState } from "react";
import styles from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    const operation = e.target.name;
    if (operation === "Increment") {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>Counter App</h1>
      <p>{`Count: ${count}`}</p>
      <div>
        <button name="Increment" onClick={handleClick}>
          Increment
        </button>
        <button name="Decrement" onClick={handleClick}>
          Decrement
        </button>
      </div>
    </div>
  );
};
export default Counter;
