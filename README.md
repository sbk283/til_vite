# 카운터 예제 (Context API / useReducer)

## 1. 기본 세팅

- App.jsx

```jsx
function App() {
  return <div>App</div>;
}

export default App;
```

## 2. `CounterContext` 를 생성 및 관리

- /src/contexts/`counter` 폴더 생성
- 예) /src/contexts/`theme` 폴더 생성
- 예) /src/contexts/`user` 폴더 생성
- 예) /src/contexts/`bucket` 폴더 생성

## 3. `CounterContext` 파일 생성

- /src/contexts/counter/`CounterContext.jsx`

```jsx
import { createContext, useContext, useReducer } from "react";

// 1. 초기 상태값
const initialState = {
  count: 0,
};
// 2. 리듀서 함수
// action : {type:글자, payload: 전달값}
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    case "ADDNUM":
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
}
// 3. 컨텍스트 생성
const CounterContext = createContext();
// 4. 프로바이더 생성
export function ConunterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    v: state.count,
    increment: () => dispatch({ type: "INCRMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    reset: () => dispatch({ type: "RESET" }),
    add: a => dispatch({ type: "ADDNUM", payload: a }),
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}
// 5. 커스텀 훅
export function useCounter() {
  const ctx = useContext(CounterContext);
  return ctx;
}
```

## 4. 파일 분리

- /src/components/counter/`CounterComponent.jsx`

```jsx
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
```

- /src/components/counter/`initialState.js`

```jsx
// 1. 초기 상태값
export const initialState = {
  count: 0,
};
```

- /src/components/counter/`constants.js`

```jsx
export const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  ADDNUM: "ADDNUM",
};
```

- /src/components/counter/`reducer.js`

```jsx
// 2. 리듀서 함수

import { ACTIONS } from "./constants";

// action : {type: 글자, payload: 값}
export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTIONS.RESET:
      return { ...state, count: 0 };
    case ACTIONS.ADDNUM:
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
}
```

- /src/components/counter/`actions.js`

```jsx
import { ACTIONS } from "./constants";

export const incrementAction = () => ({ type: ACTIONS.INCREMENT });
export const decrementAction = () => ({ type: ACTIONS.DECREMENT });
export const resetAction = () => ({ type: ACTIONS.RESET });
export const addNumAction = a => ({ type: ACTIONS.ADDNUM, payload: a });
export const actions = {
  incrementAction,
  decrementAction,
  resetAction,
  addNumAction,
};
```

- /src/components/counter/`context.jsx`

```jsx
import { createContext, useReducer } from "react";
import {
  addNumAction,
  decrementAction,
  incrementAction,
  resetAction,
} from "./actions";
import { initialState } from "./initialState";
import { reducer } from "./reducer";

// 1. 컨텍스트 생성
export const CounterContext = createContext();

// 2. 프로바이더 생성
export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    v: state.count,
    increment: () => dispatch(incrementAction()),
    decrement: () => dispatch(decrementAction()),
    reset: () => dispatch(resetAction()),
    addNum: a => dispatch(addNumAction(a)),
  };
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}
```

- /src/components/counter/`useCounter.js`

```jsx
import { useContext } from "react";
import { CounterContext } from "./context";

// 5. 커스텀 훅
export function useCounter() {
  const ctx = useContext(CounterContext);
  if (!ctx) {
    throw new Error("에러!");
  }
  return ctx;
}
```

# 테마 예제 (Theme API / useReducer)
