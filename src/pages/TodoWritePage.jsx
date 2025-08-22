import { useState } from "react";
import TodoWrite from "../components/todos/TodoWrite";

function TodoWritePage() {
  // js 자리
  // 오로지 하나만 편집이 가능하도록 ID 를 저장해둠
  const [editId, setEditId] = useState(null);
  // 편집을 종료했다.
  const onEndEdit = () => {
    setEditId(null);
  };
  return (
    <>
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
    </>
  );
}

export default TodoWritePage;
