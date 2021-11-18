import React, {useState} from "react";

function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);
    console.log(count)
    return (
      <div>
        Счёт: {count}
        <button onClick={() => setCount(initialCount)}>Сбросить</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
       </div>
    );
  }

  export default Counter