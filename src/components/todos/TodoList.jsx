import { useTodos } from "../../contexts/todos/useTodos";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // js 자리
  const { todos } = useTodos();

  // jsx 자리
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
          할일 목록
        </h2>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full">
          <div className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
            {todos.filter(todo => todo.completed).length}/{todos.length} 완료
          </div>
          {todos.length > 0 && (
            <div className="w-12 h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-green-500 transition-all duration-500 ease-out"
                style={{
                  width: `${(todos.filter(todo => todo.completed).length / todos.length) * 100}%`,
                }}
              ></div>
            </div>
          )}
        </div>
      </div>

      <div>
        {todos.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm">
              아직 할일이 없습니다.
              <br />
              새로운 할일을 추가해보세요!
            </p>
          </div>
        ) : (
          <ul className="space-y-2">
            {todos.map(item => (
              <TodoItem key={item.id} todo={item} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoList;
