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
