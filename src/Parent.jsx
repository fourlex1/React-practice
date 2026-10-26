import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child count={count} onIncrease={() => setCount(count + 1)} />
      <Child count={count} onIncrease={() => setCount(count + 1)} />
    </div>
  );
}

export default Parent;
