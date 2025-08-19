import { useState } from "react";

const TodoWrite = ({ handleTodoAdd }) => {
  // js 자리
  const [title, setTitle] = useState("");
  const handleKeyDown = e => {
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
      handleTodoAdd(newTodo);
      setTitle("");
    }
  };
  // jsx 자리
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSave}>등록</button>
    </div>
  );
};

export default TodoWrite;
