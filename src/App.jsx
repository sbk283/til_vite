import CounterComponent from "./components/counter/CounterComponent";
import { CounterProvider } from "./contexts/counter/context";
import { useTheme } from "./contexts/theme/ThemeContext";

const Popup = () => {
  const { theme, fontSize } = useTheme();
  return <div className={`bg-${theme}-500 font-[${fontSize}px]`}>팝업창</div>;
};

function App() {
  return (
    <>
      <CounterProvider>
        <CounterComponent />
      </CounterProvider>
    </>
  );
}

export default App;
