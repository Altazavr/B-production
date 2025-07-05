import React, { useState } from "react";
import classes from "./Сounter.module.scss"
const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      <h1>{counter}</h1>
      <button className={classes.btn} onClick={() => setCounter(counter - 1)}>minus</button>
      <button className="button" onClick={() => setCounter(counter + 1)}>plus</button>
    </div>
  );
};

export default Counter;
