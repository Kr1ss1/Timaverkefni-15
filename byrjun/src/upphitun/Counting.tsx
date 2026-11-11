import { useState } from "react";

function Counting() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prev) => prev + 1);
  }

  return (
    <div className="card">
      <h3>Teljari</h3>
      <p className="count">{count}</p>
      <button onClick={handleClick}>Telja</button>
    </div>
  );
}

export default Counting;
