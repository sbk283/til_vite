import { useState } from "react";
import TodoList from "./components/todos/TodoList";
import TodoWrite from "./components/todos/TodoWrite";
import { TodoProvider } from "./contexts/todos/context";

function App() {
  // js 자리
  // 오로지 하나만 편집이 가능하도록 ID 를 저장해둠
  const [editId, setEditId] = useState(null);
  // 편집을 시작했다.
  const onStartEdit = id => {
    setEditId(id);
  };
  // 편집을 종료했다.
  const onEndEdit = () => {
    setEditId(null);
  };

  // jsx 자리
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50 text-neutral-800 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 dark:text-neutral-100">
      {/* 헤더 */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/80 border-b border-neutral-200/50 dark:bg-neutral-900/80 dark:border-neutral-700/50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-sm">
              ✓
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              할일 앱 서비스
            </h1>
          </div>
          <div className="text-xs font-medium px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-500 dark:text-neutral-400">
            Tailwind UI
          </div>
        </div>
      </header>
      {/* 메인 */}
      <main className="max-w-4xl mx-auto px-6 py-8 space-y-6">
        <TodoProvider>
          {/* 할일 작성 */}
          <section className="p-6 rounded-2xl border border-neutral-200/50 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 dark:border-neutral-700/50 dark:bg-neutral-900/70">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                새 할일 추가
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                오늘 완료하고 싶은 일을 적어보세요
              </p>
            </div>
            <TodoWrite onEndEdit={onEndEdit} />
          </section>
          {/* 할일 목록 */}
          <section className="p-6 rounded-2xl border border-neutral-200/50 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 dark:border-neutral-700/50 dark:bg-neutral-900/70">
            <TodoList
              onEndEdit={onEndEdit}
              onStartEdit={onStartEdit}
              editId={editId}
            />
          </section>
        </TodoProvider>
      </main>
      {/* 푸터 */}
      <footer className="text-center py-8">
        <p className="text-xs text-neutral-400 dark:text-neutral-500">
          Made with ❤️ using React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}

export default App;
