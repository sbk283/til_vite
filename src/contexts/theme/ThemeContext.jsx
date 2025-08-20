import { createContext, useContext, useReducer } from "react";

// 1. 초기값
const initialState = {
  theme: "default", // 기본 테마
};

// 2. 리듀서 함수
function reducer(state, action) {
  switch (action.type) {
    case "BLACK":
      return { ...state, theme: "black" };
    case "GREEN":
      return { ...state, theme: "green" };
    case "BASIC":
      return { ...state, theme: "white" };
    default:
      return state;
  }
}

// 3. 컨텍스트 생성
const ThemeContext = createContext();

// 4. 프로바이더 생성
export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    theme: state.theme,
    blackTheme: () => dispatch({ type: "BLACK" }),
    greenTheme: () => dispatch({ type: "GREEN" }),
    basicTheme: () => dispatch({ type: "BASIC" }),
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
// 5. 커스텀 훅
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("에러입니다!");
  }
  return ctx;
}
