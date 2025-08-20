import { ACTIONS } from "./constants";

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return { todos: [action.payload, ...state.todos] };
    case ACTIONS.EDIT:
      return {
        todos: state.todos.map(item =>
          item.id === action.payload.id
            ? { ...item, title: action.payload.title }
            : item,
        ),
      };
    case ACTIONS.DELETE:
      return {
        todos: state.todos.filter(item => item.id !== action.payload.id),
      };
    case ACTIONS.TOGGLE:
      return {
        todos: state.todos.map(item =>
          item.id === action.payload.id
            ? { ...item, completed: !item.completed }
            : item,
        ),
      };
    default:
      return state;
  }
}
