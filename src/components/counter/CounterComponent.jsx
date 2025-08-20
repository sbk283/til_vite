import { useCounter } from "../../contexts/counter/useCounter";

function CounterComponent() {
  const ctx = useCounter();
  const randomNum = Math.floor(Math.random() * 10) + 1;
  return (
    <div>
      {ctx.v}
      카운터지요
      <button onClick={ctx.increment}>1 증가</button>
      <button onClick={ctx.decrement}>1 감소</button>
      <button onClick={ctx.reset}>초기화</button>
      <button onClick={() => ctx.addNum(randomNum)}>
        {randomNum}랜덤 증가
      </button>
    </div>
  );
}

export default CounterComponent;
