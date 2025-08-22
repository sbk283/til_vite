import { Link, useNavigate } from "react-router-dom";
import { useTodos } from "../../contexts/todos/useTodos";

const TodoItem = ({ todo }) => {
  // js 자리
  const navigate = useNavigate();
  const { deleteTodo, toggleTodo } = useTodos();

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleEdit = () => {
    // 편집으로 이동
    navigate(`/todos/${todo.id}/edit`);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  // jsx 자리
  return (
    <li className="group flex items-center gap-3 p-4 bg-white border border-neutral-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 dark:bg-neutral-900 dark:border-neutral-700">
      <div className="relative">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="w-5 h-5 text-blue-500 border-2 border-neutral-300 rounded-md focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 transition-colors duration-200 dark:border-neutral-600 dark:bg-neutral-800"
        />
      </div>
      <Link
        to={`/todos/${todo.id}`}
        className={`flex-1 text-sm transition-all duration-200 ${
          todo.completed
            ? "text-neutral-400 line-through"
            : "text-neutral-700 dark:text-neutral-200"
        }`}
      >
        {todo.title}
      </Link>
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={handleEdit}
          className="p-2 text-neutral-500 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all duration-200 dark:hover:bg-blue-900/30"
          title="수정"
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
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </button>
        <button
          onClick={handleDelete}
          className="p-2 text-neutral-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 dark:hover:bg-red-900/30"
          title="삭제"
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
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
