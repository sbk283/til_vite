import { useNavigate, useParams } from "react-router-dom";
import { useTodos } from "../contexts/todos/useTodos";
import { useEffect, useState } from "react";

function TodoReadPage() {
  const { id } = useParams();
  const navigate = useNavigate(); // Navigate는 컴포넌트가 아니라 hook입니다
  const { findTodo } = useTodos();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    if (id) {
      const result = findTodo(id);
      setTodo(result);
    }
  }, [id, findTodo]);

  const handleEdit = () => {
    navigate(`/todos/${todo.id}/edit`);
  };

  const handleGoToList = () => {
    navigate("/todos");
  };

  if (!todo) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
            잘못된 아이디입니다
          </h2>
          <button
            onClick={() => navigate("/todos")}
            className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600 transition-all duration-200"
          >
            목록으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
        상세 보기
      </h2>
      <div className="group flex items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-200 border-neutral-200 bg-white shadow-sm hover:shadow-md transform hover:-translate-y-0.5 dark:border-neutral-700 dark:bg-neutral-900">
        <span
          className={[
            "flex-1 text-base transition-all duration-200 font-medium",
            todo.completed
              ? "line-through text-neutral-400 dark:text-neutral-500"
              : "text-neutral-700 dark:text-neutral-200",
          ].join(" ")}
        >
          {todo.title}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={handleEdit}
            className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-100 hover:border-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 transition-all duration-200 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:border-neutral-500"
          >
            <svg
              className="w-4 h-4 inline mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            수정
          </button>
          <button
            onClick={handleGoToList}
            className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 transition-all duration-200 active:scale-95"
          >
            <svg
              className="w-4 h-4 inline mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
            목록
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoReadPage;
