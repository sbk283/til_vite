import { useState } from "react";
import { useTodos } from "../../contexts/todos/useTodos";
import { useNavigate } from "react-router-dom";

const TodoWrite = () => {
  // js 자리
  const navigate = useNavigate();
  const { addTodo } = useTodos();

  const [title, setTitle] = useState("");
  const handleKeyDown = e => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      handleSave();
    }
  };
  const handleSave = () => {
    if (title.trim()) {
      //console.log("새로운 할일 추가");
      const newTodo = {
        id: Date.now().toString(),
        title: title,
        completed: false,
      };
      addTodo(newTodo);
      setTitle("");
      navigate("/todos");
    }
  };
  // jsx 자리
  return (
    <div className="relative">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="새로운 할일을 입력하세요..."
        className="w-full px-4 py-3 pr-20 text-sm border border-neutral-300 rounded-xl bg-neutral-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:bg-neutral-800"
      />
      <button
        onClick={handleSave}
        className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md active:scale-[80]"
      >
        등록
      </button>
    </div>
  );
};

export default TodoWrite;
