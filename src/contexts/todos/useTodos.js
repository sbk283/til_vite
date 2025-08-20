import { useContext } from "react";
import { TodoContext } from "./context";

export function useTodos() {
  const ctx = useContext(TodoContext);
  if (!ctx) {
    throw new Error("컨텍스트 생성 안됨, 반드시 Provider 에서 사용하세요. ");
  }
  return ctx;
}
