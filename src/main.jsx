import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Tailwind 사용시 반드시 확인

createRoot(document.getElementById("root")).render(<App />);
