
import React, { useState } from "react";
function Counter({ initialCount = 0, step = 1 }) {
  // Estado del contador
  const [count, setCount] = useState(initialCount);

  // Funciones de incremento y decremento
  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter;