import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { TodoProvider } from "./contexts/todos/context";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import TodoEditPage from "./pages/TodoEditPage";
import TodoListPage from "./pages/TodoListPage";
import TodoReadPage from "./pages/TodoReadPage";
import TodoWritePage from "./pages/TodoWritePage";

function App() {
  // jsx 자리
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50 text-neutral-800 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 dark:text-neutral-100">
      <Router>
        <Header />
        {/* 메인 */}
        <main className="max-w-4xl mx-auto px-6 py-8 space-y-6">
          <TodoProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todos" element={<TodoListPage />} />
              <Route path="/todos/write" element={<TodoWritePage />} />
              <Route path="/todos/:id" element={<TodoReadPage />} />
              <Route path="/todos/:id/edit" element={<TodoEditPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TodoProvider>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
