import TodoList from "../components/todos/TodoList";

function TodoListPage() {
  // js 자리
  return (
    <>
      {/* 할일 목록 */}
      <section className="p-6 rounded-2xl border border-neutral-200/50 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 dark:border-neutral-700/50 dark:bg-neutral-900/70">
        <TodoList />
      </section>
    </>
  );
}

export default TodoListPage;
