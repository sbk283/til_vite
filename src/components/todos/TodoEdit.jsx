import { useState } from "react";
import { useTodos } from "../../contexts/todos/useTodos";

const TodoEdit = ({ todo }) => {
  // js 자리
  const { editTodo } = useTodos();
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleEditKeyDown = e => {
    if (e.key === "Enter") {
      handleEditSave();
    }
  };
  const handleEditSave = () => {
    if (editTitle.trim()) {
      // 실제로 todos 의 목록에 업데이트 진행
      editTodo(todo.id, editTitle);
    }
  };
  const handleEditCancel = () => {
    // 취소했으므로 원본 데이터로 다시 복구
    setEditTitle(todo.title);
  };

  return (
    <div className="flex items-center gap-3 p-4 bg-white border border-neutral-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 dark:bg-neutral-900 dark:border-neutral-700">
      <input
        type="text"
        value={editTitle}
        onChange={e => setEditTitle(e.target.value)}
        onKeyDown={handleEditKeyDown}
        autoFocus
        className="flex-1 rounded-lg border-2 border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200 dark:focus:border-blue-400"
        aria-label="할 일 제목 편집"
      />
      <div className="flex items-center gap-2">
        <button
          onClick={handleEditSave}
          className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 dark:bg-blue-600 dark:hover:bg-blue-700"
          title="저장"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
        <button
          onClick={handleEditCancel}
          className="p-2 rounded-lg border border-neutral-300 text-neutral-500 hover:text-red-500 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-200 dark:border-neutral-600 dark:text-neutral-400 dark:hover:bg-red-900/30 dark:hover:text-red-400"
          title="취소"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TodoEdit;
