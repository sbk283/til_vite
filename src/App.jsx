import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [q, setQ] = useState("hello");
  useEffect(() => {
    console.log(q);
  }, [q]);
  return (
    <div>
      <h1>App</h1>
      <button onClick={() => setCount(count + 1)}>count: {count}</button>
      <div>
        <input value={q} onChange={e => setQ(e.target.value)} />
      </div>
    </div>
  );
}

export default App;
