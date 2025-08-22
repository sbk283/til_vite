import { useParams } from "react-router-dom";
import TodoEdit from "../components/todos/TodoEdit";
import { useTodos } from "../contexts/todos/useTodos";
import { useEffect, useState } from "react";

function TodoEditPage() {
  // js 자리
  const { id } = useParams();
  const { findTodo } = useTodos();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    if (id) {
      const result = findTodo(id);
      setTodo(result);
    }
  }, [id]);

  if (!todo) {
    return <div>잘못된 아이디 입니다.</div>;
  }

  // jsx 자리
  return (
    <div>
      <h2>편집창</h2>
      {todo ? <TodoEdit todo={todo} /> : <div>자료가 없습니다.</div>}
    </div>
  );
}

export default TodoEditPage;
