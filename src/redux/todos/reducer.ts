import { Todo } from "./interfaces";
import { todosActionTypes, TodoAction } from "./types";

export default (state: Todo[] = [], action: TodoAction) => {
  switch (action.type) {
    case todosActionTypes.FETCH_TODOS:
      return action.payload;
    case todosActionTypes.DELETE_TODOS:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
